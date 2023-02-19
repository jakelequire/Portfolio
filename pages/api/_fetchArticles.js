import axios from "axios";

/**
 * Represents the format of an article.
 * @param {string} title
 * @param {string} date
 * @param {string} content
 * @param {string[]} tags
 * @param {string} category
 * @param {string} image
 * @param {string} imageAlt
 * @returns {Object} An article object.
 */
function createArticle(title, date, content, tags, category, image, imageAlt) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.tags = tags;
    this.category = category;
    this.image = image;
    this.imageAlt = imageAlt;
}
/**
 * Sends a `GET` request to the server to get all articles.
 * 
 * @returns {Promise} A promise that resolves to an array of articles.
 */
export default async function importArticles() {
    const response = await axios.get("http://localhost:3001/articles?query=alphabetically");
    const articles = response.data;

    const articleObject = articles.map((article) => {
        const { title, date, content, tags, category, image, imageAlt } = article;
        return new createArticle(title, date, content, tags, category, image, imageAlt);
    })
    return articleObject;
}