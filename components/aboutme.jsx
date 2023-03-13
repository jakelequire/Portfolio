import { useRef, useEffect, useState } from "react";
import { SecondaryButton } from "./subComponents/components.jsx";
import Image from "next/image";

import useObserver from "./hooks/useCustomSmoothScroll.jsx";

import html5 from "../public/media/icons/tech-branding/html5.svg";
import css3 from "../public/media/icons/tech-branding/css3.svg";
import javascript from "../public/media/icons/tech-branding/javascript.svg";
import react from "../public/media/icons/tech-branding/reactjs.svg";
import next from "../public/media/icons/tech-branding/next.svg";
import node from "../public/media/icons/tech-branding/nodejs.svg";
import firebase from "../public/media/icons/tech-branding/firebase.svg";
import typescript from "../public/media/icons/tech-branding/typescript.svg";  
import frontend from "../public/media/icons/web-media/frontend.svg"
import backend from "../public/media/icons/web-media/backend.svg"
import api from "../public/media/icons/web-media/api.svg"

export default function AboutMe() {
  const {visible, index, setIndex, ref } = useObserver();

  /* ## Slideshow ## */
  const [FE_slideshowIndex, setFE_SlideshowIndex] = useState(0);
  const [BE_slideshowIndex, setBE_SlideshowIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("frontend");
  const [currentDirection, setCurrentDirection] = useState("");



  useEffect(() => {
    // this callback function will run after currentDirection is updated
  }, [currentDirection]);

  const buttonDirection = (direction) => {
    if (direction === "left") {
      setCurrentDirection("slide-in-blurred-right blurred-left");
    } else {
      setCurrentDirection("slide-in-blurred-left blurred-right");
    }
  };

  const divRef = useRef(null);
  const [className, setClassName] = useState("active");

  useEffect(() => {
    if (divRef.current.className !== "active") {
      setClassName("active");
    }
  }, [className]);


  /* -- Front-end Slide Content -- */
  const FE_slidesData = {
    javascript : {
      src: javascript,
      alt: "JavaScript",
      width: 200,
      height: 200,
      text: "JavaScript"
    },
    react : {
      src: react,
      alt: "React",
      width: 200,
      height: 200,
      text: "React.js"
    },
    html : {
      src: html5,
      alt: "HTML5",
      width: 200,
      height: 200,
      text: "HTML"
    },
    css : {
      src: css3,
      alt: "CSS3",
      width: 200,
      height: 200,
      text: "CSS"
    }

  }

  const frontendSlides = Object.keys(FE_slidesData).map((key) => {
    return (
      <div className="FE_slideshow-item">
        <Image
          id={key}
          ref={divRef}
          className={[className, currentDirection].join(" ")}
          src={FE_slidesData[key].src}
          alt={FE_slidesData[key].alt}
          width={FE_slidesData[key].width}
          height={FE_slidesData[key].height}
        />
        <h1 className="FE_slideshow-text"> {FE_slidesData[key].text}</h1>
      </div>
    )
  })

  function showFE_Slide(index) {
    setFE_SlideshowIndex(index);
  }

  function plusFE_Slides(direction) {
    let newIndex = FE_slideshowIndex + direction;
    if (newIndex >= frontendSlides.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = frontendSlides.length - 1;
    }
    showFE_Slide(newIndex);
  }

  /* -- Back-end Slides Content -- */
  const BE_slidesData = {
    typescript : {
      src: typescript,
      alt: "TypeScript",
      width: 200,
      height: 200,
      text: "TypeScript"
    },
    next : {
      src: next,
      alt: "NextJs",
      width: 275,
      height: 200,
      text: "Next.js"
    },
    node : {
      src: node,
      alt: "NodeJs",
      width: 200,
      height: 200,
      text: "Node.js"
    },
    firebase : {
      src: firebase,
      alt: "Firebase",
      width: 200,
      height: 200,
      text: "Firebase"
    }
  }

  const backendSlides = Object.keys(BE_slidesData).map((key) => {
    return (
      <div className="BE_slideshow-item">
        <Image

          id={key}
          ref={divRef}
          className={[className, currentDirection].join(" ")}
          src={BE_slidesData[key].src}
          alt={BE_slidesData[key].alt}
          width={BE_slidesData[key].width}
          height={BE_slidesData[key].height}
        />
        <h1 className="BE_slideshow-text"> {BE_slidesData[key].text}</h1>
      </div>
    )
  })

  function plusBE_Slides(direction) {
    let newIndex = BE_slideshowIndex + direction;
    if (newIndex >= backendSlides.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = backendSlides.length - 1;
    }
    showBE_Slide(newIndex);
  }

  function showBE_Slide(index) {
    setBE_SlideshowIndex(index);
  }


  /* ------------------------------------------------------------------------------------------------------------- */
  return (
    <div className="aboutme-wrapper" id="about" ref={ref.about}>
            <div className="index-category-header">
        <h1 className="category-header-text">
          About Me
        </h1>
      </div>
      <div className="aboutme-container">
        <div className="aboutme-content-wrapper">
        <div className="aboutme">
          <div
            className="about-header-wrapper"
            id="header"
          >
            <div className="aboutme-header a-header">
              <h2 className="preview-title">Meet the Developer.</h2>
            </div>
          </div>
          <div className="aboutme-caption">
            <p className="aboutme-caption-text">
              Hello! My name is Jacob LeQuire and I am a full-stack web
              developer with a strong passion for coding. Through self-study and
              hands-on experience, I have developed expertise in technologies
              such as JavaScript, HTML, CSS, React.js, Next.js, Node.js, and
              more.
              <br />
              <br />
              I have successfully built a full-stack website and am always eager
              to take on new web development projects. I am a competitive person
              who is committed to constantly improving my skills and staying
              up-to-date on the latest trends and technologies in the field.
              <br />
              <br />
              In my free time, I enjoy learning and exploring new technologies
              to further enhance my development skills. I am excited to bring my
              skills and passion to new challenges and projects.
            </p>
          </div>

        </div>
        <div className="toolkit">
          <div
            className="toolkit-container slideshow-visible"
            id="slideshow"
          >
            <div className="toolkit-slideshow">
              <div className="slideshow-wrapper">
                <div className="slideshow-inner-wrapper">
                  <div className="slideshow-category">
                    <a
                      className="category-FE"
                      onClick={() => setCurrentCategory("frontend")}
                      id={
                        currentCategory === "frontend"
                          ? "FE-active"
                          : "FE-inactive"
                      }
                    >
                      Frontend
                    </a>
                    <a
                      className="category-BE"
                      onClick={() => setCurrentCategory("backend")}
                      id={
                        currentCategory === "backend"
                          ? "BE-active"
                          : "BE-inactive"
                      }
                    >
                      Backend
                    </a>
                  </div>
                  {/* Determine which set of slides to display based on currentCategory */}
                  {currentCategory === "frontend" ? (
                    <div className="slideshow-container">

                      {frontendSlides[FE_slideshowIndex]}
                      
                      <div className="button-container">
                        <a
                          className="btn-prev"
                          onClick={() => {
                            buttonDirection("left");
                            plusFE_Slides(-1);
                          }}
                        >
                          &#11164;
                        </a>
                        <a
                          className="btn-next"
                          onClick={() => {
                            buttonDirection("right");
                            plusFE_Slides(1);
                          }}
                        >
                          &#11166;
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="slideshow-container">
                      {backendSlides[BE_slideshowIndex]}
                      <div className="button-container">
                        <a
                          className="btn-prev"
                          onClick={() => {
                            buttonDirection("left");
                            plusBE_Slides(-1);
                          }}
                        >
                            &#11164;
                        </a>
                        <a
                          className="btn-next"
                          onClick={() => {
                            buttonDirection("right");
                            plusBE_Slides(1);
                          }}
                        >
                          &#11166;
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
          <div className="offer-container">
                <div className="offer-content-wrapper">
                  <div className="offer-content-item">
                    <Image src={frontend} height={50} width={50} alt="Frontend" />
                    <div className="offer-content-text-wrapper">
                      <h2 className="offer-content-h">Frontend Development</h2>
                      <p className="offer-content-text">
                        Experience with Frontend technologies such as React.js, HTML/CSS, and JavaScript.
                      </p>
                      </div>
                  </div>

                  <div className="offer-content-item">
                    <Image src={backend} height={50} width={50} alt="Frontend" />
                      <div className="offer-content-text-wrapper">
                        <h2 className="offer-content-h">Backend Development</h2>
                        <p className="offer-content-text">
                          Experience with Backend technologies such as Next.js, Node.js, and Express.js.
                        </p>
                      </div>
                  </div>

                  <div className="offer-content-item">
                    <Image src={api} height={50} width={50} alt="Frontend" />
                      <div className="offer-content-text-wrapper">
                        <h2 className="offer-content-h">API Development</h2>
                        <p className="offer-content-text">
                          Experience with API technologies such as RESTful APIs, GraphQL, and MongoDB.
                        </p>
                      </div>
                  </div>
                </div>
          <div className="aboutme-resume-btn">
            <SecondaryButton
            link="#resume"
            text="View Resume"
            />
          </div>
          </div>
      </div>
    </div>
  );
}