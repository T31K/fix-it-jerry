"use client"
import React, { useState, useRef, useEffect } from 'react';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) return;

      const menuLinks = menuRef.current.querySelectorAll('.nav__link');
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === menuLinks[0]) {
          toggleRef.current.focus();
          e.preventDefault();
        } else if (document.activeElement === toggleRef.current) {
          menuLinks[0].focus();
          e.preventDefault();
        }
      }
    };

    const nav = navRef.current;
    nav?.addEventListener('keydown', handleKeyDown);
    return () => nav?.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <style>{`/* [Truncated for brevity — keep your full CSS here] */`}</style>

      <div className="viewport">
        <header className="header" role="banner">
          <div id="mobile-nav">
            <nav
              id="nav"
              className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
              role="navigation"
              ref={navRef}
            >
              <ul
                className="nav__menu"
                id="menu"
                ref={menuRef}
                tabIndex="-1"
                aria-label="main navigation"
                hidden={!isMenuOpen}
              >
                {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((item) => (
                  <li className="nav__item" key={item}>
                    <a href="#" className="nav__link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#nav"
                className="nav__toggle"
                role="button"
                aria-expanded={isMenuOpen}
                aria-controls="menu"
                onClick={handleToggleClick}
                ref={toggleRef}
              >
                <svg
                  className="menuicon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <title>Toggle Menu</title>
                  <g>
                    <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                    <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
                    <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                  </g>
                </svg>
              </a>

              <div className="splash"></div>
            </nav>
          </div>
        </header>

        <main className="main" role="main">
          <div className="gallery" aria-label="gallery">
            {Array.from({ length: 24 }).map((_, i) => (
              <a key={i} href="#" className="gallery__item"></a>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default MobileNav;
