import { useRef, useEffect, useState} from 'react';
import Image from 'next/image';

import html5 from '../public/media/Icons/html5.svg';
import css3 from '../public/media/Icons/css3.svg';
import javascript from '../public/media/Icons/javascript.svg';
import react from '../public/media/Icons/reactjs.svg';
import next from '../public/media/Icons/nextjs.svg'
import node from '../public/media/Icons/nodejs.svg'
import firebase from '../public/media/Icons/firebase.svg'

export default function AboutMe() {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    /* ## Slideshow ## */
    const [slideshowIndex, setSlideshowIndex] = useState(0);

    function showSlide(index) {
      setSlideshowIndex(index);
    }
  
    function plusSlides(direction) {
      let newIndex = slideshowIndex + direction;
      if (newIndex >= FE_slides.length) {
        newIndex = 0;
      }
      if (newIndex < 0) {
        newIndex = FE_slides.length - 1;
      }
      showSlide(newIndex);
    }
    /* -- Front-end Slides -- */
    const FE_slides = [
      {
        content: <div className="FE_slideshow-item">
                    <Image id="javascript" src={javascript} alt="JavaScript" width={200} height={200} />
                    <h1 className="ss-javascript"> JavaScript</h1>
                 </div>
      },
      {
        content: <div className="FE_slideshow-item">
                    <Image id="react" src={react} alt="React" width={200} height={200} />
                    <h1 className="ss-react"> React.js </h1>
                 </div>
      },
      {
        content: <div className="FE_slideshow-item">
                    <Image id="html" src={html5} alt="HTML5" width={200} height={200} />
                    <h1 className="ss-html"> HTML</h1>
                 </div>
      },
      {
        content: <div className="FE_slideshow-item">
                    <Image id="css" src={css3} alt="CSS3" width={200} height={200} />
                    <h1 className="ss-css"> CSS</h1>
                 </div>
      },
    ];
    /* -- Back-end Slides -- */
    const BE_slides = [
        {
            content: <div className="BE_slideshow-item">
                        <Image id="next" src={next} alt="NextJs" width={200} height={200} />
                        <h1 className="ss-next"> Next.js </h1>
                     </div>
        },
        {
            content: <div className="BE_slideshow-item">
                        <Image id="node" src={node} alt="NodeJs" width={200} height={200} />
                        <h1 className="ss-node"> Node.js </h1>
                     </div>
        },
        {
            content: <div className="BE_slideshow-item">
                        <Image id="firebase" src={firebase} alt="Firebase" width={200} height={200} />
                        <h1 className="ss-firebase"> Firebase </h1>
                     </div>
        },
    ]
    /* ## ^^^^^^^^^ ## */
    
    /* ## Intersection Observer ## */
    const [currentIndex, setCurrentIndex] = useState(0);
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
      /* ## ^^^^^^^^^ ## */

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
                        <div className="frontend-slideshow">
                            {FE_slides.map((slide, index) => (
                                <div
                                  style={{ display: index === slideshowIndex ? 'block' : 'none' }}
                                >
                                    {slide.content}
                                </div>
                            ))}
                            <div className="button-container">
                                <a className="slide-btn" 
                                onClick={() => plusSlides(-1)}>&#11164;</a>
                                <a className="slide-btn"
                                onClick={() => plusSlides(1)}>&#11166;</a>
                            </div>
                        </div>
                        <div className="backend-slideshow">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}