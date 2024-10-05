import './GlobalStack.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useLanguage } from '../LanguageContext/LanguageContext';

var RealStack = [
    ["MySQL", "https://cdn.icon-icons.com/icons2/2699/PNG/512/mysql_logo_icon_169940.png", 85],
    ["MariaDB", "https://global.synologydownload.com/download/Package/img/MariaDB10/10.3.29-0070/thumb_256.png", 85],
    ["PostgreSQL", "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", 60],
    ["MongoDB", "https://www.mongodb.com/community/forums/uploads/default/original/3X/0/1/01d4259c8928db8d3f2370429391688f8622654d.png", 60],
    ["Firestore", "https://img.icons8.com/?size=160&id=9AHxUOg7E9q2&format=png", 85]
];

const content = {
  es:{
      tittle: "Bases de datos"
  },
  en:{
      tittle: "Databases"
  },
  de:{
      tittle: "Datenbanken"
  },
}

const DatabaseStack = () => {
  const {language} = useLanguage()

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: '10px', 
      focusOnSelect: true
  };

  return (
    <>
      <p id="databasesStack" className='StackTittle'>{content[language].tittle}</p>
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

export default DatabaseStack
