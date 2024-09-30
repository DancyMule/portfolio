import './GlobalStack.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

var RealStack = [
    ["Laravel", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png", 60],
    ["React", "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", 75],
    ["Angular", "https://houseofangular.io/wp-content/uploads/2023/11/AngularLogoGradient.png", 55],
    ["Node", "https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png", 35],
    ["Next", "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png", 50],
    ["Jetpack Compose", "https://mohammedakram.com/public/images/understanding-compose/jetpack-compose-icon.png", 85]
];

const FrameworksStack = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '10px', 
        focusOnSelect: true
    };
  
    return (
      <>
        <p className='StackTittle'>Frameworks y librerías</p>
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

export default FrameworksStack
