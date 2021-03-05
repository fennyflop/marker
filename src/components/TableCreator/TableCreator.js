import './TableCreator.css';
import LessonAdderPopup from '../LessonAdderPopup/LessonAdderPopup';
import { Route, Switch } from 'react-router-dom';
import Lesson from '../Lesson/Lesson';
import MakerRow from '../MakerRow/MakerRow';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';

function TableCreator() {

    const [lessons, setLessons] = useState([
        {
            room: 242,
            startTime: '34800',
            endTime: '35900',
            subject: 'Английский',
            topic: 'Modal verbs',
            professor: 'Денис Рамильевич',
            homework: 'Домашка',
            events: null,
        },
        {
            room: 236,
            startTime: '26000',
            endTime: '30000',
            subject: 'Русскийqwdqwdqwdqwdqwdqwdqwdqwdd',
            topic: '',
            professor: 'Денис Рамильевичqwdqwdqwdqwdqwdqwdqwdqd',
            homework: 'Не домашкаqwdqwdqwdqwdqwdqwdqwdqwdqw',
            events: [
                { label: "Тест", value: "test" },
                { label: "Контрольная", value: "examenination" },
                { label: "Проверочная работа", value: "assessment" },
            ]
        }
    ]);
    const history = useHistory();

    const [isAdderPopupOpen, setIsAdderPopupOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(0.0);

    function handleAdderPopup(date) {
        setSelectedDate(date);
        setIsAdderPopupOpen(true);
        history.push('/timetable/create/lesson/subject');
    }

    function closeAdderPopup() {
        setIsAdderPopupOpen(false);
        history.push('/timetable');
    }

    function handleAddLesson(lesson) {
        console.log(lesson);
        setLessons([...lessons, lesson]);
    }

    return (
        <>
            {/* <section className="outer-maker"> */}
            <section className="maker">
                <MakerRow lessons={lessons} addLesson={handleAdderPopup} date="27.02" day="Вторник" />
                <MakerRow lessons={lessons} addLesson={handleAdderPopup} date="28.02" day="Вторник" />
                <MakerRow lessons={lessons} addLesson={handleAdderPopup} date="29.02" day="Вторник" />
                <MakerRow lessons={lessons} addLesson={handleAdderPopup} date="30.02" day="Вторник" />
                <MakerRow lessons={lessons} addLesson={handleAdderPopup} date="31.02" day="Вторник" />
            </section >
            {/* </section> */}
            <LessonAdderPopup addLesson={handleAddLesson} date={selectedDate} isOpen={isAdderPopupOpen} onClose={closeAdderPopup} />
        </>
    );
};

export default TableCreator;