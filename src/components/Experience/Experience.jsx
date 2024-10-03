import './Experience.css'
import { useEffect, useState } from 'react';

var ExperienceStack = [
  ['Unlimited Circuits', 'Ingeniero de software', 'Experiencia profesional', 'Responsable del diseño UX/UI y desarrollo full stack de la aplicación móvil 100% Calvillense para Android. Diseñé interfaces intuitivas y desarrollé la infraestructura técnica, desde el frontend hasta la integración con servicios backend en Firebase.', 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs', '6 meses'],
  ['Comisión Municipal de Seguridad Ciudadana', 'Ingeniero de software', 'Experiencia profesional', 'Desarrollo y mantenimiento de aplicaciones web para el Departamento de Policía de Morelia, mejorando la seguridad pública y la eficiencia operativa. Utilicé Node.js para construir APIs escalables y Angular para interfaces responsivas, colaborando en la integración de sistemas de datos en tiempo real.', 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc', '2 años'],
  ['Filament-Go', 'Ingeniero de software & Líder de proyecto', 'Experiencia profesional', 'Desarrollo y despliegue de la página web de impresiones 3D ‘filament-go.com’; sistema de renderizado 3D, cotización, pasarela de pago y gestor de pedidos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI', '6 meses'],
  ['Setenal', 'Ingeniero de software', 'Residencias', 'Desarrollo de un módulo de hardware para el rastreo, extracción y transmisión de datos por Bluetooth de camiones y autos, incluyendo modelos de Daimler Trucks, Volvo Trucks, Mack Trucks, entre otros. Este módulo está diseñado para monitorear y recopilar información clave sobre el rendimiento y ubicación de los vehículos en tiempo real. Implementé soluciones de hardware que integran sensores y microcontroladores para asegurar una comunicación efectiva y precisa de los datos. El objetivo es proporcionar a las empresas de transporte una herramienta efectiva para optimizar la gestión de su flota, mejorando la eficiencia operativa y la seguridad en el camino.', 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y', '8 meses'],
  ['Bixer', 'Líder de proyecto', 'Start-Up', 'Diseño y desarrollo de un goniómetro digital (herramienta de hardware para la fisioterapia) junto al desarrollo y despliegue de una aplicación web para interpretar los datos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE', '2 años'],
];

const Experience = () => {

  const [layoutToShow, setLayoutToShow] = useState(3);

  const LayoutA = () => {
    return(
      <div>
        {ExperienceStack.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceDetails">
                <p className='ExperienceRol'>{element[1]}</p>
                <h2 className='ExperienceCompany'>{element[0]}</h2>
                <p className='ExperienceDescription'>{element[3]}</p>
                <p className='ExperienceType'>{element[2]}</p>
              </div>
              <img src={element[4]} alt={element[0]} className="ExperienceImage" />
              <div className='TimeContainer'>
                <img className='ImgIcon' src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png" alt="Time icon"/>
                <p className='TimeText'>{element[5]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  const LayoutB = () => {
    return(
      <div>
        {ExperienceStack.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceDetails">
                <p className='ExperienceRol'>{element[1]}</p>
                <h2 className='ExperienceCompany'>{element[0]}</h2>
                <p className='ExperienceDescription'>{element[3]}</p>
              </div>
                <p className='ExperienceType'>{element[2]}</p>
              <img src={element[4]} alt={element[0]} className="ExperienceImage" />
              <div className='TimeContainer'>
                <img className='ImgIcon' src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png" alt="Time icon"/>
                <p className='TimeText'>{element[5]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const LayoutC = () => {
    return (
      <div>
        {ExperienceStack.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              {/* Línea 1: Rol (izquierda) y Tipo (derecha) */}
              <div className="ExperienceRow">
                <p className="ExperienceType">{element[2]}</p>
                <p className="ExperienceRol">{element[1]}</p>
              </div>
              {/* Línea 2: Imagen */}
              <h2 className='ExperienceCompany'>{element[0]}</h2>
              <img src={element[4]} alt={element[0]} className="ExperienceImage" />
              {/* Línea 3: Descripción */}
              <p className="ExperienceDescription">{element[3]}</p>
              {/* Línea 4: Tiempo de experiencia (izquierda) */}
              <div className="TimeContainer">
                <img
                  className="ImgIcon"
                  src="https://clipart-library.com/new_gallery/355-3551574_clock-icon-clock-icon-white-png.png"
                  alt="Time icon"
                />
                <p className="TimeText">{element[5]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        setLayoutToShow(LayoutA);
      } else if(window.innerWidth >= 650){
        setLayoutToShow(LayoutB);
      } else{
        setLayoutToShow(LayoutC)
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <hr className="ExperienceBorderLine" />
      <p id="experience" className="StackTittle">Experiencia</p>
      {layoutToShow}
    </>
  );
}

export default Experience;
