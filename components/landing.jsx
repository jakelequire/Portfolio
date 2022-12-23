import { useState, useEffect, useRef } from 'react'; 
import Image from 'next/image';

import placeholder from '../public/media/placeholder.png';

export default function Landing() {
  // Declare a state variable to store the current text
  const [text, setText] = useState("");

  // Get a reference to the h1 element
  const cycledHeader = useRef(null);

  // Array of words to cycle through
  const headerString = [ ' Disciplined ', ' Tenacious ', ' Determined ', ' Passionate ', ' Ambitious '];

  // Index of current word in the array
  const [currentIndex, setCurrentIndex] = useState(0);

  // State variable to store whether the glitch effect is applied
  const [glitch, setGlitch] = useState(false)

  // Use the useEffect hook to update the text every 5 seconds
  useEffect(() => {
    // Set up a timer to update the text every 5 seconds
    const interval = setInterval(() => {

      // Update the text to the next word in the array
      setText(headerString[currentIndex]);

      // Increment the index
      setCurrentIndex((currentIndex + 1) % headerString.length);
      setGlitch(true)

      setTimeout(() => {
        setGlitch(false)
      }, 50)
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(interval);
  });

  return (
    <div className="landing-wrapper">
		  <div className="landing-container">
		  	<div className="landing-hero">
        	<div className="landing-headerOne">
		  	  <h1 className="header-two">Hi, I'm</h1>
		  	  <h1 className="header-two">Jake.</h1>
		  	  <h1 className="header-two">A...</h1>
        	</div>

        	<div className="landing-headerTwo">
        		<h1 className="header-one">Self-taught</h1>
        		<h1 className="cycled-header" ref={cycledHeader}>
        	    	{text}
        	  	</h1>
        	  <h1 className="header-three">Web Developer</h1>
        	</div>
		  	</div>
		  </div>
    </div>
  );
}
