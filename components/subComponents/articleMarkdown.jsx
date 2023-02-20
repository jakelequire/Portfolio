import importArticles from '../../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';

// Customizable dark theme options
const darkTheme = {
	...vscDarkPlus,
	backgroundColor: '#191919'
};



export async function articleRequest() {

}

/**
 * Returns an array of articles from the API based on the type of request.
 *
 * @param {string} params
 * @param {string} typeOfReq
 * 
 * @returns {Promise<[]>} An array of articles.
 */
async function getArticles(params, typeOfReq) {
	const articles = await importArticles(typeOfReq);
 
	if (params === "topthree") {
	  	return articles
		 	.slice(0, 1)
		 	.map((article) => new createArticle(
				article.id,
				article.title,
				article.date,
				article.tags,
				article.category,
				article.image,
				article.imageAlt,
				article.content,
		 	));
	}
 }

/**
 * Exports a `ReactMarkdown` component.
 * 
 * @returns {JSX.Element} A `ReactMarkdown` component.
 */
export function ArticleMarkdown() {
	const [articles, setArticles] = useState([]);
	const [metaData, setMetaData] = useState({});
	const [loading, setLoading] = useState(true);
  
	async function Article() {
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
	  setMetaData(articleData);
	  const articleItems = articles.map((article) => (
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
	  setArticles(articleItems); // Pass the articleItems array to setArticles()
	  setLoading(false);
	}
  
	useEffect(() => {
	  Article();
	}, []);
  
	return [articles]; // Return an array of articles and metaData objects
}

/*
{article.title}
{article.date}
{article.tags} 
{article.category} 
*/