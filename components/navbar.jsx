import { useRef, useEffect } from "react";
import Image from "next/image";
import { GitHub, LinkedIn } from './svgicons/svg-icons'
import logo from '../public/media/logo.png'

export default function NavBar() {
  // Create a ref to store the nav DOM element
  const navRef = useRef(null);
  
  useEffect(() => {
    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event listeners on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array means this effect only runs once when the component mounts

  const handleScroll = () => {
    // Get nav element and its height
    const nav = navRef.current;
    const navHeight = nav.offsetHeight;
    const scrollHeight = window.pageYOffset;

    // If scroll height is greater than nav height, add class to change nav style
    if (scrollHeight > navHeight) {
      nav.classList.add("nav-scroll");
      nav.style.background = "rgb(24, 24, 24)"
    // If scroll height is less than nav height, remove class to change nav style
    } else { 
      nav.classList.remove("nav-scroll");
      nav.style.background = "rgb(24, 24, 24)"
    }
  }

  // Render the navbar
  return (
        <div className="navbar" ref={navRef}>
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
              <a className="nav-link nav-item " id="home" href="#l-home">&#9679; Home</a>
              <a className="nav-link nav-item " id="about" href="/">About Me</a>
              <a className="nav-link nav-item " id="projects" href="/">Projects</a>
              <a className="nav-link nav-item " id="projects" href="/">Blog</a>
              <a className="nav-link nav-item" id="contact" href="/">Contact</a>
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