/** 
 * @param {string} method - HTTP method => GET
 * @param {string} mode - API mode
 * 
 * @returns {object} - Data from the API
 */

import axios from "axios";

export default async function blogApiCatcher(method, mode) {
    try {
        const response = await axios({
            method: method,
            url: `http://localhost:6003/api/blog-articles/${mode}`
        });
        //Assuming response.data has title,description,date,category,tags fields
        return {
            title: response.data.title,
            description: response.data.description,
            date: response.data.date,
            category: response.data.category,
            tags: response.data.tags
        }
    } catch (error) {
        console.log(error);
    }
}
