import './Languages.css'
var LanguagesStack = [
    ['Español', 'https://hatscripts.github.io/circle-flags/flags/mx.svg', 'C2'],
    ['Inglés', 'https://hatscripts.github.io/circle-flags/flags/us.svg', 'B2'],
    ['Alemán', 'https://hatscripts.github.io/circle-flags/flags/de.svg', 'A2'],
]

const Languages = () => {
  return (
    <>
        <p className='Tittle'>Idiomas</p>
        <div className="Container">
            {LanguagesStack.map((element, index) =>(
                <div key={index} className="ImageContainer">
                <img className='ImgSizer' src={element[1]} alt={element[0]} />
                <p className='CenteredText'>{element[2]}</p>
              </div>
            ))}
        </div> 
    </>
  )
}

export default Languages
