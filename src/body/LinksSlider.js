import Slider from "react-slick";
import Image from "../modal/Image";
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
      <Image key={item.id} link={item.link} title={item.title} />
  );
  return (
      <Slider {...settings}>
          {contentItems}
      </Slider>
  );
}

export default LinksSlider;