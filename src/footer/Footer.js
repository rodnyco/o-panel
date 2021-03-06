import { useState, useEffect } from "react";
import './footer.css';
import lines from './opodvor-lines.svg';
import decore from './footer-decor.svg';
import InfoSlider from './InfoSlider';

function Footer() {
    const [declarations, setDeclarations] = useState([]);

    const getContent = () => {
        fetch("https://opodvor.ru/o-panel/api.php?entity_type=information&key="+process.env.REACT_APP_SERVER_KEY, {
            method: "GET"
        }).then(res => res.json()).then(
            (result) => {
                setDeclarations(result.data);
            }
        )
    }
    useEffect(() => {
        getContent();
        let apiInterval = setInterval(() => {
            getContent();
        }, 5000);
        return () => clearInterval(apiInterval);
    }, [])

    return (
        <footer className="footer">
            <img className="footer__lines" src={lines} alt='opodvor-lines'></img>
            <div className="footer__slider">
                <h2 className="footer__slider-title">Информация для покупателей</h2>
                <div className="declaration-slider">
                    <InfoSlider content={declarations}/>
                </div>
            </div>
            <img className="footer__decore" src={decore} alt='opodvor-decore'></img>

        </footer>
    );
}

export default Footer;