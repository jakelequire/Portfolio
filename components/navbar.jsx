import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'
/* Hooks */
import useSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";
/* PNGs */
import logo from '../public/media/logo.png'
// >------------------------------------------------------------------------------------------
export default function NavBar() {

  const { refs, setIndex, currentIndex} = useSmoothScroll();
  

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
              onClick={(e) => setIndex(0)} ref={refs.home}>Home</a>

              <a className="nav-link nav-link-style"
              id={`about`} href="#about" 
              onClick={(e) => setIndex(1)} ref={refs.about}>About Me</a>

              <a className="nav-link nav-link-style"
              id={`projects`} href="#projects" 
              onClick={(e) => setIndex(2)} ref={refs.projects}>Projects</a>

              <a className="nav-link nav-link-style"
              id={`blog`} href="#blog" 
              onClick={(e) => setIndex(3)} ref={refs.blog}>Blog</a>

              <a className="nav-link nav-link-style"
              id={`contact`} href="#contact" 
              onClick={(e) => setIndex(4)} ref={refs.contact}>Contact</a>
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