import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import importArticles from 'components/subComponents/importArticles.jsx';

const Articles = async () => {
    const articles = await importArticles();
    const articleData = articles.map((article) => ({
        title: article.title,
        date: article.date,
        content: article.content,
        tags: article.tags,
        category: article.category,
        image: article.image,
        imageAlt: article.imageAlt
    }));
    return articleData;
}

