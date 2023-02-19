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
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.date}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};
