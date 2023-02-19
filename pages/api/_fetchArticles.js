import axios from "axios";
import PropTypes from "prop-types";

/**
 * Represents the format of an article.
 * @param {string} title
 * @param {string} date
 * @param {string} content
 * @param {string[]} tags
 * @param {string} category
 * @param {string} image
 * @param {string} imageAlt
 * @param {string} id
 * @returns {Object} An article object.
 */
function createArticle(title, date, content, tags, category, image, imageAlt, id) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.tags = tags;
    this.category = category;
    this.image = image;
    this.imageAlt = imageAlt;
    this.id = id;
}
createArticle.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
export { createArticle };
/**
 * Sends a `GET` request to the server to get all articles.
 * 
 * @returns {Promise} A promise that resolves to an array of articles.
 */
export default async function importArticles() {
    const response = await axios.get("http://localhost:3001/articles?query=alphabetically");
    const articles = response.data;

    const articleObject = articles.map((article) => {
        const { title, date, content, tags, category, image, imageAlt, id } = article;
        return new createArticle(title, date, content, tags, category, image, imageAlt, id );
    })
    return articleObject;
}