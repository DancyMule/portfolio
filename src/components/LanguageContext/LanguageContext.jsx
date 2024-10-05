import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}  {/* Aquí se renderizan los componentes hijos */}
    </LanguageContext.Provider>
  );
};

// Define la validación de propTypes
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // children debe ser un nodo React y es requerido
};

export const useLanguage = () => useContext(LanguageContext);