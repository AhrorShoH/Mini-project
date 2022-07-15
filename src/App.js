import React from "react";
import Main from "./components/Main";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Calculator from "./components/Calculator";
import Nav from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route index path="/" element={<Main/>} />
          <Route index path="/timer" element={<Timer/>} />
          <Route index path="/counter" element={<Counter/>} />
          <Route index path="/calculator" element={<Calculator/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
