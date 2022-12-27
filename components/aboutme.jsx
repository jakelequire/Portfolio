import { useRef } from 'react';

export default function AboutMe() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    return (
        <div className="aboutme-wrapper" id="about" ref={refs[1]}>
            <div className="aboutme">
                <div className="about-header-wrapper">
                    <div className="aboutme-header">
                        <h1 className="about-header">Meet the </h1>
                    </div>
                    <div className="about-text-wrapper">
                        <span className="about-dev dev-D">D</span>
                        <span className="about-dev">e</span>
                        <span className="about-dev">v</span>
                        <span className="about-dev">e</span>
                        <span className="about-dev">l</span>
                        <span className="about-dev">o</span>
                        <span className="about-dev">p</span>
                        <span className="about-dev">e</span>
                        <span className="about-dev">r</span>
                        <span className="about-dev">.</span>
                    </div>
                </div>
            </div>
            <div className="toolkit">
            
            </div>
        </div>
    )
}