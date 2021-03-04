import './MakerRow.css';
import Lesson from '../Lesson/Lesson';
import HorizontalScroll from 'react-scroll-horizontal';

function MakerRow({ date, day, addLesson }) {

    function handleAddButton() {
        console.log(date);
        addLesson(date);
    }

    return (
        <div className="maker__row">
            <div className="maker__time">
                <p className="maker__date">{date}</p>
                <p className="maker__day">{day}</p>
            </div>
            <div className="lessons">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <button className="maker__add" onClick={handleAddButton}>Добавить урок</button>
            </div>
        </div>
    );
}

export default MakerRow;