import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import './Break.css';

function Break({ changeTime, breakTime }) {
    return (
        <div className="Break">
            <h3 className="label">Break</h3>
            <div className="control">
                <button className="btn" onClick={() => changeTime(-1, "break")}><FaMinusCircle /></button>
                <h3>{breakTime}</h3>
                <button className="btn" onClick={() => changeTime(1, "break")}><FaPlusCircle /></button>
            </div>
        </div>
    );
}

export default Break;