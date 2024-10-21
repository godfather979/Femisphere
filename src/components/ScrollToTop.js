import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top on route change
  }, [pathname]); // Run whenever route changes

  return null; // No UI to render
};

export default ScrollToTop;