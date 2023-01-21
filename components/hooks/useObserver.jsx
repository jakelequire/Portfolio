/**
 * 
 * 
 */
import { useState, useEffect } from 'react';

export default function useObserver(classNames) {
    const [currentElement, setCurrentElement] = useState(null);

    useEffect(() => {
        const elements = classNames.flatMap(className => Array.from(document.getElementsByClassName(className)));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentElement(entry.target);
                    }
                });
            }
        );
        elements.forEach((element) => observer.observe(element));
        return () => {
            elements.forEach((element) => observer.unobserve(element));
        }
    }, [classNames]);

    return { currentElement };
}
