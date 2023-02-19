import React, { useState, useEffect } from 'react';
import importArticles from '../pages/api/_fetchArticles.js';

// >---------------------------------------------------------
export default function Test_Dev() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await importArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

// >---------------------------------------------------------
  return (
    <div>

      <div className="DEV_submit">
        <a className="DEV_btn">Fetch Articles</a>
      </div>
      {articles.map((article) => (
        <div className="DEV_articles"key={article.id}>
          <p id="Testing">Title: </p> <span>{article.title}</span>
          <p id="Testing">Date: </p> <span>{article.date}</span>
          <p id="Testing">Category: </p> <span>{article.category}</span>
          <p id="Testing">Tags: </p> <span>{article.tags}</span>
          <p id="Testing">Image: </p> <span>{article.image}</span>
          <p id="Testing">ImageAlt: </p> <span>{article.imageAlt}</span>
          <p id="Testing">Content: </p> <span>{article.content}</span>
        </div>
      ))}
    </div>
  );
};
