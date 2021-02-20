import './Header.css';

import burgerIcon from '../../images/burger.png';

function Header() {
    return (
        <header className="header">
            <img className="header__image" src={burgerIcon} alt="select" />
        </header>
    );
};

export default Header;