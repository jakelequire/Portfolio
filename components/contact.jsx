import { useRef } from 'react';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

export default function Contact() {
    const { refs } = useCustomSmoothScroll();
    return (
        <div className="contact-wrapper" id="contact" ref={refs[4]}>

        </div>
    )
}