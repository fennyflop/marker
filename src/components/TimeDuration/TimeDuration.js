import './TimeDuration.css';
import TimePicker from '../TimePicker/TimePicker';
import { useEffect, useState } from 'react/cjs/react.development';

function TimeDuration({ defaultHour, defaultMinute }) {

    const [time1, setTime1] = useState();
    const [time2, setTime2] = useState();
    const [isValid, setIsValid] = useState(false);

    // Начало времени

    function handleBlurStart(seconds) {
        setTime1(seconds);
    }

    // Конец времени

    function handleBlurEnd(seconds) {
        setTime2(seconds);
    }

    useEffect(() => {
        if (time1 < time2) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [time1, time2])

    return (
        <>
            <div className="adder__durations">
                <TimePicker isValid={isValid} handleBlur={handleBlurStart} />
                <p className="adder__divider">---</p>
                <TimePicker defaultMinute={defaultMinute} isValid={isValid} handleBlur={handleBlurEnd} />
            </div>
        </>
    );
};

export default TimeDuration;