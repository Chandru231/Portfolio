import React, { useRef, useEffect, useState } from 'react';

const Reveal = ({ children, delay = 0, className = '', variant = 'clip', direction = 'bottom' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            // Wait for transition (0.8s) to finish before allowing overflow
            setTimeout(() => {
              setIsAnimationComplete(true);
            }, 1000);
          }, delay);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const isClip = variant === 'clip';

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-100px)';
      case 'right': return 'translateX(100px)';
      case 'top': return 'translateY(-100%)';
      case 'bottom': default: return 'translateY(110%)';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
       return 'translateX(0)';
      case 'top':
      case 'bottom':
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-container ${className} ${isVisible ? 'is-visible' : ''}`}
      style={{ overflow: isClip ? (isAnimationComplete ? 'visible' : 'hidden') : 'visible' }}
    >
      <div
        className="reveal-text"
        style={!isClip ? {
          transform: isVisible ? getFinalTransform() : getInitialTransform(),
          opacity: isVisible ? 1 : 0,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out'
        } : {
           transform: isVisible ? getFinalTransform() : getInitialTransform(),
           transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;
