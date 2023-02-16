import React, { useState } from 'react';
import fetchArticles from '../pages/api/_fetchArticles.js';
export default function Test_Dev() {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  fetchArticles().then((data) => {
    setTitle(data.title);
    setCategories(data.categories);
    setTags(data.tags);
    setDate(data.date);
    setAuthor(data.author);
    setImage(data.image);
    setContent(data.content);
  });


  return (
    <div>
      <h1>{title}</h1>
      <h2>{categories}</h2>
      <h3>{tags}</h3>
      <h4>{date}</h4>
      <h5>{author}</h5>
      <h6>{image}</h6>
      <p>{content}</p>
    </div>
  );
};
