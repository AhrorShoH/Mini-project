import React from "react";


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
    <div className="App">
      <div>
        <h3><i>(This is StopWatch)</i></h3>
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
        <button onClick={() => setTimeOn(true)} className="buttons">Resume</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className="buttons">Reset</button>
        )}
      </div>
    </div>
  );
}

export default Timer;
