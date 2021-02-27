import './LessonAdderPopup.css';
import Select from 'react-select';
import '../TimePicker/TimePicker';
import TimePicker from '../TimePicker/TimePicker';
import { Route, Switch } from 'react-router-dom';

const lessonOptions = [
    { label: 'Информатика', value: 'ict' },
    { label: 'Английский', value: 'english' },
];

const teacherOptions = [
    { label: 'Оксана Игоревна', value: 'id1' },
    { label: 'Андрей Алексеевич', value: 'id2' },
]

function LessonAdderPopup() {
    return (
        <section className="adder adder__open">
            <div className="adder__container">
                <header className="adder__header">
                    <h2 className="adder__title">Добавить урок</h2>
                    <p className="adder__date">27.02</p>
                    <div className="adder__progress-bar"><div className="adder__progress"></div></div>
                </header>
                <Switch>
                    <Route path="/table-maker">
                        <form className="adder__form">
                            <fieldset className="adder__fieldset">
                                <label className="adder__label">1. Выберите начало и конец урока<span className="adder__required">*</span></label>
                                <div className="adder__durations">
                                    <TimePicker />
                                    <p className="adder__divider">----</p>
                                    <TimePicker />
                                </div>
                            </fieldset>
                            <fieldset className="adder__fieldset">
                                <label className="adder__label">2. Выберите предмет<span className="adder__required">*</span></label>
                                <Select className="adder__selector" placeholder="Выбрать предмет" options={lessonOptions} noOptionsMessage={() => 'Предметов не найдено'} />
                            </fieldset>
                            <fieldset className="adder__fieldset">
                                <label className="adder__label">3. Педагог<span className="adder__required">*</span></label>
                                <Select className="adder__selector" placeholder="Выбрать педагога" options={teacherOptions} noOptionsMessage={() => 'Учителей не найдено'} />
                            </fieldset>
                            <fieldset className="adder__fieldset">
                                <label className="adder__label">4. Кабинет</label>
                                <input className="adder__input" type="text" placeholder="Номер кабинета" />
                            </fieldset>
                        </form>
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default LessonAdderPopup;