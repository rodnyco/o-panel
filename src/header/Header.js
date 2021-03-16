import logo from './logo.svg';
import logoDecor from './logo-decor.svg';
import './header.css';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt='logo'></img>
            <img className="header__logo-decore" src={logoDecor} alt='logo decore'></img>
        </header>
    );
}

export default Header;