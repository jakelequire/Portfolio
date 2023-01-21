/**
 * @description Custom hook to adjust scroll position of a component
 * 
 * @returns {boolean} hover
 * @returns {object} ref
 * 
 * @reason This hook is used to adjust the scroll position of a component.
 * I wanted to use this hook to make the flow of the website more smooth.
 */

import { useRef, useState, useEffect } from 'react';
export default function useObserver() {
    const refs = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        blog: useRef(null),
        contact: useRef(null)
      };
    const [index, setIndex] = useState(null);
      console.log(index + " " + refs[index])
    useEffect(() => {
      if (index !== null) {
        const element = refs[index].current;
        if (element) {
          const elementPosition = element.offsetTop;
          const currentPosition = window.pageYOffset;
          const distance = elementPosition - currentPosition;
          window.scrollBy({ top: distance, left: 0, behavior: 'smooth' });
        }
      }
    }, [index, refs]);
    return { index, refs };
  }