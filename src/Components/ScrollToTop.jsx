// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }, [pathname]);

  return null; // No UI element needed
};

export default ScrollToTop;
