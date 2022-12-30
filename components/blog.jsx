import { useRef } from 'react';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { refs } = useCustomSmoothScroll();
    return (
        <div className="blog-wrapper" id="blog" ref={refs[3]}>

        </div>
    )
}