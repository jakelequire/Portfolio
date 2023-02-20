import importArticles from '../../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

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
        	<div key={article.id}>
        	   <h3 id="_DEV">{article.id}</h3>
        	  	<h2 id="DEV">{article.title}</h2>
        	  	<p id="DEV">{article.date}</p>
        	  	<p id="DEV">{article.category}</p>
        	  	<p id="DEV">{article.tags}</p>
        	  	<ReactMarkdown 
        	  	  children={article.content}
        	  	  className='DEV'
						components={{
							code({ node, inline, className, children, ...props }) {
							  const match = /language-(\w+)/.exec(className || "");
							  return !inline && match ? (
								 <SyntaxHighlighter
									children={String(children).replace(/\n$/, "")}
									// style={dark}
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
