import { useRef, useEffect } from "react";

function NavBar() {
  const navRef = useRef(null);
  useEffect(() => {
    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array means this effect only runs once when the component mounts

  const handleScroll = () => {
    const nav = navRef.current;
    const navHeight = nav.offsetHeight;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
      nav.classList.add("nav-scroll");
      nav.style.background = "rgba(206, 206, 206, 0.20)"
      nav.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#fff';
      });
    } else {
      nav.classList.remove("nav-scroll");
      nav.style.background = "#ffffff"
      nav.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '';
      });
    }
  }

  return (
      <div>
        <div className="navbar" ref={navRef}>
          <div className="nav-group">
            <div className="nav-links-container">
              <a className="nav-link nav-item " id="home" href="/">Home</a>
                <span className="nav-separator">/</span>
              <a className="nav-link nav-item " id="about" href="/">About Me</a>
                <span className="nav-separator">/</span>
              <a className="nav-link nav-item " id="projects" href="/">Projects</a>
                <span className="nav-separator">/</span>
              <a className="nav-link" id="contact" href="/">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;