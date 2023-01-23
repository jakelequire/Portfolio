import { useEffect, useState, useRef } from "react";

export default function useObserver() {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(null);
    const [visibility, setVisibility] = useState({
        home: false,
        about: false,
        projects: false,
        blog: false,
        contact: false
    });
    console.log("useObserver - useEffect");
    console.log("useObserver - Visible: " + visibility.home);
    console.log("useObserver - Visible: " + visibility.about);
    console.warn("useObserver - Index: " + index);
    const ref = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        blog: useRef(null),
        contact: useRef(null)
    };

    const updateVisibility = (currentRef) => {
        Object.keys(visibility).forEach((key) => { 
            visibility[key] = ref[key].current === currentRef;
        });
    }
    
    
    useEffect(() => {
        const observerCallback = ([entry]) => {
            setVisible(entry.isIntersecting);
            setIndex(entry.target.id);
            updateVisibility(entry.target);
        }
        const observer = new IntersectionObserver(observerCallback);
        Object.values(ref).forEach((r) => {
            if (r.current) {
                observer.observe(r.current);
            }
        });
        return () => {
            Object.values(ref).forEach((r) => {
                if (r.current) {
                    observer.unobserve(r.current);
                }
            });
        };
    }, [ref]);


    return { visible, visibility, setVisibility, index, setIndex, ref };
}
