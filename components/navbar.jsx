import { useRef, useEffect } from "react";

function NavBar() {
  const navRef = useRef(null);
  const nav = navRef.current;
  useEffect(() => {
    const nav = navRef.current;
    // Add event listeners
    nav.addEventListener("mouseover", handleMouseOver);
    nav.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll);
    // Remove event listeners on cleanup
    return () => {
      nav.removeEventListener("mouseover", handleMouseOver);
      nav.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array means this effect only runs once when the component mounts

  const handleMouseOver = () => {
    nav && (nav.style.opacity = '1');
    nav && (nav.style.background = '#fff');
  }

  const handleMouseOut = () => {
    nav && (nav.style.opacity = '0.6');
    nav && (nav.style.background = 'linear-gradient(to bottom, #ffffff, #ffffff00)');
  }

  const handleScroll = () => {
    const nav = navRef.current;
    const navHeight = nav.offsetHeight;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
      nav.classList.add("nav-scroll");
      nav.style.opacity = "0.5"
      nav.style.background = "linear-gradient(to bottom, #ffffff, #ffffff00)"
    } else {
      nav.classList.remove("nav-scroll");
      nav.style.opacity = "1"
      nav.style.background = "#fff"
    }
  }

  return (
      <div>
        <div className="navbar" ref={navRef}>
          <div className="nav-group">
            <div className="nav-links-container">
              <a className="nav-link nav-item " id="home" href="/">Home</a>
              <a className="nav-link nav-item " id="about" href="/">About Me</a>
              <a className="nav-link nav-item " id="projects" href="/">Projects</a>
              <a className="nav-link" id="contact" href="/">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;