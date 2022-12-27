import { useRef } from 'react';



export default function Blog() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    return (
        <div className="blog-wrapper" id="blog" ref={refs[3]}>

        </div>
    )
}