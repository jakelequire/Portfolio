import { useEffect, useState } from 'react';

export default function useArticleQuery() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [query, setQuery] = useState(null);

    useEffect(() => {
        if (!query) return;
        setIsLoading(true);
        fetch(query)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [query]);
    
    return { isLoading, error, data, setQuery };
}