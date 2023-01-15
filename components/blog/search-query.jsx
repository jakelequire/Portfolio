import { useState, useEffect } from "react";
import blogApiCatcher from "../../lib/blogApiCatcher.js"
import useCustomFilter from "../hooks/useCustomFilter.jsx"

export default function SearchQuery() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await blogApiCatcher('GET', 'new');
            setArticles(data);
        }
        fetchData();
    }, []);


    


    const example = {
        content:
        <div className="query-example">
            <div className="query-example-image">Placeholder</div>
            <h1 className="query-example-title">Title: {}</h1>
            <p className="query-example-description">Description: {}</p>
            <p className="query-example-date">Date: {}</p>
            <div className="query-example-category">
                <a className="query-example-category">Category: {}</a>
            </div>
            <div className="query-example-tags">
                <a className="query-example-tag">#Tag1:{}</a>
                <a className="query-example-tag">#Tag2:{}</a>
                <a className="query-example-tag">#Tag3:{}</a>
            </div>
        </div>
    }
    // const articleList = articles.map((article, index) => {
    //     return (
    //         <div className="query-example" key={index}>
    //             <div className="query-example-image">Placeholder</div>
    //             <h1 className="query-example-title">Title: {article.title}</h1>
    //             <p className="query-example-description">Description: {article.description}</p>
    //             <p className="query-example-date">Date: {article.date}</p>
    //             <div className="query-example-category">
    //                 <a className="query-example-category">Category: {article.category}</a>
    //             </div>
    //             <div className="query-example-tags">
    //                 {article.tags.map((tag, index) => <a className="query-example-tag" key={index}>#{tag}</a>)}
    //             </div>
    //         </div>
    //     )
    // });
    
// >------------------------------------------------------------------------------------------
    return(
        <div className="search-query-container">
            <div className="search-query">

                <div className="search-query-header">
                    <h1 className="search-query-title">Search Results</h1>
                </div>
                <div className="search-query-results">
                    
                    <div className="query-mode-recent">
                        {example.content}
                        {example.content}
                        {example.content}
                        {example.content}
                        {example.content}
                        {example.content}
                        {example.content}
                        {example.content}
                    </div> 

                    <div className="query-mode-all">

                    </div>
                </div>
                <div className="query-page-numbers">
                    <a className="query-page-number">1</a>
                    <a className="query-page-number">2</a>
                </div>
            </div>
        </div>
    )
}