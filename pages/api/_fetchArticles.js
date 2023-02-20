import axios from "axios";
import PropTypes from "prop-types";

/**
 * Sends a `GET` request to the server to get all articles.
 * 
 * @returns {Promise} A promise that resolves to an array of articles.
 */
export default async function importArticles() {
    const response = await axios.get("http://localhost:3001/articles?query=alphabetically");
    const articles = response.data;

    const articleObject = articles.map((article) => {
        const { id, title, date, tags, category, image, imageAlt, content } = article;
        return new createArticle( id, title, date, tags, category, image, imageAlt, content);
    })
    return articleObject;
}
/**
 * Represents the format of an article.
 * @param {string} id
 * @param {string} title
 * @param {string} date
 * @param {string[]} tags
 * @param {string} category
 * @param {string} image
 * @param {string} imageAlt
 * @param {string} content
 * @returns {Object} An article object.
 */
function createArticle(id, title, date, tags, category, image, imageAlt, content ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.tags = tags;
    this.category = category;
    this.image = image;
    this.imageAlt = imageAlt;
    this.content = content;
}
createArticle.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export { createArticle };