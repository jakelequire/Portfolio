import axios from "axios";

class Article {
    constructor(title, description, tags, date, author, content, image, imageAlt) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.date = date;
        this.author = author;
        this.content = content;
        this.image = image;
        this.imageAlt = imageAlt;
    }
}

export default async function fetchArticles() {
    const { data } = await axios.get("http://localhost:3001/articles");
    const articles = await data.map((article) => {
        return new Article(
            article.title, 
            article.description, 
            article.tags, 
            article.date, 
            article.author, 
            article.content, 
            article.image, 
            article.imageAlt
        );
    });
    console.log(articles)
    return articles;
}
