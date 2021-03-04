import { min } from 'moment';
import { useEffect, useState } from 'react/cjs/react.development';
import './TimePicker.css';

function TimePicker({ handleBlur, isValid }) {

    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(40);

    function handleHours(evt) {
        const hour = Number(evt.target.value);
        if (isNaN(hour) || hour < 1) {
            setHours(0);
        } else if (hour >= 24) {
            setHours(24);
        } else {
            setHours(hour)
        }
    }

    function handleMinutes(evt) {
        const minute = Number(evt.target.value);
        if (isNaN(minute) || minute < 0) {
            setMinutes(0);
        } else if (minute >= 59) {
            setMinutes(59);
        } else {
            if (minute < 10) {
                setMinutes('0' + minute)
            } else {
                setMinutes(minute);
            }
        }
    }

    function handleTime() {
        handleBlur((hours * 60 * 60) + (minutes * 60));
    }

    return (
        <>
            <fieldset className={`time__fieldset ${isValid ? '' : 'time__fieldset-invalid'}`}>
                <input className="time__input" value={hours} onChange={handleHours} onBlur={handleTime} />
                <p className="time__divider">:</p>
                <input className="time__input" value={minutes} onChange={handleMinutes} onBlur={handleTime} />
            </fieldset>
        </>
    );
}

export default TimePicker;