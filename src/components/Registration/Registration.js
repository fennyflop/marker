import './Registration.css';

import registrationIcon from '../../images/avatar.png';
import padlockIcon from '../../images/padlock.png';
import checkMark from '../../images/checkmark.png';
import errorIcon from '../../images/error.png';
import peak from '../../images/peak.png';
import { useEffect, useState } from 'react';

function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordState, setPasswordState] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    function handleEmail(evt) {
        setEmail(evt.target.value);
        setIsEmailValid(evt.target.validity.valid);
    };

    function handlePassword(evt) {
        setPassword(evt.target.value);
        setIsPasswordValid(evt.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ? true : false);
    };

    function peakPassword() {
        setPasswordState(!passwordState);
    }

    useEffect(() => {
        console.log(email, password);
        console.log(isEmailValid, isPasswordValid);
    }, [email, password, isEmailValid, isPasswordValid])

    return (
        <section className="registration">
            <form className="registration__form" noValidate>
                <h1 className="registration__title">
                    Зарегистрируйтесь.
        </h1>
                <div className="registration__item">
                    <img className="registration__icon" src={registrationIcon} alt="icon" />
                    <input className="registration__input" placeholder="Электронная почта" type="email" required onChange={handleEmail} />
                    <div className="registration__side">
                        <img className="registration__tool" src={isEmailValid ? checkMark : errorIcon} alt="success" />
                    </div>
                </div>
                <div className="registration__item">
                    <img className="registration__icon" src={padlockIcon} alt="icon" />
                    <input className="registration__input" placeholder="Пароль" type={passwordState ? 'password' : 'text'} required onChange={handlePassword} />
                    <div className="registration__side">
                        <img className="registration__tool" src={peak} alt="peak" onClick={peakPassword} />
                        <img className="registration__tool" src={isPasswordValid ? checkMark : errorIcon} alt="success" />
                    </div>
                </div>
                <p className={`registration__advice ${isPasswordValid ? 'registration__advice-hidden' : ''}`}></p>
                <button className="registration__submit" type="submit" disabled={!(isPasswordValid && isEmailValid)}>Зарегистрироваться</button>
                <p className="registration__subtext">Есть аккаунт? Вход</p>
            </form>
        </section>
    );
};

export default Registration;