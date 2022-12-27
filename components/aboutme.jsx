import { useRef, useEffect, useState} from 'react';
import Image from 'next/image';

import html5 from '../public/media/Icons/html5.svg';

export default function AboutMe() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    
    const [currentIndex, setCurrentIndex] = useState(0);


    /* Intersection Observer */
    const intersectionObserver = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // Check if the component is intersecting with the viewport
            if (entries[0].isIntersecting) {
              // If the component is intersecting, add a "visible" class to the component
              intersectionObserver.current.classList.add('about-visible');
            } else {
              // If the component is not intersecting, remove the "visible" class
            //   intersectionObserver.current.classList.remove('about-visible');
            }
          });
          
      
        observer.observe(intersectionObserver.current);
        return () => observer.unobserve(intersectionObserver.current);
      }, []);
      

    return (
        <div className="aboutme-wrapper" id="about" ref={refs[1]}>
            <div className="aboutme">
                <div className="about-header-wrapper" ref={intersectionObserver}>
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
                <div className="toolkit-container">
                    <div className="toolkit-header">
                        <h1 className="toolkit-header-text">My Toolkit</h1>
                    </div>
                    <div className="toolkit-slideshow">
                        <div className="slideshow-options-container">
                            <h1 className="slideshow-options">Frontend</h1>
                            <h1 className="slideshow-options">Backend</h1>
                        </div>
                        <div className="slideshow-container">
                            <div className="slideshow">
                                <div className="slideshow-item item-one">

                                </div>
                                <div className="slideshow-item item-two">

                                </div>
                                <div className="slideshow-item item-three">

                                </div>
                            </div>
                        </div>
                        <div className="slideshow-caption">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}