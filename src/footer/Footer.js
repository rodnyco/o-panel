import './footer.css';
import lines from './opodvor-lines.svg';
import decore from './footer-decor.svg';
import InfoSlider from './InfoSlider';

function Footer() {
    const declarations = [
        {
            id: 0,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 1,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 2,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 3,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 4,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 5,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 6,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
        {
            id: 7,
            img: 'https://opodvor.ru/upload/o-panel/declaration.jpg',
            desc: 'Правила пожарной безопасности'
        },
    ]
    return (
        <footer className="footer">
            <img className="footer__lines" src={lines} alt='opodvor-lines'></img>
            <div className="footer__slider">
                <h2>Информация для покупателей</h2>
                <div className="declaration-slider">
                    <InfoSlider content={declarations}/>
                </div>
            </div>
            <img className="footer__decore" src={decore} alt='opodvor-decore'></img>

        </footer>
    );
}

export default Footer;