import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LinksSlider(props) {
  var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

  const content = props.content;
  const contentItems = content.map((item) => 
      <img key={item.id} alt={item.desc} src={item.link} ></img>
  );
  return (
      <Slider {...settings}>
          {contentItems}
      </Slider>
  );
}

export default LinksSlider;