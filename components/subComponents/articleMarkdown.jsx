import React from 'react';
import importArticles from '../../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';

// Customizable dark theme options
const darkTheme = {
	...vscDarkPlus,
	backgroundColor: '#191919',
};
/**
 * Fetches an array of article objects from API.
 *
 * @async
 * @returns {Promise<Object[]>} - An array of objects containing article data.
 */
async function getArticles() {
	const articles = await importArticles();
	return articles;
}

/**
 * Displays a single article based on the provided index.
 *
 * @component
 * @example
 * <Article index={2} />
 *
 * @param {Object} props - Component props.
 * @param {number} props.index - The index of the article to be displayed.
 * @returns {JSX.Element} - A React component that displays the article.
 */
export default class Article extends React.Component {
	/**
	 * Initializes the Article component with state values.
	 *
	 * @constructor
	 * @param {Object} props - Props to be passed down to the component.
	 */
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			metaData: [],
			loading: true,
		};
	}

	async componentDidMount() {
		const articles = await getArticles();
		const articleData = articles.map((article) =>
			new createArticle(
				article.id,
				article.title,
				article.date,
				article.tags,
				article.category,
				article.image,
				article.imageAlt,
				article.content,
			),
		);
		this.setState({ metaData: articleData });
		console.log("metaData", articleData); 
		const articleItems =
			articles.map((article) => (
				<div className="DEV-article" key={article.id}>
					<ReactMarkdown
						children={article.content}
						components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || "");
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, "")}
										style={darkTheme}
										language={match[1]}
										PreTag="div"
										{...props}
									/>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
						}}
					>
						{article.content}
					</ReactMarkdown>
				</div>
			));
		this.setState({ articles: articleItems });
		this.setState({ loading: false });
	}

	/**
	 * Renders the Article component.
	 *
	 * @returns {JSX.Element} A React component that displays the specified article.
	 */
	render() {
		const index = this.props.index || 0;
		return (
			<div>
				{this.state.articles[index]}
			</div>
		);
	}
}