import './DayView.css';

export default function DayView() {
    return (
        <section className="day">
            <div className="day__progress">
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">1</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">2</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">3</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">4</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">5</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">6</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">7</p>
                    </div>
                    <div className="day__line"></div>
                </div>
                <div className="day__node">
                    <div className="day__circle">
                        <p className="day__count">8</p>
                    </div>
                    <div className="day__line"></div>
                </div>
            </div>
        </section>
    );
}