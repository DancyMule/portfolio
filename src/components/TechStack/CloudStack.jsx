import './GlobalStack.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useLanguage } from '../LanguageContext/LanguageContext';

var RealStack = [
    ["AWS", "https://inferencelabs9.com/wp-content/uploads/2024/01/AWS2-1.png", 15],
    ["Firebase", "https://brandeps.com/logo-download/F/Firebase-logo-02.png", 65],
];

const content = {
  es:{
    tittle: 'Nube y servicios'
  },
  en:{
    tittle: 'Cloud & services'
  },
  de:{
    tittle: 'Cloud-Dienste'
  }
}

const CloudStack = () => {

  const {language} = useLanguage()

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '10px', 
        focusOnSelect: true
    };
  
    return (
      <>
        <p id="cloudStack" className='StackTittle'>{content[language].tittle}</p>
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

export default CloudStack
