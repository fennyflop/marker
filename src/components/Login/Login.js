import './Login.css';

import loginIcon from '../../images/avatar.png';
import padlockIcon from '../../images/padlock.png';

function Login() {
    return (
        <section className="login">
            <form className="login__form">
                {/* <img className="login__image" src={icon} alt="icon" /> */}
                <h1 className="login__title">
                    Войдите в свою учётную запись.
            </h1>
                <div className="login__item">
                    <img className="login__icon" src={loginIcon} alt="icon" />
                    <input className="login__input" placeholder="Электронная почта" type="text" />
                </div>
                <div className="login__item">
                    <img className="login__icon" src={padlockIcon} alt="icon" />
                    <input className="login__input" placeholder="Пароль" type="password" />
                </div>
                <button className="login__submit" type="submit">Login</button>
                <p className="login__subtext">Нет аккаунта? Регистрация</p>
            </form>
        </section>
    );
};

export default Login;