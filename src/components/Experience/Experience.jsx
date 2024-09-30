import './Experience.css'

var ExperienceStack = [
  ['Setenal', 'Ingeniero de software', 'Residencias', 'Desarrollo de un módulo de hardware para el rastreo, extracción y transmisión de datos por bluetooth de camiones y autos (Daimler Trucks, Volvo Trucks, Mack Trucks, etc).', 'https://media.licdn.com/dms/image/v2/D4E2DAQEGbWKJ8dcxCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1722165322617?e=1728295200&v=beta&t=-rtuCGu24dQPo6dj0u9j07Q1nN_8YIMxMZ9arvn5I3Y'],
  ['Unlimited Circuits', 'Ingeniero de software', 'Experiencia profesional', 'Desarrollo de un módulo de hardware para el rastreo, extracción y transmisión de datos por bluetooth de camiones y autos (Daimler Trucks, Volvo Trucks, Mack Trucks, etc).', 'https://media.licdn.com/dms/image/v2/D4E2DAQFPs6MDdIy96A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726770866928?e=1728298800&v=beta&t=-yrP-4ovu65hxKbm9JruoSizUFbuKquH-2Jr5QGArOs'],
  ['Comisión Municipal de Seguridad Ciudadana', 'Ingeniero de software', 'Experiencia profesional', 'Desarrollo y mantenimiento de aplicaciones web para el Departamento de Policía de Morelia, mejorando la seguridad pública y la eficiencia operativa. Utilicé Node.js para construir APIs escalables y Angular para interfaces responsivas, colaborando en la integración de sistemas de datos en tiempo real.', 'https://media.licdn.com/dms/image/v2/D4E2DAQH2jcoYu_a3fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722165752135?e=1728295200&v=beta&t=FnGbi3Qk8ZIyuul0IQKbjmgQWALgbw_4OtQ4mRdjLnc'],
  ['Bixer', 'Líder de proyecto', 'Start-Up', 'Diseño y desarrollo de un goniómetro digital (herramienta de hardware para la fisioterapia) junto al desarrollo y despliegue de una aplicación web para interpretar los datos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQE2ZRglw6h6aQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722166109527?e=1728295200&v=beta&t=5p04Kp20mGf1mJfZuUKKrWQpbkLwBlm27ozh_8dn4dE'],
  ['Filament-Go', 'Ingeniero de software & Líder de proyecto', 'Experiencia profesional', 'Desarrollo y despliegue de la página web de impresiones 3D ‘filament-go.com’; sistema de renderizado 3D, cotización, pasarela de pago y gestor de pedidos.', 'https://media.licdn.com/dms/image/v2/D4E2DAQGLiH05Yp65Ng/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723236826994?e=1728295200&v=beta&t=QZlKFpagXvdKiGSyQqbwVACSD6p3H8edJeMp0-9K0lI'],
];

const Experience = () => {
  return (
    <>
      <hr className="borderLine" />
      <p className="Tittle">Experiencia</p>
      <div>
        {ExperienceStack.map((element, index) => (
          <div key={index} className="ContainerExp">
            <div className="ExperienceContainer">
              <div className="ExperienceDetails">
                <h3>{element[0]}</h3>
                <h4>{element[1]} - {element[2]}</h4>
                <p>{element[3]}</p>
              </div>
              <img src={element[4]} alt={element[0]} className="ExperienceImage" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
