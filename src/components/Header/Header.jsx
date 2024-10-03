import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Mi Portafolio</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#languagesStack">Lenguajes</a></li>
          <li><a href="#frameworksStack">Frameworks</a></li>
          <li><a href="#databasesStack">Bases de datos</a></li>
          <li><a href="#cloudStack">Nube</a></li>
          <li><a href="#languages">Idiomas</a></li>
          <li><a href="#experience">Experiencia</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
