import './GlobalStack.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


var RealStack = [
    ["Java", "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png", 80],
    ["Kotlin", "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", 90],
    ["JavaScript", "https://abrudz.github.io/logos/JS.svg", 85],
    ["TypeScript", "https://abrudz.github.io/logos/TypeScript.svg", 70],
    ["Arduino", "https://img.icons8.com/?size=512&id=13444&format=png", 80],
    ["PHP", "https://abrudz.github.io/logos/PHP.svg", 60],
    ["Python", "https://abrudz.github.io/logos/Python.svg", 45],
    ["Flutter", "https://miro.medium.com/v2/resize:fit:1000/1*KABhol5JHNKrSm_9iJvGbA.png", 25],
    ["Swift", "https://www.programacion.com.py/wp-content/uploads/2017/08/Swift_logo.svg_.png", 10],
];

const LanguageStack = () => {
  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '10px', 
      focusOnSelect: true
  };

  return (
    <>
      <p className='StackTittle'>Lenguajes de programación</p>
      <Slider {...settings}>
        {RealStack.map((element, index) => (
          <div key={index} className='SpacerContainer'>
            <div className='TechContainer'>
              <img src={element[1]} alt={element[0]} className='imgSizer' />
              <p className='TechText'>{element[0]}</p>
              <progress className='Progress' value={element[2]} max={100}/>
            </div>
          </div>
        ))}
      </Slider>
      <br/>
    </>
  );
};
  

export default LanguageStack
