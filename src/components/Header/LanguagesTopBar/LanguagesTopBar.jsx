import './LanguagesTopBar.css';
import { useLanguage } from '../../LanguageContext/LanguageContext'; 

var LanguagesStack = [
    ['Español', 'https://hatscripts.github.io/circle-flags/flags/mx.svg', 'C2', 'ES'],
    ['Inglés', 'https://hatscripts.github.io/circle-flags/flags/us.svg', 'B2', 'EN'],
    ['Alemán', 'https://hatscripts.github.io/circle-flags/flags/de.svg', 'A2', 'DE'],
];

const Languages = () => {
  const { changeLanguage, language } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language); 
  };


  return (
    <>
    

      <div className="ContainerTopBar">
        {LanguagesStack.map((element, index) => (
          <div key={index} className="ImageContainerTopBar" onClick={() => handleLanguageChange(element[3].toLowerCase())}>
            <img className={`FlagImgSizerTopBar ${language == element[3].toLowerCase() ? 'FlagSelectedTopBar' : ''}`} src={element[1]} alt={element[0]}/>
          </div>
        ))}
      </div> 
    </>
  );
};

export default Languages;
