import { useState, useEffect, useRef } from 'react'; 
import Image from 'next/image';

import placeholder from '../public/media/sample2.png';

export default function Landing() {

  // const [text, setText] = useState("");
  // const cycledHeader = useRef(null);
  // const headerString = [ ' Disciplined ', ' Tenacious ', ' Determined ', ' Passionate ', ' Ambitious '];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [glitch, setGlitch] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setText(headerString[currentIndex]);

  //     setCurrentIndex((currentIndex + 1) % headerString.length);
  //     setGlitch(true)

  //     setTimeout(() => {
  //       setGlitch(false)
  //     }, 50)
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

  return (
    <div className="landing-wrapper">
      <div className="landing">
    
      </div>
    </div>
  );
}
