import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from './svgicons/svg-icons'

import logo from '../public/media/logo.png'


function useSmoothScroll() {
  return (index, refs) => {
    useEffect(() => {
      if (index !== null) {
        const element = refs[index].current;
        if (element) {
          const elementPosition = element.offsetTop;
          const currentPosition = window.pageYOffset;
          const distance = elementPosition - currentPosition;
          window.scrollBy({ top: distance, left: 0, behavior: 'smooth' });
        }
      }
    }, [index]);
  }
}

export default function NavBar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  
  const refs = [homeRef, aboutRef, projectsRef, blogRef, contactRef];
  const [index, setIndex] = useState(null);
  useEffect(() => {
    useSmoothScroll(index, refs);
  }, []);

  function smoothScroll(event, newIndex) {
    console.log(event, newIndex, refs[newIndex].current)
    event.preventDefault();
    setIndex(newIndex);
  }

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = refs[0].current;
      const aboutElement = refs[1].current;
      const projectsElement = refs[2].current;
      const blogElement = refs[3].current;
      const contactElement = refs[4].current;
    
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
  }, []);
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
              <a className="social-media-link" href=""> <GitHub /> </a>
              <a className="social-media-link" href=""> <LinkedIn /> </a>
            </div>
          </div>
          <div className="nav-group">
            <div className="nav-links-container">
              <a className="nav-link nav-item " id="n-home" href="#home" onClick={
                (e) => smoothScroll(e, 0)}>Home</a>
              <a className="nav-link nav-item " id="n-about" href="#about" onClick={
                (e) => smoothScroll(e, 1)}>About Me</a>
              <a className="nav-link nav-item " id="n-projects" href="#projects" onClick={
                (e) => smoothScroll(e, 2)}>Projects</a>
              <a className="nav-link nav-item " id="n-projects" href="#blog" onClick={
                (e) => smoothScroll(e, 3)} >Blog</a>
              <a className="nav-link nav-item" id="n-contact" href="#contact" onClick={
                (e) => smoothScroll(e, 4)}>Contact</a>
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