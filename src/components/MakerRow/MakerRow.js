import './MakerRow.css';
import Lesson from '../Lesson/Lesson';
import HorizontalScroll from 'react-scroll-horizontal';

function MakerRow({ date, day, addLesson, lessons }) {

    // Сортируем уроки по времени

    lessons.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    function handleAddButton() {
        addLesson(date);
    }

    return (
        <div className="maker__row">
            <div className="maker__time">
                <p className="maker__date">{date}</p>
                <p className="maker__day">{day}</p>
            </div>
            <div className="lessons">
                {lessons.map((lesson, i) => {
                    return <Lesson lesson={lesson} key={i} num={i} />
                })}
                <button className="maker__add" onClick={handleAddButton}>Добавить урок</button>
            </div>
        </div>
    );
}

export default MakerRow;