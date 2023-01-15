/**
 * @description - Custom hook to handle lottie animations
 * @param {Object} animationRef - Reference to the animation container
 * @param {Boolean} hoverState - Boolean value to determine if the animation should be playing or not
 * 
 * @returns {Object} - Returns the animation object
 */
import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import arrowAnimation from '../../public/media/animated/arrow.json';

export default function useLottieAnimation(animationRef, hoverState) {
  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
        container: animationRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: arrowAnimation
    });
    }, []);

  useEffect(() => {
    if (hoverState) {
        animationRef.current.setSpeed(1.5)
        animationRef.current.playSegments([0, 10], true);
        animationRef.current.setDirection(1);
    } else {
        animationRef.current.playSegments([0, 0], true);
        animationRef.current.setDirection(-1);
    }
    }, [hoverState]);
}

