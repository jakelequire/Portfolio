import { useRef, useEffect } from "react";

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
      nav.style.background = "rgba(206, 206, 206, 0.20)"
      nav.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#fff';
      });

    // If scroll height is less than nav height, remove class to change nav style
    } else { 
      nav.classList.remove("nav-scroll");
      nav.style.background = "#ffffff"
      nav.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#000';
      });
    }
  }

  // Render the navbar
  return (
        <div className="navbar" ref={navRef}>
          <div className="nav-group">
            <div className="nav-links-container">
              <a className="nav-link nav-item " id="home" href="#l-home">Home</a>
                <span className="nav-separator">/</span>
              <a className="nav-link nav-item " id="about" href="/">About Me</a>
                <span className="nav-separator">/</span>
              <a className="nav-link nav-item " id="projects" href="/">Projects</a>
                <span className="nav-separator">/</span>
              <a className="nav-link" id="contact" href="/">Contact</a>
            </div>
          </div>
        </div>
    );
}