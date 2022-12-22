import './App.css';
import {useState} from 'react'

import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';

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

  // to prevent the session or break length from being <= 0 or > 60 
  const changeTime = (amount, type) => {
    if(type === "break") {
      if(breakTime > 1 && amount === -1 && !start) { 
        setBreakTime(pre => pre + amount);
      } else if(breakTime < 60 && amount === 1 && !start) {
        setBreakTime(pre => pre + amount);
      }
      return;
    } else {
      if(sessionTime > 1 && amount === -1 && !start) {
        setSessionTime(pre => pre + amount);
      } else if(sessionTime < 60 && amount === 1 && !start) {
        setSessionTime(pre => pre + amount);
      }
      return;
    }
  }

  return (
    <div>
      <Break />
      <Session />
      <Timer />
    </div>
  );
}

export default App;
