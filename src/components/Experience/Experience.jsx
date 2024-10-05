import './Experience.css'
import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';

const tittleContent = {
  es: {
    tittle: "Experiencia",
 },
  en: {
    tittle: "Experience",
  },
  de: {
    tittle: "Erfahrung",
  },
};

const content = {
    es: {
      experiences: [
        {
          company: 'Unlimited Circuits',
          role: 'Ingeniero de software',
          type: 'Experiencia profesional',
          description: 'Responsable del diseño UX/UI y desarrollo full stack de la aplicación móvil 100% Calvillense para Android. Diseñé interfaces intuitivas y desarrollé la infraestructura técnica, desde el frontend hasta la integración con servicios backend en Firebase.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs',
          duration: '6 meses',
        },
        {
          company: 'Comisión Municipal de Seguridad Ciudadana',
          role: 'Ingeniero de software',
          type: 'Experiencia profesional',
          description: 'Desarrollo y mantenimiento de aplicaciones web para el Departamento de Policía de Morelia, mejorando la seguridad pública y la eficiencia operativa. Utilicé Node.js para construir APIs escalables y Angular para interfaces responsivas, colaborando en la integración de sistemas de datos en tiempo real.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc',
          duration: '2 años',
        },
        {
          company: 'Filament-Go',
          role: 'Ingeniero de software & Líder de proyecto',
          type: 'Experiencia profesional',
          description: 'Desarrollo y despliegue de la página web de impresiones 3D ‘filament-go.com’; sistema de renderizado 3D, cotización, pasarela de pago y gestor de pedidos.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI',
          duration: '6 meses',
        },
        {
          company: 'Setenal',
          role: 'Ingeniero de software',
          type: 'Residencias',
          description: 'Desarrollo de un módulo de hardware para el rastreo, extracción y transmisión de datos por Bluetooth de camiones y autos, incluyendo modelos de Daimler Trucks, Volvo Trucks, Mack Trucks, entre otros. Este módulo está diseñado para monitorear y recopilar información clave sobre el rendimiento y ubicación de los vehículos en tiempo real. Implementé soluciones de hardware que integran sensores y microcontroladores para asegurar una comunicación efectiva y precisa de los datos. El objetivo es proporcionar a las empresas de transporte una herramienta efectiva para optimizar la gestión de su flota, mejorando la eficiencia operativa y la seguridad en el camino.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y',
          duration: '8 meses',
        },
        {
          company: 'Bixer',
          role: 'Líder de proyecto',
          type: 'Start-Up',
          description: 'Diseño y desarrollo de un goniómetro digital (herramienta de hardware para la fisioterapia) junto al desarrollo y despliegue de una aplicación web para interpretar los datos.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE',
          duration: '2 años',
        },
      ],
    },
    en: {
      experiences: [
        {
          company: 'Unlimited Circuits',
          role: 'Software Engineer',
          type: 'Professional Experience',
          description: 'Responsible for UX/UI design and full-stack development of the 100% Calvillense mobile application for Android. Designed intuitive interfaces and developed the technical infrastructure, from the frontend to backend service integration in Firebase.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs',
          duration: '6 months',
        },
        {
          company: 'Municipal Commission of Citizen Security',
          role: 'Software Engineer',
          type: 'Professional Experience',
          description: 'Development and maintenance of web applications for the Police Department of Morelia, improving public safety and operational efficiency. Used Node.js to build scalable APIs and Angular for responsive interfaces, collaborating in the integration of real-time data systems.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc',
          duration: '2 years',
        },
        {
          company: 'Filament-Go',
          role: 'Software Engineer & Project Lead',
          type: 'Professional Experience',
          description: 'Development and deployment of the 3D printing website “filament-go.com”; 3D rendering system, quoting, payment gateway, and order management.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI',
          duration: '6 months',
        },
        {
          company: 'Setenal',
          role: 'Software Engineer',
          type: 'Internship',
          description: 'Development of a hardware module for tracking, extracting, and transmitting data via Bluetooth from trucks and cars, including models from Daimler Trucks, Volvo Trucks, Mack Trucks, among others. This module is designed to monitor and collect key information about the performance and location of vehicles in real-time. Implemented hardware solutions that integrate sensors and microcontrollers to ensure effective and accurate data communication. The goal is to provide transportation companies with an effective tool to optimize fleet management, improving operational efficiency and safety on the road.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y',
          duration: '8 months',
        },
        {
          company: 'Bixer',
          role: 'Project Lead',
          type: 'Start-Up',
          description: 'Design and development of a digital goniometer (hardware tool for physiotherapy) along with the development and deployment of a web application to interpret the data.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE',
          duration: '2 years',
        },
      ],
    },
    de: {
      experiences: [
        {
          company: 'Unlimited Circuits',
          role: 'Software-Ingenieur',
          type: 'Berufserfahrung',
          description: 'Verantwortlich für das UX/UI-Design und die Full-Stack-Entwicklung der 100% Calvillense-Mobilanwendung für Android. Entwurf intuitiver Schnittstellen und Entwicklung der technischen Infrastruktur von der Frontend- bis zur Backend-Service-Integration in Firebase.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs',
          duration: '6 Monate',
        },
        {
          company: 'Municipal Commission of Citizen Security',
          role: 'Software-Ingenieur',
          type: 'Berufserfahrung',
          description: 'Entwicklung und Wartung von Webanwendungen für die Polizei von Morelia, Verbesserung der öffentlichen Sicherheit und der operativen Effizienz. Verwendung von Node.js zur Erstellung skalierbarer APIs und Angular für responsive Schnittstellen, Zusammenarbeit bei der Integration von Echtzeitdaten-Systemen.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc',
          duration: '2 Jahre',
        },
        {
          company: 'Filament-Go',
          role: 'Software-Ingenieur & Projektleiter',
          type: 'Berufserfahrung',
          description: 'Entwicklung und Implementierung der 3D-Druck-Website „filament-go.com“; 3D-Rendering-System, Angebotserstellung, Zahlungsabwicklung und Auftragsverwaltung.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI',
          duration: '6 Monate',
        },
        {
          company: 'Setenal',
          role: 'Software-Ingenieur',
          type: 'Praktikum',
          description: 'Entwicklung eines Hardwaremoduls zur Verfolgung, Extraktion und Übertragung von Daten über Bluetooth von Lastwagen und Autos, einschließlich Modelle von Daimler Trucks, Volvo Trucks, Mack Trucks und anderen. Dieses Modul ist dafür konzipiert, wichtige Informationen über die Leistung und den Standort von Fahrzeugen in Echtzeit zu überwachen und zu sammeln. Implementierte Hardwarelösungen, die Sensoren und Mikrocontroller integrieren, um eine effektive und genaue Datenkommunikation zu gewährleisten. Ziel ist es, Transportunternehmen ein effektives Werkzeug zur Optimierung des Flottenmanagements bereitzustellen und die operative Effizienz und Sicherheit auf der Straße zu verbessern.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y',
          duration: '8 Monate',
        },
        {
          company: 'Bixer',
          role: 'Projektleiter',
          type: 'Start-Up',
          description: 'Entwurf und Entwicklung eines digitalen Goniometers (Hardware-Tool für Physiotherapie) sowie die Entwicklung und Implementierung einer Webanwendung zur Interpretation der Daten.',
          image: 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE',
          duration: '2 Jahre',
        },
      ],
    },
  };

  /*
  var ExperienceStack = [
    ['Unlimited Circuits', 'Ingeniero de software', 'Experiencia profesional', 'Responsable del diseño UX/UI y desarrollo full stack de la aplicación móvil 100% Calvillense para Android. Diseñé interfaces intuitivas y desarrollé la infraestructura técnica, desde el frontend hasta la integración con servicios backend en Firebase.', 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs', '6 meses'],
    ['Comisión Municipal de Seguridad Ciudadana', 'Ingeniero de software', 'Experiencia profesional', 'Desarrollo y mantenimiento de aplicaciones web para el Departamento de Policía de Morelia, mejorando la seguridad pública y la eficiencia operativa. Utilicé Node.js para construir APIs escalables y Angular para interfaces responsivas, colaborando en la integración de sistemas de datos en tiempo real.', 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc', '2 años'],
    ['Filament-Go', 'Ingeniero de software & Líder de proyecto', 'Experiencia profesional', 'Desarrollo y despliegue de la página web de impresiones 3D ‘filament-go.com’; sistema de renderizado 3D, cotización, pasarela de pago y gestor de pedidos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI', '6 meses'],
    ['Setenal', 'Ingeniero de software', 'Residencias', 'Desarrollo de un módulo de hardware para el rastreo, extracción y transmisión de datos por Bluetooth de camiones y autos, incluyendo modelos de Daimler Trucks, Volvo Trucks, Mack Trucks, entre otros. Este módulo está diseñado para monitorear y recopilar información clave sobre el rendimiento y ubicación de los vehículos en tiempo real. Implementé soluciones de hardware que integran sensores y microcontroladores para asegurar una comunicación efectiva y precisa de los datos. El objetivo es proporcionar a las empresas de transporte una herramienta efectiva para optimizar la gestión de su flota, mejorando la eficiencia operativa y la seguridad en el camino.', 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y', '8 meses'],
    ['Bixer', 'Líder de proyecto', 'Start-Up', 'Diseño y desarrollo de un goniómetro digital (herramienta de hardware para la fisioterapia) junto al desarrollo y despliegue de una aplicación web para interpretar los datos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE', '2 años'],
  ];
  */

  const Experience = () => {
    const { language } = useLanguage();
    const [layoutToShow, setLayoutToShow] = useState(3); 
  
    const LayoutA = () => (
      <div>
        {content[language].experiences.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceDetails">
                <p className='ExperienceRol'>{element.role}</p>
                <h2 className='ExperienceCompany'>{element.company}</h2>
                <p className='ExperienceDescription'>{element.description}</p>
                <p className='ExperienceType'>{element.type}</p>
              </div>
              <img src={element.image} alt={element.company} className="ExperienceImage" />
              <div className='TimeContainer'>
                <img className='ImgIcon' src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png" alt="Time icon"/>
                <p className='TimeText'>{element.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
    const LayoutB = () => (
      <div>
        {content[language].experiences.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceDetails">
                <p className='ExperienceRol'>{element.role}</p>
                <h2 className='ExperienceCompany'>{element.company}</h2>
                <p className='ExperienceDescription'>{element.description}</p>
              </div>
              <p className='ExperienceType'>{element.type}</p>
              <img src={element.image} alt={element.company} className="ExperienceImage" />
              <div className='TimeContainer'>
                <img className='ImgIcon' src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png" alt="Time icon"/>
                <p className='TimeText'>{element.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
    const LayoutC = () => (
      <div>
        {content[language].experiences.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceRow">
                <p className="ExperienceType">{element.type}</p>
                <p className="ExperienceRol">{element.role}</p>
              </div>
              <h2 className='ExperienceCompany'>{element.company}</h2>
              <img src={element.image} alt={element.company} className="ExperienceImage" />
              <p className="ExperienceDescription">{element.description}</p>
              <div className="TimeContainer">
                <img className="ImgIcon" src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png" alt="Time icon" />
                <p className="TimeText">{element.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 950) {
          setLayoutToShow(<LayoutA />);
        } else if (window.innerWidth >= 650) {
          setLayoutToShow(<LayoutB />);
        } else {
          setLayoutToShow(<LayoutC />);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); 
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (window.innerWidth >= 950) {
        setLayoutToShow(<LayoutA />);
      } else if (window.innerWidth >= 650) {
        setLayoutToShow(<LayoutB />);
      } else {
        setLayoutToShow(<LayoutC />);
      }
    }, [language]);
  
    return (
      <>
        <hr className="ExperienceBorderLine" />
        <p id="experience" className="StackTittle">{tittleContent[language].tittle}</p>
        {layoutToShow}
      </>
    );
  }
  
  export default Experience;
