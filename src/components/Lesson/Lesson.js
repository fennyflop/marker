import './Lesson.css';
import teacherImage from '../../images/kudaimetov.png';
import { min } from 'moment';

function Lesson({ lesson, num }) {

    const x = Math.random() * 100;

    function display(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}:${minutes.toString().length < 2 ? '0' + minutes : minutes} `;
    }

    return (
        <div className="lesson">
            <p className="lesson__room">{lesson.room || 'нет кабинета'}</p>
            <p className="lesson__time">{display(lesson.startTime)} - {display(lesson.endTime)}</p>
            <p className="lesson__class">{lesson.subject}</p>
            {/* Учитель снизу */}
            <div className="lesson__teacher">
                <img className="lesson__teacher-image" alt="teacher" src={teacherImage} />
                <p className="lesson__teacher-name">{lesson.professor}</p>
            </div>
            <div className="lesson__widget">
                <p className="lesson__theme">{lesson.topic || 'Нет темы'}</p>
                <ul className="lesson__events">
                    {lesson.events ? lesson.events.map((evt, i) => {
                        return (
                            <li className="lesson__event" key={i}>{evt.label}</li>
                        );
                    }) : <li className="lesson__event">Ничего</li>}
                </ul>
            </div>
            <div className="lesson__homework">
                <input className="lesson__checkbox" type="checkbox" id={`homework${x}`} />
                <label className="lesson__homework-message" for={`homework${x}`}>{lesson.homework || 'Нет домашней работы'}</label>
            </div>
        </div>
    );
};

export default Lesson;