import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'
/* Hooks */
import useObserver from "./hooks/useObserver.jsx";
// >------------------------------------------------------------------------------------------
export default function NavBar() {
  const {visible, visibility, setVisibility, index, setIndex, ref } = useObserver();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

 console.log(visibility);
 console.log(index)
 
// >------------------------------------------------------------------------------------------
  return (
        <div className="navbar">
          <div className="nav-logo-container">
            <div className="nav-logo">

            </div>
            <div className="nav-logo-caption">
              <h1 className="nav-logo-text">Jake</h1>
              <p className="nav-logo-subtext">Web Developer</p>
            </div>
            <div className="social-media-container">
              <a className="social-media-link"
              href="https://github.com/jakelequire"><GitHub /></a>
              <a className="social-media-link"
              href="https://www.linkedin.com/in/jacoblequire/"><LinkedIn /></a>
            </div>
          </div>
          <div className="nav-group">
            <div className="nav-links-container">
              <a className="nav-link nav-link-style" 
              id={`home`} href="#home" 
              onClick={() => setIndex(0)} >
                <span className={visibility.home ? "N-active" : "inactive"}>
                Home
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`about`} href="#about" 
              onClick={() => setIndex(1)} >
                <span className={visibility.about ? "N-active" : "inactive"}>
                  About Me
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`projects`} href="#projects" 
              onClick={() => setIndex(2)} >
                <span className={visibility.projects ? "N-active" : "inactive"}>
                  Projects
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`blog`} href="#blog" 
              onClick={() => setIndex(3)}>
                <span className={visibility.blog ? "N-active" : "inactive"}>
                  Blog
                </span>
                </a>

              <a className="nav-link nav-link-style"
              id={`contact`} href="#contact" 
              onClick={() => setIndex(4)}>
                <span className={visibility.contact ? "N-active" : "inactive"}>
                  Contact
                </span>
              </a>
            </div>
          </div>
          <div className="theme-toggle-container">
            <div className="theme-toggle">
              <p className="theme-toggle-text">Dark</p>
              <p className="theme-toggle-text">Light</p>
            </div>
          </div>
        </div>
    );
}


/* 
↳ :)
*/