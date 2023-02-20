import importArticles from '../../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const darkTheme = {
	...vscDarkPlus,
	backgroundColor: '#191919'
 };
 

/**
 * Return the array of `article objects`.
 *
 * @returns {JSX.Element}
 */
async function getArticles() {
  const articles = await importArticles();
  return articles.map((article) => new createArticle(
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

/**
 * Exports a `ReactMarkdown` component.
 * 
 * @returns {JSX.Element}
 */
export default function ArticleMarkdown() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use the effect hook to fetch the articles and set the state when the component mounts
  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const newArticles = await getArticles();
      setArticles(newArticles);
      setLoading(false);
    }

    fetchArticles();
  }, []);

  return (
    <div className="Markdown-Article">
      {loading ? <p>Loading...</p> :
      articles.map((article) => (
        	<div className='DEV-article' key={article.id}>
        	   <h4 id="_DEV">{article.id}</h4>
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
							}
						}}
				>
        	  	{article.content} 
        	  	</ReactMarkdown>
        	</div>
      ))}
    </div>
  );
}
/*
{article.title}
{article.date}
{article.tags} 
{article.category} */