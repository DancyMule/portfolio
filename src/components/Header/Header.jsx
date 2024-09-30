// Header.jsx
import './Header.css'; // Asegúrate de crear un archivo CSS para estilos

const Header = () => {
  return (
      <nav className="navbar">
          <div className="navbar-brand">
              <h1>Mi Portafolio</h1>
          </div>
          <div className="navbar-links">
              <ul>
                  <li><a href="#about">Sobre mí</a></li>
                  <li><a href="#languages">Lenguajes</a></li>
                  <li><a href="#frameworks">Frameworks</a></li>
                  <li><a href="#databases">Bases de datos</a></li>
                  <li><a href="#cloud">Nube</a></li>
                  <li><a href="#experience">Experiencia</a></li>
                  <li><a href="#languages">Idiomas</a></li>
              </ul>
          </div>
      </nav>
  );
};

export default Header;