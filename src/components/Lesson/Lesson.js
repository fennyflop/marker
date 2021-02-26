import './Lesson.css';
import teacherImage from '../../images/kudaimetov.png';

function Lesson() {
    return (
        <div className="lesson">
            <p className="lesson__time">9:00 - 9:40</p>
            <p className="lesson__class">Информатика</p>
            <p className="lesson__theme">Изучение команды print в python</p>
            <div className="lesson__teacher">
                <img className="lesson__teacher-image" alt="teacher" src={teacherImage} />
                <p className="lesson__teacher-name">Денис Рамильевич</p>
            </div>
            <p className="lesson__room">236</p>
        </div>
    );
};

export default Lesson;