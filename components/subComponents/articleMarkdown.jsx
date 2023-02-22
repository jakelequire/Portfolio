import React from 'react';
import importArticles from '../../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';

// Customizable dark theme options
const darkTheme = {
	...vscDarkPlus,
	backgroundColor: '#191919'
};
/**
 * @returns {object[]} - Returns an array of objects containing the article data.
 */
async function getArticles() {
	const articles = await importArticles();
	return articles;
}

/**
 * This class is used to create an article object that can be passed to the Article component.
 * 
 * @param {string} id
 * @param {string} title
 * @param {string} date
 * @param {string[]} tags
 * @param {string} category
 * @param {string} image
 * @param {string} imageAlt
 * @param {string} content
 * @returns {object} 
 */
export default class Article extends React.Component {
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
		const articleItems =
			articles.map((article) => (
				<div className="DEV-article" key={article.id}>
					<h4 id="_DEV">{article.title}</h4>
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
		this.setState({ articles: articleItems }); // Pass the articleItems array to setArticles()
		this.setState({ loading: false });
	}

	render() {
		return (
			<div>
				{this.state.articles}
			</div>
		);
	}
}
