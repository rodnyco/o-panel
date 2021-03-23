import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LinksSlider(props) {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const items = props.content;
  return (
    <Slider {...settings}>
      <div>
        <div className="links-slider__item">
          <h2>{items[0].title}</h2>
          <div className="links-slider__item content">
            <img src={items[0].qrLink} alt='link'></img>
            <p>{items[0].description}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="links-slider__item">
          <h2>{items[0].title}</h2>
          <div className="links-slider__item content">
            <img src={items[0].qrLink} alt='link'></img>
            <p>{items[0].description}</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}