function Timer({label, minutes, seconds, play, reset}) {
    return(
        <div>
            <h3 className="label">{label}</h3>
            <h3 className="time-left">
                {
                    (minutes < 0 ? "0" + minutes : minutes)
                    + ":" +
                    (seconds < 10 ? "0" + seconds : seconds)
                }
            </h3>
            <button onClick={play}>Play/Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Timer;