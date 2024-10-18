import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function useAnimation(options) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      gsap.to(element, options);
    }
  }, [options]);

  return elementRef;
}

// Usage
const animationRef = useAnimation({ opacity: 0, duration: 1 });