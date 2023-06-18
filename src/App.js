import './App.css';
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import React from "react";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/phaser_project" element={<Home/>} />
          <Route path="/intro" element={<Intro/>} />
      </Routes>
    </div>
  );
}

export default App;
