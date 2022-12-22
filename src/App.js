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

  return (
    <div>
      <Break />
      <Session />
      <Timer />
    </div>
  );
}

export default App;
