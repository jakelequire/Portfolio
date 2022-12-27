import { useRef } from 'react';

export default function Contact() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    return (
        <div className="contact-wrapper" id="contact" ref={refs[4]}>

        </div>
    )
}