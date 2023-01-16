import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'

import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";
import logo from '../public/media/logo.png'

export default function NavBar() {
  const [index, setIndex] = useState(0);
  const { refs } = useCustomSmoothScroll();

  function smoothScroll(event, newIndex) {
    event.preventDefault();
    setIndex(newIndex);
    const element = document.querySelector(event.target.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* Scroll to section on nav link click */
  useEffect(() => {
    const { home, about, projects, blog, contact } = refs;
    const homeElement = home.current;
    const aboutElement = about.current;
    const projectsElement = projects.current;
    const blogElement = blog.current;
    const contactElement = contact.current;
  
    if (homeElement && aboutElement && projectsElement && blogElement && contactElement) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
      
        if (scrollY >= homeElement.offsetTop && scrollY < aboutElement.offsetTop) {
          setIndex(0);
        } else if (scrollY >= aboutElement.offsetTop && scrollY < projectsElement.offsetTop) {
          setIndex(1);
        } else if (scrollY >= projectsElement.offsetTop && scrollY < blogElement.offsetTop) {
          setIndex(2);
        } else if (scrollY >= blogElement.offsetTop && scrollY < contactElement.offsetTop) {
          setIndex(3);
        } else if (scrollY >= contactElement.offsetTop) {
          setIndex(4);
        }
      };
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [refs]);
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
              <a className="nav-link nav-item " id="n-home" href="#home" 
              onClick={(e) => smoothScroll(e, 0)} ref={refs.home}>Home</a>
              <a className="nav-link nav-item " id="n-about" href="#about" 
              onClick={(e) => smoothScroll(e, 1)} ref={refs.about}>About Me</a>
              <a className="nav-link nav-item " id="n-projects" href="#projects" 
              onClick={(e) => smoothScroll(e, 2)} ref={refs.projects}>Projects</a>
              <a className="nav-link nav-item " id="n-projects" href="#blog" 
              onClick={(e) => smoothScroll(e, 3)} ref={refs.blog}>Blog</a>
              <a className="nav-link nav-item" id="n-contact" href="#contact" 
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