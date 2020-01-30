import React, { useState } from "react";
import Chart from "./ChartComponent";
import CurrentTemp from "./CurrentTempModule";
import Weather from "./WeeklyWeatherModule";
import Btn1 from "./Button1";
import Btn2 from "./Button2";
import NavBar from "./Nav";
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
