/**
 * @description Custom hook for project slideshow
 * @param {string} project
 * 
 * @returns {string} projectKey
 */
import { useState, useEffect } from 'react';

export default function useProjectSlideshow() {
    const [currentProject, setCurrentProject] = useState(0);
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        const projects = document.querySelectorAll('.project-item');
        setProjectItems(projects);
    }
    , []);

    useEffect(() => {
        if (projectItems.length > 0) {
            projectItems[currentProject].classList.add('active');
        }
    }, [currentProject, projectItems]);

    return [currentProject, setCurrentProject, projectItems];
}