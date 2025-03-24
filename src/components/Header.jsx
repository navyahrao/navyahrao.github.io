import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks as links } from '../utils';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getCurrentIndex = useCallback(() => {
    const currentPath = location.pathname;
    const index = links.findIndex((link) => link.url === currentPath);
    return index !== -1 ? index : 0;
  }, [location.pathname]);

  const [currentIndex, setCurrentIndex] = useState(getCurrentIndex());

  useEffect(() => {
    setCurrentIndex(getCurrentIndex());
  }, [getCurrentIndex, location]);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, [handleResize]);

  const handleLinkClick = (index) => {
    setCurrentIndex(index);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenu = (value) => {
    setIsMobileMenuOpen(value);
  };

  return (
    <header
      className={`px-4 md:px-16 py-4 flex items-center top-0 w-full fixed ${isSticky ? 'backdrop-blur-[200px] border-b border-white/30 shadow-md' : ''}`}
    >
      <Link
        to="/"
        onClick={() => handleLinkClick(0)}
        className="py-2.5 mx-2.5 text-3xl font-sans font-bold text-violet-500"
      >
        <div>Navya Rao</div>
      </Link>

      <nav className="ml-auto">
        <div className="hidden md:flex">
          {links.map(({ name, url }, index) => (
            <Link
              key={index}
              to={url}
              onClick={() => handleLinkClick(index)}
              className={`flex max-h-min px-2 py-2.5 md:px-4 rounded-md bg-white font-medium mx-2.5 transition-all duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-pink-200 to-violet-400 items-center ${
                currentIndex === index
                  ? 'bg-gradient-to-r text-white from-pink-300 to-violet-500'
                  : ''
              }`}
            >
              <div>{name}</div>
            </Link>
          ))}
        </div>
      </nav>

      <button
        className="md:hidden ml-auto text-3xl relative"
        onClick={() => handleMobileMenu(!isMobileMenuOpen)}
        title={`${isMobileMenuOpen ? 'close menu' : 'open menu'}`}
      >
        <span
          className={`block w-6 h-1 bg-violet-500 mb-1 ${isMobileMenuOpen ? 'absolute top-0 transform rotate-45' : ''} `}
        ></span>
        <span
          className={`block w-6 h-1 bg-violet-500 mb-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} `}
        ></span>
        <span
          className={`block w-6 h-1 bg-violet-500 mb-1 ${isMobileMenuOpen ? 'absolute top-0 transform -rotate-45' : ''} `}
        ></span>
      </button>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[90px] h-screen bg-violet-900 opacity-20 z-10"
            onClick={() => handleMobileMenu(false)}
          ></div>
          <div className="absolute top-[90px] right-0 left-0 z-20 p-4 bg-white rounded-b shadow-lg">
            {links.map(({ name, url }, index) => (
              <Link
                key={index}
                to={url}
                onClick={() => handleLinkClick(index)}
                className={`block px-4 py-2 text-lg font-medium text-violet-500 hover:bg-gradient-to-r from-pink-200 to-violet-400 transition-all duration-300`}
              >
                {name}
              </Link>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
