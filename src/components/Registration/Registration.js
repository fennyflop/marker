import './Registration.css';

import registrationIcon from '../../images/avatar.png';
import padlockIcon from '../../images/padlock.png';
import checkMark from '../../images/checkmark.png';
import errorIcon from '../../images/error.png';
import peak from '../../images/peak.png';
import peakCrossed from '../../images/peak-crossed.png';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordState, setPasswordState] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    function peakPassword() {
        setPasswordState(!passwordState);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        setIsEmailValid(evt.target.elements[0].validity.valid);
        setIsPasswordValid(evt.target.elements[1].value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ? true : false);
        if (isEmailValid && isPasswordValid) {
            setEmail(evt.target.elements[0].value);
            setPassword(evt.target.elements[1].value);
        };
    };

    useEffect(() => {
        console.log(email, password);
        console.log(isEmailValid, isPasswordValid);
    }, [email, password, isEmailValid, isPasswordValid])

    return (
        <section className="registration">
            <form className="registration__form" noValidate onSubmit={handleSubmit}>
                <h1 className="registration__title">
                    Пройдите регистрацию.
        </h1>
                <div className="registration__item">
                    <img className="registration__icon" src={registrationIcon} alt="icon" />
                    <input className="registration__input" placeholder="Электронная почта" type="email" required />
                </div>
                <p className={`registration__advice registration__advice-email ${isEmailValid ? 'registration__advice-hidden' : ''}`}></p>
                <div className="registration__item">
                    <img className="registration__icon" src={padlockIcon} alt="icon" />
                    <input className="registration__input" placeholder="Пароль" type={passwordState ? 'password' : 'text'} required />
                    <img className="registration__peak" src={!passwordState ? peak : peakCrossed} alt="peak" onClick={peakPassword} />
                </div>
                <p className={`registration__advice registration__advice-password ${isPasswordValid ? 'registration__advice-hidden' : ''}`}></p>
                <button className="registration__submit" type="submit" disabled={false}>Зарегистрироваться</button>
                <p className="registration__subtext">Есть аккаунт? <NavLink exact to="/signin" className="login__link">Вход</NavLink></p>
            </form>
        </section>
    );
};

export default Registration;

// !(isPasswordValid && isEmailValid)