import './Languages.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

var LanguagesStack = [
    ['Español', 'https://hatscripts.github.io/circle-flags/flags/mx.svg', 'C2', 'ES'],
    ['Inglés', 'https://hatscripts.github.io/circle-flags/flags/us.svg', 'B2', 'EN'],
    ['Alemán', 'https://hatscripts.github.io/circle-flags/flags/de.svg', 'A2', 'DE'],
];

const content = {
  es:{
    tittle: "Idiomas",
  },
  en:{
    tittle: "Languages",
  },
  de:{
    tittle: "Sprachen",
  },
}

const Languages = () => {
  const { changeLanguage, language } = useLanguage();
  

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };


  return (
    <>
    
      <p id="languages" className='StackTittle'>{content[language].tittle}</p>
      <div className="Container">
        {LanguagesStack.map((element, index) => (
          <div key={index} className="ImageContainer" onClick={() => handleLanguageChange(element[3].toLowerCase())}>
            <img className={`FlagImgSizer ${language == element[3].toLowerCase() ? 'FlagSelected' : ''}`} src={element[1]} alt={element[0]}/>
            <p className='CenteredText'>{element[2]}</p>    
          </div>
        ))}
      </div> 
    </>
  );
};

export default Languages;
