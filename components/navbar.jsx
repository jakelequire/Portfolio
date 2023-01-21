import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'
/* Hooks */
// import useSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";
import useObserver from "./hooks/useObserver.jsx";
/* PNGs */
import logo from '../public/media/logo.png'
// >------------------------------------------------------------------------------------------
export default function NavBar() {

  // const { refs, setIndex, currentIndex} = useSmoothScroll();
  const {visible, visibility, index, setIndex, ref } = useObserver();

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
              onClick={() => setIndex(0)} ref={ref.home}>
                <span id={visibility.home ? "active" : "inactive"}>
                Home
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`about`} href="#about" 
              onClick={(e) => setIndex(1)} ref={ref.about}>
                <span id={visibility.about ? "active" : "inactive"}>
                  About Me
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`projects`} href="#projects" 
              onClick={(e) => setIndex(2)} ref={ref.projects}>
                <span id={visibility.projects ? "active" : "inactive"}>
                  Projects
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id={`blog`} href="#blog" 
              onClick={(e) => setIndex(3)} ref={ref.blog}>
                <span id={visibility.blog ? "active" : "inactive"}>
                  Blog
                </span>
                </a>

              <a className="nav-link nav-link-style"
              id={`contact`} href="#contact" 
              onClick={(e) => setIndex(4)} ref={ref.contact}>
                <span id={visibility.contact ? "active" : "inactive"}>
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