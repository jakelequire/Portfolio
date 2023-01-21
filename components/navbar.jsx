import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'
/* Hooks */
import useObserver  from "./hooks/useCustomSmoothScroll.jsx";
/* PNGs */
import logo from '../public/media/logo.png'
// >------------------------------------------------------------------------------------------
export default function NavBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { refs, index, currentRef } = useObserver()

  useEffect(() => {
    if(currentRef){
        const elements = document.querySelectorAll('.nav-link-style')
        elements.forEach(e => e.classList.remove('active-vp'))
        const element = document.getElementById(`${currentRef}`);
        if (element) {
            element.classList.add('active-vp');
        }
    }
}, [currentRef]);
  

  function smoothScroll(event, newIndex) {
    event.preventDefault();
    setCurrentIndex(newIndex);
    const element = document.querySelector(event.target.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


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
              <a className="nav-link nav-link-style"  id={`n-home`} href="#home" 
              onClick={(e) => smoothScroll(e, 0)} ref={refs.home}>Home</a>
              <a className="nav-link nav-link-style" id={`n-about`} href="#about" 
              onClick={(e) => smoothScroll(e, 1)} ref={refs.about}>About Me</a>
              <a className="nav-link nav-link-style" id={`n-projects`} href="#projects" 
              onClick={(e) => smoothScroll(e, 2)} ref={refs.projects}>Projects</a>
              <a className="nav-link nav-link-style" id={`n-blog`} href="#blog" 
              onClick={(e) => smoothScroll(e, 3)} ref={refs.blog}>Blog</a>
              <a className="nav-link nav-link-style" id={`n-contact`} href="#contact" 
              onClick={(e) => smoothScroll(e, 4)} ref={refs.contact}>Contact</a>
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
↳
*/