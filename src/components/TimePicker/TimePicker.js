import { min } from 'moment';
import { useEffect, useState } from 'react/cjs/react.development';
import './TimePicker.css';

function TimePicker(props) {

    const [hours, setHours] = useState(9);
    const [minutes, setMinutes] = useState(40);

    function handleHours(evt) {
        const hour = Number(evt.target.value);
        if (isNaN(hour) || hour < 1) {
            setHours(1);
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

    useEffect(() => {
        console.log(hours + ':' + minutes);
    }, [hours, minutes])

    return (
        <>
            <fieldset className="time__fieldset">
                <input className="time__input" value={hours} onChange={handleHours} />
                <p className="time__divider">:</p>
                <input className="time__input" value={minutes} onChange={handleMinutes} />
            </fieldset>
        </>
    );
}

export default TimePicker;