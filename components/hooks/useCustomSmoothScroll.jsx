/**
 * @description Custom hook to adjust scroll position of a component
 * 
 * @returns {boolean} hover
 * @returns {object} ref
 * 
 * 
 * 
 */

import { useEffect, useState} from 'react';
import useObserver from './useObserver';

export default function useSmoothScroll() {
  const { index, ref } = useObserver();

  function smoothScroll(e, index) {
    e.preventDefault();
    setIndex(index);
  }

  useEffect(() => {
    if (index === 0) {
      ref.home.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (index === 1) {
      ref.about.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (index === 2) {
      ref.projects.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (index === 3) {
      ref.blog.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (index === 4) {
      ref.contact.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [index, ref]);

  return { smoothScroll, ref };

} 
