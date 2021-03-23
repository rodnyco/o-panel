import Slider from "react-slick";

function Map(props) {
    return (
        <div>
            <img src={props.link} alt={props.title}></img>
        </div>
    );
}

function MapSlider(props) {
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
        <Map key={item.id} link={item.link} title={item.desc}/>
    );
    return (
        <Slider {...settings}>
            {contentItems}
        </Slider>
    );
}

export default MapSlider;