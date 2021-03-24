import Slider from "react-slick";
import Image from "../modal/Image";

function MapSlider(props) {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      };

    const content = props.content;
    const contentItems = content.map((item) => 
        <Image key={item.id} link={item.link} title={item.desc}/>
    );
    return (
        <Slider {...settings}>
            {contentItems}
        </Slider>
    );
}

export default MapSlider;