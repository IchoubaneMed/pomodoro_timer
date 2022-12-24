function Break({changeTime, breakTime}) {
    return(
        <div>
            <h3 className="label">Break</h3>
            <button className="btn" onClick={() => changeTime(-1, "break")}>decrease</button>
            <h3>{breakTime}</h3>
            <button className="btn" onClick={() => changeTime(1, "break")}>Increase</button>
        </div>
    );
}

export default Break;