import { useState, useEffect, useRef } from 'react';


function useSmoothScroll(index, refs) {
  if (index !== null) {
    const element = document.getElementById(refs[index].current);
    if (element) {
      const elementPosition = element.offsetTop;
      const currentPosition = window.pageYOffset;
      const distance = elementPosition - currentPosition;
      window.scrollBy({ top: distance, left: 0, behavior: 'smooth' });
    }
  }
}

export default function Landing() {
  const refs = [
    useRef('home'), //0 
    useRef('about'), //1
    useRef('projects'), //2
    useRef('blog'), //3
    useRef('contact') //4
  ];
  const [index, setIndex] = useState(null);

  useEffect(() => {
    useSmoothScroll(index, refs);
  }, [index]);

  function smoothScroll(event, newIndex) {
    console.log(event, newIndex, refs[newIndex].current)
    event.preventDefault();
    setIndex(newIndex);
  }

// >------------------------------------------------------------------------------------------
  return (
    <div className="landing-wrapper" id="home" ref={refs[0]}>
        <div className="landing">
          <div className="landing-header">
            <h1 className="lt-header">Hello,</h1>
            <div className="lt-text-wrapper">
              <div className="lt1-container">
                <span className="lt1-text">I</span>
                <span className="lt1-text">'m</span>
              </div>
              <div className="lt2-container">
                <span className="lt2-text" id="lt2-J">J</span>
                <span className="lt2-text">a</span>
                <span className="lt2-text">k</span>
                <span className="lt2-text">e</span>
                <span className="lt2-text">.</span>
              </div>
              </div>
          </div>

          <div className="landing-subheader">
            <h3 className="l-subheader">Front-end / Back-end Web Developer</h3>
          </div>
    
          <div className="landing-btn">
            <a className="l-btn" href="#contact" onClick={
                (e) => smoothScroll(e, 4)}>Contact Me!</a>
          </div>

        </div>
      </div>
  );
}
