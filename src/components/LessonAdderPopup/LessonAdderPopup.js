import './LessonAdderPopup.css';
import Select from 'react-select';
import '../TimePicker/TimePicker';
import TimePicker from '../TimePicker/TimePicker';
import { NavLink, Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import TimeDuration from '../TimeDuration/TimeDuration';

const lessonOptions = [
    { label: 'Информатика', value: 'ict' },
    { label: 'Английский', value: 'english' },
];

const teacherOptions = [
    { label: 'Оксана Игоревна', value: 'id1' },
    { label: 'Андрей Алексеевич', value: 'id2' },
];

const classOptions = [
    { label: '8A', value: '8a' },
    { label: '8B', value: '8b' },
    { label: '8C', value: '8c' },
    { label: 'Superior', value: 'superior' }
];

const eventsList = [
    { label: 'Контрольная', value: 'examenination' },
    { label: 'Тест', value: 'test' },
    { label: 'Проверочная работа', value: 'assessment' }
]

function LessonAdderPopup({ isOpen, date, onClose }) {

    // Следить за данными.

    const [subject, setSubject] = useState();
    const [professor, setProfessor] = useState();
    const [group, setGroup] = useState();
    const [events, setEvents] = useState();
    const [topic, setTopic] = useState();
    const [room, setRoom] = useState();

    // Предмет

    function handleSubject(evt) {
        setSubject(evt); // {label: x, value: y}
    }

    // Учитель

    function handleProfessor(evt) {
        setProfessor(evt);
    }

    // Группы

    function handleGroups(evt) {
        setGroup(evt);
    }

    // События

    function handleEvents(evt) {
        setEvents(evt);
    }

    // Тема

    function handleTopic(evt) {
        setTopic(evt.target.value);
    }

    // Кабинет

    function handleRoom(evt) {
        setRoom(evt.target.value);
    }

    // Cледить за выбранным временем.

    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [isValid, setIsValid] = useState(false);

    function handleBlurStart(seconds) {
        setStartTime(seconds);
    }

    function handleBlurEnd(seconds) {
        setEndTime(seconds);
    }

    useEffect(() => {
        if (startTime < endTime) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [startTime, endTime])

    // Назад по истории

    const history = useHistory();

    function handleHistoryBack() {
        history.goBack();
    }

    // Выход

    function handleLeave() {
        let x = window.confirm('Вы уверены? Данные не сохранятся.');
        if (x) {
            onClose()
        }
    };

    return (
        <section className={`adder ${isOpen ? 'adder__open' : ''}`}>
            <div className="adder__container">
                {/* Здесь мы контролируем название слайда. */}
                <header className="adder__header">
                    <Route path="/timetable/create/lesson/subject">
                        <h2 className="adder__title">Выберите предмет<span className="adder__required">*</span></h2>
                    </Route>
                    <Route path="/timetable/create/lesson/time">
                        <h2 className="adder__title">Выберите подходящее время<span className="adder__required">*</span></h2>
                    </Route>
                    <Route path="/timetable/create/lesson/professor">
                        <h2 className="adder__title">Педагог<span className="adder__required">*</span></h2>
                    </Route>
                    <Route path="/timetable/create/lesson/class">
                        <h2 className="adder__title">Участвующий класс<span className="adder__required">*</span></h2>
                    </Route>
                    <Route path="/timetable/create/lesson/topic">
                        <h2 className="adder__title">Тема<span className="adder__required">*</span></h2>
                    </Route>
                    <Route path="/timetable/create/lesson/room">
                        <h2 className="adder__title">Номер кабинета</h2>
                    </Route>
                    <Route path="/timetable/create/lesson/homework">
                        <h2 className="adder__title">Домашнее задание</h2>
                    </Route>
                    <Route path="/timetable/create/lesson/events">
                        <h2 className="adder__title">События на уроке</h2>
                    </Route>
                    {/* Тут мы контролируем progess bar и их навигацию */}
                    <Switch>
                        <div className="adder__navlinks">
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/subject" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/time" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/professor" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/class" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/room" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/events" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/topic" className="adder__navlink"></NavLink>
                            <NavLink activeClassName="adder__navlink-selected" to="/timetable/create/lesson/homework" className="adder__navlink"></NavLink>
                        </div>
                    </Switch>
                </header>
                <Switch>
                    <form className="adder__form">
                        <Route path="/timetable/create/lesson/subject">
                            <Select onChange={handleSubject} className="adder__selector" placeholder="Выбрать предмет" options={lessonOptions} noOptionsMessage={() => 'Предметов не найдено'} />
                            <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                            <NavLink to="/timetable/create/lesson/time" className="adder__next">Продолжить</NavLink>
                        </Route>
                        <Route path="/timetable/create/lesson/time">
                            <div className="adder__durations">
                                <TimePicker isValid={isValid} handleBlur={handleBlurStart} />
                                <p className="adder__divider">---</p>
                                <TimePicker isValid={isValid} handleBlur={handleBlurEnd} />
                            </div>
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/professor" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        <Route path="/timetable/create/lesson/professor">
                            <Select onChange={handleProfessor} className="adder__selector" placeholder="Выбрать учителя" options={teacherOptions} noOptionsMessage={() => 'Учителей не найдено'} />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/class" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        {/* Можно лучше */}
                        <Route path="/timetable/create/lesson/class">
                            <Select
                                defaultValue={group}
                                onChange={handleGroups}
                                className="adder__selector"
                                placeholder="Выберите группу"
                                isMulti
                                name="colors"
                                options={classOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                noOptionsMessage={() => 'Классов не найдено'}
                            />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/room" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        <Route path="/timetable/create/lesson/room">
                            <input onBlur={handleRoom} className="adder__input" type="text" placeholder="Номер кабинета" />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/events" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        <Route path="/timetable/create/lesson/events">
                            <Select
                                defaultValue={events}
                                onChange={handleEvents}
                                placeholder="Выбрать события"
                                isMulti
                                name="colors"
                                options={eventsList}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/topic" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        <Route path="/timetable/create/lesson/topic">
                            <textarea onBlur={handleTopic} className="adder__textarea" type="text" placeholder="Тема занятия" />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <NavLink to="/timetable/create/lesson/homework" className="adder__next">Продолжить</NavLink>
                            </div>
                        </Route>
                        <Route path="/timetable/create/lesson/homework">
                            <textarea onBlur={handleTopic} className="adder__textarea" type="text" placeholder="Домашняя работа" />
                            <div className="adder__buttons">
                                <a className="adder__leave" onClick={handleLeave}>Выйти</a>
                                <a className="adder__back" onClick={handleHistoryBack}>Назад</a>
                                <button type="submit" className="adder__next">Создать урок</button>
                            </div>
                        </Route>
                    </form>
                </Switch>
            </div>
        </section>
    );
};

export default LessonAdderPopup;