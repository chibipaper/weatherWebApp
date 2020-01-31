import React, { useState } from "react";
import Chart from "./components/ChartComponent";
import CurrentTemp from "./CurrentTempModule";
import Weather from "./WeeklyWeatherModule";
import Btn1 from "./components/Button1";
import Btn2 from "./components/Button2";
import NavBar from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Chart />
      <CurrentTemp />
      <Weather />
      <Btn1 />
      <Btn2 />
    </div>
  );
}

export default App;
