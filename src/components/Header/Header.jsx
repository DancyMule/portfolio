import { useState } from 'react';
import './Header.css';
import { useLanguage } from '../LanguageContext/LanguageContext';
import LanguagesTopBar from './LanguagesTopBar/LanguagesTopBar.jsx'

const content = {
  es: {
    tittle: "Mi portafolio",
    aboutMe: "Sobre mí",
    programmingLanguages: "Lenguajes de programación",
    frameworks: "Frameworks y librerías",
    databases: "Bases de datos",
    cloud: "Nube",
    languages: "Idiomas",
    experience: "Experiencia",
  },
  en: {
    tittle: "My Portfolio",
    aboutMe: "About Me",
    programmingLanguages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    databases: "Databases",
    cloud: "Cloud",
    languages: "Languages",
    experience: "Experience",
  },
  de: {
    tittle: "Mein Portfolio",
    aboutMe: "Über mich",
    programmingLanguages: "Programmiersprachen",
    frameworks: "Frameworks & Bibliotheken",
    databases: "Datenbanken",
    cloud: "Cloud",
    languages: "Sprachen",
    experience: "Erfahrung",
  },
};


const Header = () => {
  const {language} = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{content[language].tittle}</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about">{content[language].aboutMe}</a></li>
          <li><a href="#languagesStack">{content[language].programmingLanguages}</a></li>
          <li><a href="#frameworksStack">{content[language].frameworks}</a></li>
          <li><a href="#databasesStack">{content[language].databases}</a></li>
          <li><a href="#cloudStack">{content[language].cloud}</a></li>
          <li><a href="#languages">{content[language].languages}</a></li>
          <li><a href="#experience">{content[language].experience}</a></li>
          <li><LanguagesTopBar></LanguagesTopBar></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
