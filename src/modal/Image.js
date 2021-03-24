import React, { useState } from 'react';
import ModalImage from "../modal/ModalImage";
import { Lightbox } from "react-modal-image";

//props: link, title, className

function Image(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <img className={props.className} src={props.link} onClick={() => {setIsOpen(!isOpen); console.log('clicked')}}></img>
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

export default Image;