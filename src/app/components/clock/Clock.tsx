import React, { useEffect, useState, useRef } from "react";
import "./Clock.css";

export function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeString(getTimeString());
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <div className="clock">{timeString}</div>;
}

function getTimeString() {
  const timeString = new Date().toLocaleTimeString();
  return timeString;
}
