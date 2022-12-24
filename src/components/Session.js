function Session({changeTime, sessionTime}) {
    return(
        <div>
            <h3 className="label">Session</h3>
            <button className="btn" onClick={() => changeTime(-1, "session")}>decrease</button>
            <h3>{sessionTime}</h3>
            <button className="btn" onClick={() => changeTime(1, "session")}>Increase</button>
        </div>
    );
}

export default Session;