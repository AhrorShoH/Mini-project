import React from "react";


function Time() {
    const current = new Date();
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const date = `${current.getDate()}.${
      current.getMonth() + 1
    }.${current.getFullYear()}`;
    return(
    <div>
      <h3><i>(Current Time and Today)</i></h3>
        <span id="time">
        <h2> Current time {time} <br /> Today {date} </h2>
        </span>
    </div>
    );
}
export default Time;