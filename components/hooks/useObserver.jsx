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

    const ref = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        blog: useRef(null),
        contact: useRef(null)
    };

    useEffect(() => {
        const observerCallback = ([entry]) => {
            setVisible(entry.isIntersecting);
            setIndex(entry.target.id);
            let newVisibility = {...visibility};
            Object.keys(visibility).forEach(key => { 
                if(key === entry.target.id) newVisibility[key] = true;
                else newVisibility[key] = false; 
            });
            setVisibility(newVisibility);
        }
        const observer = new IntersectionObserver(observerCallback);
        if (ref.home.current) {
            observer.observe(ref.home.current);
        }
        if (ref.about.current) {
            observer.observe(ref.about.current);
        }
        if (ref.projects.current) {
            observer.observe(ref.projects.current);
        }
        if (ref.blog.current) {
            observer.observe(ref.blog.current);
        }
        if (ref.contact.current) {
            observer.observe(ref.contact.current);
        }
        return () => {
            if(ref.home.current) observer.unobserve(ref.home.current);
            if(ref.about.current) observer.unobserve(ref.about.current);
            if(ref.projects.current) observer.unobserve(ref.projects.current);
            if(ref.blog.current) observer.unobserve(ref.blog.current);
            if(ref.contact.current) observer.unobserve(ref.contact.current);
        };
    }, [ref]);

    return { visible, visibility, setVisibility, index, setIndex, ref };
}
