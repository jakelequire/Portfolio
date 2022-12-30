import { useRef, useEffect, useState} from 'react';
import Image from 'next/image';

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import html5 from '../public/media/Icons/html5.svg';
import css3 from '../public/media/Icons/css3.svg';
import javascript from '../public/media/Icons/javascript.svg';
import react from '../public/media/Icons/reactjs.svg';
import next from '../public/media/Icons/nextjs.svg'
import node from '../public/media/Icons/nodejs.svg'
import firebase from '../public/media/Icons/firebase.svg'

export default function AboutMe() {
  const refs = Array.from({ length: 5 }, () => useRef(null));


    /* ## Slideshow ## */
    const [FE_slideshowIndex, setFE_SlideshowIndex] = useState(0);
    const [BE_slideshowIndex, setBE_SlideshowIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState("frontend");
    function showFE_Slide(index) {
      setFE_SlideshowIndex(index);
    }
    function showBE_Slide(index) {
        setBE_SlideshowIndex(index);
    }

    function plusFE_Slides(direction) {
      let newIndex = FE_slideshowIndex + direction;
      if (newIndex >= FE_slides.length) {
        newIndex = 0;
      }
      if (newIndex < 0) {
        newIndex = FE_slides.length - 1;
      }
      showFE_Slide(newIndex);
    }

    function plusBE_Slides(direction) {
        let newIndex = BE_slideshowIndex + direction;
        if (newIndex >= BE_slides.length) {
            newIndex = 0;
        }
        if (newIndex < 0) {
            newIndex = BE_slides.length - 1;
        }
        showBE_Slide(newIndex);
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
    ];
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
                    <div className="aboutme-header a-header">
                        <h1 className="about-header">Meet the </h1>
                    </div>
                    <div className="about-text-wrapper a-header">
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
                <div className="aboutme-caption">
                    <p className="aboutme-caption-text">
                    Hi, my name is Jacob LeQuire and I am a full-stack web developer. I am self taught and have a strong passion for coding. I specialize in full-stack web development, with experience in technologies such as JavaScript, HTML, CSS, React.js, Next.js, Node.js, and Firebase.
                    <br />
                    <br />
                    I have developed a full-stack website and am currently working on other web development projects. As a competitive person by nature, I am always striving to improve my skills and advance in the field of web development.
                    <br />
                    <br />
                    In my free time, I enjoy continuing to learn and stay up-to-date on the latest web development trends and technologies. I am excited to bring my skills and passion to new challenges and projects.
                    </p>
                </div>
            </div>
            <div className="toolkit">
                <div className="toolkit-container">
                    <div className="toolkit-header">
                        <h1 className="toolkit-header-text">My Toolkit</h1>
                    </div>
                <div className="toolkit-slideshow">
                    <div className="slideshow-container">
                        <div className="slideshow-category">
                            <a className="category-FE" onClick={() => setCurrentCategory("frontend")}
                            id={currentCategory === 'frontend' ? 'FE-active' : 'FE-inactive'}>Frontend</a>
                            <a className="category-BE"onClick={() => setCurrentCategory("backend")}
                            id={currentCategory === 'backend' ? 'BE-active' : 'BE-inactive'}>Backend</a>
                        </div>
                    {/* Determine which set of slides to display based on currentCategory */}
                        {currentCategory === "frontend" ? (
                          <div className="slideshow-container">
                            {FE_slides.map((slide, index) => (
                              <div
                                ref={refs[index]}
                                key={index}
                                className={index === FE_slideshowIndex ? "slideshow-active" : "slideshow-inactive"}
                              >
                                {slide.content}
                              </div>
                            ))}
                            <div className="button-container">
                                <a className="btn-prev" onClick={() => plusFE_Slides(-1)}>&#11164;</a>
                                <a className="btn-next" onClick={() => plusFE_Slides(1)}>&#11166;</a>
                            </div>
                          </div>
                        ) : (
                          <div className="slideshow-container">
                            {BE_slides.map((slide, index) => (
                              <div
                                ref={refs[index]}
                                key={index}
                                className={index === BE_slideshowIndex ? "slideshow-active" : "slideshow-inactive"}
                              >
                                {slide.content}
                              </div>
                            ))}
                            <div className="button-container">
                                <a className="btn-prev" onClick={() => plusBE_Slides(-1)}>&#11164;</a>
                                <a className="btn-next" onClick={() => plusBE_Slides(1)}>&#11166;</a>
                            </div>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}