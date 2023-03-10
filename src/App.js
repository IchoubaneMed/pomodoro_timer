import './App.css';
import { useState, useEffect } from 'react'

import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import Footer from './components/Footer';

import { RxLapTimer } from 'react-icons/rx';



function App() {

  // decalre variables using the useState hook
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [start, setStart] = useState(false);
  const [onSession, setOnSession] = useState(true);
  const [onBreak, setOnBreak] = useState(false);
  const [label, setLabel] = useState("Session");

  // to play sound 
  const playSound = () => {
    const audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
  }

  // to update the minutes and seconds with the sessionTime value
  useEffect(() => {
    if (onSession) {
      setMinutes(sessionTime * 60 / 60);
      setSeconds(sessionTime * 60 % 60);
    }
  }, [onSession, sessionTime])

  // to update the minutes and seconds with the breakTime value
  useEffect(() => {
    if (onBreak) {
      setMinutes(breakTime * 60 / 60);
      setSeconds(breakTime * 60 % 60);
    }
  }, [onBreak, breakTime]);

  // to switch from the session counter to the break counter
  useEffect(() => {
    if (start && onSession && minutes === 0 && seconds === 0) {
      playSound();
      setMinutes(breakTime * 60 / 60);
      setSeconds(breakTime * 60 % 60);
      setOnSession(false);
      setOnBreak(true);
      setLabel("Break");
    }
  }, [start, onSession, minutes, seconds, breakTime])

  // to switch from the break counter to the session counter
  useEffect(() => {
    if (start && onBreak && minutes === 0 && seconds === 0) {
      playSound();
      setMinutes(sessionTime * 60 / 60);
      setSeconds(sessionTime * 60 % 60);
      setOnSession(true);
      setOnBreak(false);
      setLabel("Session")
    }
  }, [start, onBreak, minutes, seconds, sessionTime])

  // to decrese the timer if the session is on
  useEffect(() => {
    if (start && onSession && minutes > 0 && seconds === 0) {
      const interval = setInterval(() => {
        setSeconds(59);
        setMinutes(pre => pre - 1);
      }, 1000)
      return () => clearInterval(interval);
    }

  }, [start, minutes, seconds, onSession]);

  useEffect(() => {
    if (start && onSession && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(pre => pre - 1);
      }, 1000)
      return () => clearInterval(interval);
    }

  }, [start, onSession, minutes, seconds])

  // to prevent the session or break length from being <= 0 or > 60 
  const changeTime = (amount, type) => {
    if (type === "break") {
      if (breakTime > 1 && amount === -1 && !start) {
        setBreakTime(pre => pre + amount);
      } else if (breakTime < 60 && amount === 1 && !start) {
        setBreakTime(pre => pre + amount);
      }
      return;
    } else {
      if (sessionTime > 1 && amount === -1 && !start) {
        setSessionTime(pre => pre + amount);
      } else if (sessionTime < 60 && amount === 1 && !start) {
        setSessionTime(pre => pre + amount);
      }
      return;
    }
  }


  // to decrease the timer if the break is on
  useEffect(() => {
    if (start && onBreak && minutes > 0 && seconds === 0) {
      const interval = setInterval(() => {
        setSeconds(59);
        setMinutes(pre => pre - 1);
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [start, minutes, seconds, onBreak])

  useEffect(() => {
    if (start && onBreak && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(pre => pre - 1);
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [start, onBreak, minutes, seconds])

  // to enable and disable the start variable
  const play = () => {
    start ? setStart(false) : setStart(true);
  }

  // to stop the timer from running
  const reset = () => {
    setBreakTime(5);
    setSessionTime(25);
    setMinutes(25);
    setSeconds(0);
    setLabel("Session");
    setStart(false);
    setOnSession(true);
    setOnBreak(false);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div className="App">
    <div className="container">
      <div className="logo">
          <RxLapTimer className="icon" />
          <h1>Pomodoro Timer</h1>
      </div>
      <Break changeTime={changeTime} breakTime={breakTime} />
      <Session changeTime={changeTime} sessionTime={sessionTime} />
      <Timer label={label} minutes={minutes} seconds={seconds} play={play} reset={reset} start={start}/>
    </div>
    <Footer />
    <audio src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3" id="beep"/>
    </div>
  );
}

export default App;
