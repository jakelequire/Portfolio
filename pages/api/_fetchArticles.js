import axios from "axios";
/* 
  ---
  title: "Example ONE"
  date: "1995-10-6"
  content: "Content??"
  tags: ["React", "Next"]
  category: "Web Development"
  image: "meme.jpg"
  imageAlt: "Meme"
  ---
*/
class Article {
    constructor(title, date, content, tags, category, image, imageAlt) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.tags = tags;
        this.category = category;
        this.image = image;
        this.imageAlt = imageAlt;
    }
}
/**
 * The main function that exports the formatted articles.
 * 
 * @returns {Promise} A promise that resolves to an array of `Article` objects.
 */
export default async function exportArticles() {

}
/**
 * Sends a `GET` request to the server to get all articles.
 * 
 * @returns {Promise} A promise that resolves to an array of articles.
 */
async function importArticles() {
    axios.get("http://localhost:3001/articles").then((res) => {
        console.log(res.data);
    });
}
/**
 * Takes the imported articles and formats into an array of `Article` objects.
 * 
 * @returns {Promise} A promise that resolves to an array of `Article` objects.
 */
async function formatArticles() {

}
