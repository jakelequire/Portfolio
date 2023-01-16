import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import useCustomSmoothScroll from "./hooks/useCustomSmoothScroll.jsx";

import html5 from "../public/media/icons/tech-branding/html5.svg";
import css3 from "../public/media/icons/tech-branding/css3.svg";
import javascript from "../public/media/icons/tech-branding/javascript.svg";
import react from "../public/media/icons/tech-branding/reactjs.svg";
import next from "../public/media/icons/tech-branding/next.svg";
import node from "../public/media/icons/tech-branding/nodejs.svg";
import firebase from "../public/media/icons/tech-branding/firebase.svg";

export default function AboutMe() {
  const { refs } = useCustomSmoothScroll();

  /* ## Slideshow ## */
  const [FE_slideshowIndex, setFE_SlideshowIndex] = useState(0);
  const [BE_slideshowIndex, setBE_SlideshowIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("frontend");
  const [currentDirection, setCurrentDirection] = useState("");

  /* -- Front-end Slides -- */
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

  function showFE_Slide(index) {
    setFE_SlideshowIndex(index);
  }

  /* -- Back-end Slides -- */
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

  function showBE_Slide(index) {
    setBE_SlideshowIndex(index);
  }

  /* -- Front-end Slide Content -- */
  useEffect(() => {
    // this callback function will run after currentDirection is updated
    console.log(currentDirection);
  }, [currentDirection]);

  const buttonDirection = (direction) => {
    if (direction === "left") {
      setCurrentDirection("slide-in-blurred-right blurred-left");
    } else {
      setCurrentDirection("slide-in-blurred-left blurred-right");
    }
  };
  console.log(setCurrentDirection);

  const divRef = useRef(null);
  const [className, setClassName] = useState("active");

  useEffect(() => {
    if (divRef.current.className !== "active") {
      console.log("active");
      setClassName("active");
    }
  }, [className]);

  const FE_slides = [
    {
      content: (
        <div className="FE_slideshow-item">
          <Image
            id="javascript"
            ref={divRef}
            className={[className, currentDirection].join(" ")}
            src={javascript}
            alt="JavaScript"
            width={200}
            height={200}
          />
          <h1 className="FE_slideshow-text"> JavaScript</h1>
        </div>
      ),
    },
    {
      content: (
        <div className="FE_slideshow-item">
          <Image
            id="react"
            className={[className, currentDirection].join(" ")}
            src={react}
            alt="React"
            width={200}
            height={200}
          />
          <h1 className="FE_slideshow-text"> React.js </h1>
        </div>
      ),
    },
    {
      content: (
        <div className="FE_slideshow-item">
          <Image
            id="html"
            className={[className, currentDirection].join(" ")}
            src={html5}
            alt="HTML5"
            width={200}
            height={200}
          />
          <h1 className="FE_slideshow-text"> HTML</h1>
        </div>
      ),
    },
    {
      content: (
        <div className="FE_slideshow-item">
          <Image
            id="css"
            className={[className, currentDirection].join(" ")}
            src={css3}
            alt="CSS3"
            width={200}
            height={200}
          />
          <h1 className="FE_slideshow-text"> CSS</h1>
        </div>
      ),
    },
  ];

  /* -- Back-end Slides Content -- */
  const BE_slides = [
    {
      content: (
        <div className="BE_slideshow-item">
          <Image
            id="next"
            className={currentDirection}
            src={next}
            alt="NextJs"
            width={200}
            height={200}
          />
          <h1 className="BE_slideshow-text"> Next.js </h1>
        </div>
      ),
    },
    {
      content: (
        <div className="BE_slideshow-item">
          <Image
            id="node"
            className={currentDirection}
            src={node}
            alt="NodeJs"
            width={200}
            height={200}
          />
          <h1 className="BE_slideshow-text"> Node.js </h1>
        </div>
      ),
    },
    {
      content: (
        <div className="BE_slideshow-item">
          <Image
            id="firebase"
            className={currentDirection}
            src={firebase}
            alt="Firebase"
            width={200}
            height={200}
          />
          <h1 className="BE_slideshow-text"> Firebase </h1>
        </div>
      ),
    },
  ];

  /* ## Intersection Observer ## */
  const [currentIndex, setCurrentIndex] = useState(0);
  const intersectionObserver = {
    header: useRef(null),
    slideshow: useRef(null),
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Check if the component is intersecting with the viewport
      if (entries[0].isIntersecting) {
        // If the component is intersecting, add a "visible" class to the component
        intersectionObserver[entries[0].target.id].current.classList.add(
          {
            header: "about-visible",
            slideshow: "slideshow-visible",
          }[entries[0].target.id]
        );
      }
    });
    Object.values(intersectionObserver).forEach((el) =>
      observer.observe(el.current)
    );
    return () =>
      Object.values(intersectionObserver).forEach((el) =>
        observer.unobserve(el.current)
      );
  }, []);

  /* ------------------------------------------------------------------------------------------------------------- */
  return (
    <div className="aboutme-wrapper" id="about" ref={refs[1]}>
      <div className="aboutme">
        <div
          className="about-header-wrapper"
          id="header"
          ref={intersectionObserver.header}
        >
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
            Hello! My name is Jacob LeQuire and I am a full-stack web developer
            with a strong passion for coding. Through self-study and hands-on
            experience, I have developed expertise in technologies such as
            JavaScript, HTML, CSS, React.js, Next.js, Node.js, and Firebase.
            <br />
            <br />
            I have successfully built a full-stack website and am always eager
            to take on new web development projects. I am a competitive person
            who is committed to constantly improving my skills and staying
            up-to-date on the latest trends and technologies in the field.
            <br />
            <br />
            In my free time, I enjoy learning and exploring new technologies to
            further enhance my development skills. I am excited to bring my
            skills and passion to new challenges and projects.
          </p>
        </div>
      </div>
      <div className="toolkit">
        <div
          className="toolkit-container slideshow-visible"
          id="slideshow"
          ref={intersectionObserver.slideshow}
        >
          <div className="toolkit-header">
            <h1 className="toolkit-header-text">My Toolkit</h1>
          </div>
          <div className="toolkit-slideshow">
            <div className="slideshow-container">
              <div className="slideshow-category">
                <a
                  className="category-FE"
                  onClick={() => setCurrentCategory("frontend")}
                  id={
                    currentCategory === "frontend" ? "FE-active" : "FE-inactive"
                  }
                >
                  Frontend
                </a>
                <a
                  className="category-BE"
                  onClick={() => setCurrentCategory("backend")}
                  id={
                    currentCategory === "backend" ? "BE-active" : "BE-inactive"
                  }
                >
                  Backend
                </a>
              </div>
              {/* Determine which set of slides to display based on currentCategory */}
              {currentCategory === "frontend" ? (
                <div className="slideshow-container">
                  {FE_slides.map((slide, index) => (
                    <div
                      ref={refs[index]}
                      key={index}
                      className={
                        index === FE_slideshowIndex
                          ? "slideshow-active"
                          : "slideshow-inactive"
                      }
                    >
                      {slide.content}
                    </div>
                  ))}
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
                  {BE_slides.map((slide, index) => (
                    <div
                      ref={refs[index]}
                      key={index}
                      className={
                        index === BE_slideshowIndex
                          ? "slideshow-active"
                          : "slideshow-inactive"
                      }
                    >
                      {slide.content}
                    </div>
                  ))}
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
  );
}
