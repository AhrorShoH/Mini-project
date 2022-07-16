import React from "react";
import "./main.css";

function Timer() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
    else {
      clearInterval(interval)
    }

    return() => clearInterval(interval)

  }, [timerOn]);

  return (
    <div className="timer">
      <h2 id="text">Online Timer</h2>
      <div id="numbers">
        <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </h2>
      </div>
      <div>
        {!timerOn &&  time === 0 && (
          <button onClick={() => setTimeOn(true)} className="buttons">Start</button>
        )}
        {timerOn && (
        <button onClick={() => setTimeOn(false)} className="buttons">Stop</button>
        )}
        {!timerOn && time !== 0 && (
        <button onClick={() => setTimeOn(true)} className="buttons3">Resume</button>
        )} <br/>
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className="buttons4">Reset</button>
        )}
      </div>
      <h3>Skills: JavaScript, React.js</h3>
      <h4>Tools: VS Code, Git Bash</h4>
    </div>
  );
}

export default Timer;
