import React, { useEffect, useState } from "react";
import { TimeContainer, Hour, Minute, Second, Ampm } from "./elements";
import "./Clock.css";

interface ClockDate {
  hour: string;
  hour12: string;
  ampm: string;
  minute: string;
  second: string;
  year: string;
  month: string;
  day: string;
  weekday: string;
}

export function Clock() {
  const [state, setState] = useState(getClockDate());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setState(getClockDate());
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <TimeContainer>
        <Hour>{state.hour}</Hour>:<Minute>{state.minute}</Minute>:
        <Second>{state.second}</Second>&nbsp;<Ampm>{state.ampm}</Ampm>
      </TimeContainer>
    </div>
  );
}

function getClockDate(): ClockDate {
  const date = new Date();
  const hour = date.getHours();
  return {
    hour: `${hour}`,
    hour12: `${hour % 12}`,
    ampm: hour >= 12 ? "PM" : "AM",
    minute: `0${date.getMinutes()}`.slice(-2),
    second: `0${date.getSeconds()}`.slice(-2),
    year: date.toLocaleDateString(undefined, { year: "numeric" }),
    month: date.toLocaleDateString(undefined, { month: "short" }),
    day: date.toLocaleDateString(undefined, { day: "numeric" }),
    weekday: date.toLocaleDateString(undefined, { weekday: "long" }),
  };
}
