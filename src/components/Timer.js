import { BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';
import { MdOutlineReplayCircleFilled} from 'react-icons/md';

import './Timer.css';

function Timer({label, minutes, seconds, play, reset, start}) {
    return(
        <div className="Timer">
            <h3 className="label">{label}</h3>
            <h3 className="time-left">
                {
                    (minutes < 0 ? "0" + minutes : minutes)
                    + ":" +
                    (seconds < 10 ? "0" + seconds : seconds)
                }
            </h3>
            <button className="btn" onClick={play}>
                {!start ? <BsFillPlayCircleFill /> : <BsFillPauseCircleFill />}
            </button>
            <button className="btn" style={{fontSize: "30px",}} onClick={reset}><MdOutlineReplayCircleFilled /></button>
        </div>
    );
}

export default Timer;