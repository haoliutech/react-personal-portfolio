import React from 'react'; 
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection();

  return (
    <motion.header id="header"
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 left-0 w-full"
      style={{ zIndex: 1000 }}
    >
      <Navbar/>
    </motion.header>
  );
};

export default Header;