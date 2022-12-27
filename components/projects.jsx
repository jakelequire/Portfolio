import { useRef } from 'react';

export default function Projects() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>


        </div>
    )
}