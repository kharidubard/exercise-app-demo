import React from 'react';
import { NavLink } from "react-router-dom"

export default function DurationExercise() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);
  const [laps, setLaps] = React.useState([]);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div>
      <div>
        <h3>Timer:</h3>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <p>Duration exercise</p>

      {!timerOn && (
        <button onClick={() => setTimeOn(true)}>Start</button>
      )}
      {timerOn && (
        <button onClick={() => setTimeOn(false)}>Stop</button>
      )}

      <button onClick={() => {setTime(0); setTimeOn(false); setLaps([])}}>Reset</button>

      <button onClick={recordLap}>Lap</button>
      <button>
            <NavLink to="/">Return</NavLink>
      </button>
      <div>
        <h4>Laps:</h4>
        {laps.map((lapTime, index) => (
          <div key={index}>
            <span>Lap {index + 1}: </span>
            <span>{("0" + Math.floor((lapTime / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((lapTime / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((lapTime / 10) % 100)).slice(-2)}</span>
          </div>
        ))}
      </div>

      
    </div>
  );
}
// made timer with help from this video: https://www.youtube.com/watch?v=sSWGdj8a5Fs