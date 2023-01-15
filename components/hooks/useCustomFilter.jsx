/**
 * @description Custom hook to handle the filter state for the search query.
 * 
 * @returns {Object} filter, setFilter, category, setCategory, tag, setTag
 */
import { useState, useEffect } from 'react';

export default function useCustomFilter() {
    const [filter, setFilter] = useState('recent');
    const [category, setCategory] = useState(false);
    const [tag, setTag] = useState(false);

    useEffect(() => {
        if (category) {
            setFilter("all");
        } else {
            setFilter("recent");
        }
    }, [category]);

    useEffect(() => {
        if (tag) {
            setFilter("all");
        } else {
            setFilter("recent");
        }
    }, [tag]);

    console.log("------------------------");
    console.log("| useCustomFilter Hook |");
    console.log("------------------------")
    console.warn("Filter: " + filter);
    console.warn("Category: " + category);
    console.warn("Tag: " + tag);
    console.log("------------------------")

    return { filter, setFilter, category, setCategory, tag, setTag };
}