import React from "react";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import State from "./components/State";
import Calculator from "./components/Calculator";
import Time from "./components/Time";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
      <hr />
      <Counter />
      <hr />
      <State />
      <hr />
      <h3><i>(This is Calculator)</i></h3>
      <Calculator />
      <hr />
      <Time />
      <hr />
    </div>
  );
}

export default App;
