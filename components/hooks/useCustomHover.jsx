/**
 * Custom hook to detect hover state of a component
 * 
 * @params {null}
 * @returns {boolean} hover
 * @returns {object} ref
 *
 */


import { useRef, useState, useEffect } from 'react';

export default function useCustomHover() {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);
    
    const handleMouseOver = () => setHover(true)
    const handleMouseOut = (event) => {
        if(ref.current.contains(event.relatedTarget)) {
          return;
        }
        setHover(false);
      };
      
    
    useEffect(() => {
        const node = ref.current;

        if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseleave', handleMouseOut);
    
        return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseleave', handleMouseOut);
        };
        }
    }, []);
    
    return [hover, ref];
}

