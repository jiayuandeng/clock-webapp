import React from "react";
import "./App.css";
import { Clock } from "./components/clock";

function App() {
  return (
    <div className="app">
      <header className="app-container">
        <Clock />
      </header>
    </div>
  );
}

export default App;
