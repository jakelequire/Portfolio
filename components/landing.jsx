import { useState, useEffect, useRef } from 'react';
import { PrimaryButton } from './subComponents/components.jsx';
import useObserver from './hooks/useObserver';

export default function Landing() {
  const { ref } = useObserver();

// >------------------------------------------------------------------------------------------
  return (
    <div className="landing-wrapper" id="home">
        <div className="landing" ref={ref.home}>
          <div className="landing-header">
            <h1 className="lt-header">Hello,</h1>
            <div className="lt-text-wrapper">
              <div className="lt1-container">
                <span className="lt1-text">I</span>
                <span className="lt1-text">'m</span>
              </div>
              <div className="lt2-container">
                <span className="lt2-text" id="lt2-J">J</span>
                <span className="lt2-text">ake</span>
              </div>
            </div>
          </div>

          <div className="landing-subheader">
            <h3 className="l-subheader">Front-end / Back-end Web Developer</h3>
            <p className="prod-subtext">&#91;Under Development&#93;</p>
          </div>
    
          <div className="landing-btn">
            <PrimaryButton link="#contact" text="Contact Me!" />
          </div>

        </div>
      </div>
  );
}
