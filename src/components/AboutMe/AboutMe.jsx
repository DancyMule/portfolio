import "./AboutMe.css"

const AboutMe = () => {
  return (
    <>
        <div id="about" className="AboutMeSection">
            <div className="NameSection">
                <p className="NameHello">Hola, soy</p>
                <p className="NameTitle">Jorge Juárez</p>
                <p className="JobTitle">Software Engineer</p>
                <p className="AboutMeText">También conocido como Dancy, es un ingeniero de software apasionado por la innovación y las soluciones creativas. Con experiencia en desarrollo full-stack, Dancy ha trabajado con tecnologías como React, Laravel, Angular, Next.js, Node.js y Vite, destacándose por su capacidad de adaptarse a proyectos complejos y dinámicos. Su enfoque está en implementar soluciones eficientes tanto en el frontend como en el backend, así como en la gestión de equipos de desarrollo.</p>
            </div>
            <div className="ImgSection" >
                <img className="MainPhoto" src="https://media.licdn.com/dms/image/v2/D4D03AQGg8uweMiZFNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709796834038?e=1732752000&v=beta&t=tMWPg5e8d02TqTBfmKamI2KWzIWF0hOqHL0pvZeMJ4g" alt="Linkedin foto"/>
            </div>
        </div>
        <hr className="borderLineAboutMe" />
    </>
  )
}

export default AboutMe
