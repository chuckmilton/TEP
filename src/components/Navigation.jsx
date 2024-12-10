import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css'; // Ensure the CSS file is updated

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location for active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav>
      <div className="logo">
        <h2>Ethical AI</h2>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/privacy"
            className={location.pathname === '/privacy' ? 'active' : ''}
            onClick={closeMenu}
          >
            Data Privacy
          </Link>
        </li>
        <li>
          <Link
            to="/bias"
            className={location.pathname === '/bias' ? 'active' : ''}
            onClick={closeMenu}
          >
            Algorithmic Bias
          </Link>
        </li>
        <li>
          <Link
            to="/framework"
            className={location.pathname === '/framework' ? 'active' : ''}
            onClick={closeMenu}
          >
            Ethical Framework
          </Link>
        </li>
        <li>
          <Link
            to="/policy"
            className={location.pathname === '/policy' ? 'active' : ''}
            onClick={closeMenu}
          >
            Policy Recommendations
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navigation;
