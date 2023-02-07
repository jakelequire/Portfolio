import { useState } from 'react';

export default function TestDev() {
    const UpdateArticle = (props) => {
        const [title, setTitle] = useState('');
        const [categories, setCategories] = useState([]);
        const [tags, setTags] = useState([]);
        const [date, setDate] = useState('');
        const [author, setAuthor] = useState('');
        const [image, setImage] = useState('');
        const [content, setContent] = useState('');
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch(`/api/articles/${props.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title,
              categories,
              tags,
              date,
              author,
              image,
              content,
            }),
          });
      
          if (response.ok) {
            console.log('Article updated successfully');
          } else {
            console.error('Error updating article');
          }
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
            {/* Add inputs for tags, date, author, image, and content */}
            <button type="submit">Update article</button>
          </form>
        );
      };

}