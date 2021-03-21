import './footer.css';
import lines from './opodvor-lines.svg';
import decore from './footer-decor.svg';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__lines" src={lines} alt='opodvor-lines'></img>
            <div>info content</div>
            <img className="footer__decore" src={decore} alt='opodvor-decore'></img>

        </footer>
    );
}

export default Footer;