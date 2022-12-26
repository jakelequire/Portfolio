import { useState, useEffect, useRef } from 'react'; 
import Image from 'next/image';

import placeholder from '../public/media/sample2.png';

export default function Landing() {

  return (
    <div className="landing-wrapper">
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
          <a className="l-btn" href="/about">Contact Me!</a>
        </div>
      </div>
    </div>
  );
}
