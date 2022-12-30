import { useRef } from 'react';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";
export default function Projects() {
    const { refs } = useCustomSmoothScroll();
    return (
        <div className="projects-wrapper" id="projects" ref={refs[2]}>


        </div>
    )
}