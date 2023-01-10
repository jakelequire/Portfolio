import { useEffect, useState } from 'react'

export default function useCustomSearch() {
    const [mode, setMode] = useState('recent')
    const [articles, setArticles] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        async function fetchArticles() {
            const response = await axios.get(`http://localhost:6003/api/blog-articles?q=${searchTerm}`);
            setArticles(response.data);
        }
        fetchArticles();
        }, [searchTerm]);


}