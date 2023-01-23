import { useRef, useEffect, useState } from "react";
import { GitHub, LinkedIn } from '../public/media/icons/svg-icons'
/* Hooks */
import useObserver from "./hooks/useObserver.jsx";
// >------------------------------------------------------------------------------------------

export default function NavBar() {

  const {visible, visibility, index, setIndex, ref } = useObserver();

  const [navVisible, setNavVisible] = useState({
    home: visibility.home,
    about: visibility.about,
    projects: visibility.projects,
    blog: visibility.blog,
    contact: visibility.contact
  })

  useEffect(() => {
    setNavVisible({
      home: visibility.home,
      about: visibility.about,
      projects: visibility.projects,
      blog: visibility.blog,
      contact: visibility.contact
    })
  }, [visibility])

   console.log("Navbar - Visible" + visible)
   console.log("Navbar - Ref: " + ref)
   console.log("Navbar - Index: " + index)
 
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
              id="n-home" href="#home" 
              onClick={() => setIndex(0)} >
                <span className={navVisible.home ? "N-active" : "inactive"}>
                Home
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id="n-about" href="#about" 
              onClick={() => setIndex(1)} >
                <span className={navVisible.about ? "N-active" : "inactive"}>
                  About Me
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id="n-projects" href="#projects" 
              onClick={() => setIndex(2)} >
                <span className={navVisible.projects ? "N-active" : "inactive"}>
                  Projects
                </span>
              </a>

              <a className="nav-link nav-link-style"
              id="n-blog" href="#blog" 
              onClick={() => setIndex(3)}>
                <span className={navVisible.blog ? "N-active" : "inactive"}>
                  Blog
                </span>
                </a>

              <a className="nav-link nav-link-style"
              id="n-contact" href="#contact" 
              onClick={() => setIndex(4)}>
                <span className={navVisible.contact ? "N-active" : "inactive"}>
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