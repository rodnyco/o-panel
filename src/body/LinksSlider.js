import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Banner(props) {
  return (
      <div>
          <img src={props.link} alt={props.title}></img>
      </div>
  );
}

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
      <Banner key={item.id} link={item.link} title={item.title}/>
  );
  return (
      <Slider {...settings}>
          {contentItems}
      </Slider>
  );
}

export default LinksSlider;