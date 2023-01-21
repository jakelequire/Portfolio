/**
 * @description Custom hook to adjust scroll position of a component
 * 
 * @returns {boolean} hover
 * @returns {object} ref
 * 
 * 
 * 
 */

import { useRef, useEffect, useState} from 'react';



export default function useSmoothScroll() {
  const [currentIndex, setIndex] = useState(null);
  const refs = useRef({
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
  });

  useEffect(() => {
    if (currentIndex !== null) {
      const element = document.getElementById(refs.current[currentIndex].current);
      if (element) {
        const elementPosition = element.offsetTop;
        const currentPosition = window.pageYOffset;
        const distance = elementPosition - currentPosition;
        window.scrollBy({ top: distance, left: 0, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);
  console.log("refs current!: "+ refs.current ? refs.current : 'no refs')
  console.log("currentindex!: " + currentIndex ? currentIndex : 'no index')
  console.log("refs.current[currentIndex]!: " + refs.current[currentIndex] ? refs.current[currentIndex] : 'no refs[currentIndex]')
  return { refs, currentIndex, setIndex };
} 

/* 
function (index, refs) {
  if (index !== null) {
    const element = document.getElementById(refs[index].current);
    if (element) {
      const elementPosition = element.offsetTop;
      const currentPosition = window.pageYOffset;
      const distance = elementPosition - currentPosition;
      window.scrollBy({ top: distance, left: 0, behavior: 'smooth' });
    }
  }
}
*/