import "./AboutMe.css";
import { useLanguage } from '../LanguageContext/LanguageContext';

const AboutMe = () => {
  const { language } = useLanguage(); // Accede al idioma actual

  // Objeto de traducción
  const content = {
    es: {
      hello: "Hola, soy",
      name: "Jorge Juárez",
      jobTitle: "Ingeniero de Software",
      aboutText: "También conocido como Dancy, es un ingeniero de software apasionado por la innovación y las soluciones creativas. Con experiencia en desarrollo full-stack, Dancy ha trabajado con tecnologías como React, Laravel, Angular, Next.js, Node.js y Vite, destacándose por su capacidad de adaptarse a proyectos complejos y dinámicos. Su enfoque está en implementar soluciones eficientes tanto en el frontend como en el backend, así como en la gestión de equipos de desarrollo."
    },
    en: {
      hello: "Hello, I am",
      name: "Jorge Juárez",
      jobTitle: "Software Engineer",
      aboutText: "Also known as Dancy, he is a software engineer passionate about innovation and creative solutions. With experience in full-stack development, Dancy has worked with technologies such as React, Laravel, Angular, Next.js, Node.js, and Vite, excelling in his ability to adapt to complex and dynamic projects. His focus is on implementing efficient solutions in both frontend and backend, as well as managing development teams."
    },
    de: {
      hello: "Hallo, ich bin",
      name: "Jorge Juárez",
      jobTitle: "Software Ingenieur",
      aboutText: "Auch bekannt als Dancy, ist er ein Software-Ingenieur, der leidenschaftlich für Innovation und kreative Lösungen arbeitet. Mit Erfahrung in der Full-Stack-Entwicklung hat Dancy mit Technologien wie React, Laravel, Angular, Next.js, Node.js und Vite gearbeitet und sich durch seine Fähigkeit hervorgetan, sich an komplexe und dynamische Projekte anzupassen. Sein Fokus liegt auf der Implementierung effizienter Lösungen sowohl im Frontend als auch im Backend sowie im Management von Entwicklungsteams."
    },
  };

  return (
    <>
      <div id="about" className="AboutMeSection">
        <div className="NameSection">
          <p className="NameHello">{content[language].hello}</p>
          <p className="NameTitle">{content[language].name}</p>
          <p className="JobTitle">{content[language].jobTitle}</p>
          <p className="AboutMeText">{content[language].aboutText}</p>
        </div>
        <div className="ImgSection">
          <img className="MainPhoto" src="https://media.licdn.com/dms/image/v2/D4D03AQGg8uweMiZFNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709796834038?e=1732752000&v=beta&t=tMWPg5e8d02TqTBfmKamI2KWzIWF0hOqHL0pvZeMJ4g" alt="Linkedin foto" />
        </div>
      </div>
      <hr className="borderLineAboutMe" />
    </>
  );
}

export default AboutMe;
