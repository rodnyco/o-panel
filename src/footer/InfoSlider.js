import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg'

function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img src={arrowLeft} 
        onClick={onClick} 
        className="slick-prev"
        style={{ ...style, display: "block", }}
      ></img>
    );
}

function RightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img src={arrowRight} 
        onClick={onClick} 
        className="slick-next"
        style={{ ...style, display: "block", }}
      ></img>
    );
}
  


function Declaration(props) {
    return (
        <div>
            <img className="declaration-slider__item" src={props.link}></img>
        </div>
    );
}

function InfoSlider(props) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />
      };

    const content = props.content;
    const contentItems = content.map((item) => 
        <Declaration key={item.id} link={item.img}/>
    );
    return (
        <Slider {...settings}>
            {contentItems}
        </Slider>
    );
}

export default InfoSlider;