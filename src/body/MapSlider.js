import Slider from "react-slick";
import ModalImage from "../modal/ModalImage";
import { Lightbox } from "react-modal-image";
import React, { useState } from 'react';

function Map(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* <ModalImage
                small={props.link}
                large={props.link}
                alt={props.title}
                onClick={()=>console.log(123)}
            /> */}
            <img src={props.link} onClick={() => {setIsOpen(!isOpen); console.log('clicked')}}></img>
            {
                isOpen ?
                    <ModalImage>
                        <Lightbox
                            medium={props.link}
                            large={props.link}
                            alt={props.title}
                            onClose={() => setIsOpen(!isOpen)}
                        />
                    </ModalImage>
                    
                : null    
            }
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
        autoplay: false
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