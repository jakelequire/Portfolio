/**
 * @description Custom hook to detect hover state of a component
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
    const handleMouseOut = () => setHover(false) // SET TO FALSE TO FIX
    
    useEffect(() => {
        const node = ref.current;

        if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
    
        return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
        };
        }
    }, []);
    
    return [hover, ref];
}

