import { useRef } from 'react';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { refs } = useCustomSmoothScroll();
    return (
        <div className="blog-wrapper" id="blog" ref={refs[3]}>
            <div className="blog-header">
                <h1 className="blog-title"><span id="blog-B">B</span>log</h1>
            </div>
        </div>
    )
}