import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './Session.css';

function Session({ changeTime, sessionTime }) {
    return (
        <div className="Session">
            <h3 className="label">Session</h3>
            <div className="control">
                <button className="btn" onClick={() => changeTime(-1, "session")}><FaMinusCircle /></button>
                <h3>{sessionTime}</h3>
                <button className="btn" onClick={() => changeTime(1, "session")}><FaPlusCircle /></button>
            </div>
        </div>
    );
}

export default Session;