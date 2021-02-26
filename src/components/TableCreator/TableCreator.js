import './TableCreator.css';
import HorizontalScroll from 'react-scroll-horizontal';
import Lesson from '../Lesson/Lesson';

function TableCreator() {
    return (
        <HorizontalScroll>
            <section className="maker">
                <div className="maker__column">
                    <p className="maker__day">Понедельник</p>
                    <div className="lessons">
                        <Lesson />
                        <Lesson />
                        <button className="maker__add">Добавить урок</button>
                    </div>
                </div>
                <div className="maker__column">
                    <p className="maker__day">Вторник</p>
                    <div className="lessons">
                        <Lesson />
                        <Lesson />
                        <Lesson />
                    </div>
                </div>
                <div className="maker__column">
                    <p className="maker__day">Среда</p>
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
                    </div>
                </div>
                <div className="maker__column">
                    <p className="maker__day">Четверг</p>
                    <div className="lessons">
                        <Lesson />
                        <Lesson />
                        <Lesson />
                        <Lesson />

                    </div>
                </div>
                <div className="maker__column">
                    <p className="maker__day">Пятница</p>
                    <div className="lessons">
                        <Lesson />
                        <Lesson />
                        <Lesson />
                        <Lesson />
                    </div>
                </div>
            </section>
        </HorizontalScroll>
    );
};

export default TableCreator;