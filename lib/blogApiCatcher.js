import axios from 'axios';

const updateArticle = async (id, articleData) => {
  try {
    const response = await axios.put(`/articles/${id}`, articleData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
};

updateArticle('your-article-id', {
  title: 'New Title',
  categories: ['Category 1', 'Category 2'],
  tags: ['Tag 1', 'Tag 2'],
  date: '2022-01-01',
  author: 'Author Name',
  image: 'https://example.com/image.jpg',
  content: 'Article content',
});