import './TableCreator.css';
import LessonAdderPopup from '../LessonAdderPopup/LessonAdderPopup';
import { Route, Switch } from 'react-router-dom';
import Lesson from '../Lesson/Lesson';
import MakerRow from '../MakerRow/MakerRow';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';

function TableCreator() {

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

    return (
        <>
            {/* <section className="outer-maker"> */}
            <section className="maker">
                <MakerRow addLesson={handleAdderPopup} date="27.02" day="Вторник" />
                <MakerRow addLesson={handleAdderPopup} date="28.02" day="Вторник" />
                <MakerRow addLesson={handleAdderPopup} date="29.02" day="Вторник" />
                <MakerRow addLesson={handleAdderPopup} date="30.02" day="Вторник" />
                <MakerRow addLesson={handleAdderPopup} date="31.02" day="Вторник" />
            </section >
            {/* </section> */}
            <LessonAdderPopup date={selectedDate} isOpen={isAdderPopupOpen} onClose={closeAdderPopup} />
        </>
    );
};

export default TableCreator;