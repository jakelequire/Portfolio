import importArticles from '../pages/api/_fetchArticles';
import { createArticle } from '../../pages/api/_fetchArticles';
/**
 * Create a `new article object` from the imported articles.
 * @returns {Promise<createArticle>}
 */
async function articles() {
    const articles = await importArticles();
    const createArticles = articles.map((article) => ({
        id: article.id,
        title: article.title,
        date: article.date,
        category: article.category,
        tags: article.tags,
        image: article.image,
        imageAlt: article.imageAlt,
        content: article.content
    }));
    return new createArticle(createArticles)
};
