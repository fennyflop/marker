import './TableCreator.css';
import LessonAdderPopup from '../LessonAdderPopup/LessonAdderPopup';
import { Route, Switch } from 'react-router-dom';
import Lesson from '../Lesson/Lesson';
import MakerRow from '../MakerRow/MakerRow';

function TableCreator() {
    return (
        <>
            <section className="outer-maker">
                <section className="maker">
                    <MakerRow date="27.02" day="Вторник" />
                    <MakerRow date="27.02" day="Вторник" />
                    <MakerRow date="27.02" day="Вторник" />
                    <MakerRow date="27.02" day="Вторник" />
                    <MakerRow date="27.02" day="Вторник" />
                </section >
            </section>
            <Route path="/timetable/create">
                <LessonAdderPopup />
            </Route>
        </>
    );
};

export default TableCreator;