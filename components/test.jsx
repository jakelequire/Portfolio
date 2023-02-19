import React, { useState, useEffect } from 'react';
import importArticles from '../pages/api/_fetchArticles';

export default function Test_Dev() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    importArticles().then((data) => {
      setArticles(data)
    })
  }, [])

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title} {article.id}</h1>
          <p>{article.date}</p>
          <p>{article.category}</p>
          <p>{article.tags}</p>
          <p>{article.image}</p>
          <p>{article.imageAlt}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}