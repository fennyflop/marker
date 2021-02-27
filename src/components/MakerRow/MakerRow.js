import './MakerRow.css';
import Lesson from '../Lesson/Lesson';
import { NavLink } from 'react-router-dom';

function MakerRow({ date, day }) {
    return (
        <div className="maker__row">
            <div className="maker__time">
                <p className="maker__date">{date}</p>
                <p className="maker__day">{day}</p>
            </div>
            <div className="lessons">
                <Lesson />
                <Lesson />
                <NavLink className="maker__add" to="/timetable/create">Добавить урок</NavLink>
            </div>
        </div>
    );
}

export default MakerRow;