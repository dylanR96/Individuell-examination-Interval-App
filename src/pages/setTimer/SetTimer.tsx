import { useState } from "react";
import Menu from "../../components/Menu";
import "./setTimer.css";
import { useTimeContext } from "../../contexts/TimerContext";
import { useNavigate } from "@tanstack/react-router";
import AnalogTimer from "../analogTimer/AnalogTimer";

const SetTimer = () => {
  const [timerValue, setTimerValues] = useState(10);
  const [minuteValue, setMinutValue] = useState("minutes");
  const { setTimerValue: setContextTimerValue } = useTimeContext();
  const navigate = useNavigate();

  const updateMinuteLabel = (newValue: number) => {
    setMinutValue(newValue === 1 ? "minute" : "minutes");
  };

  const changeTimerValue = (delta: number) => {
    const newValue = timerValue + delta;
    if (newValue >= 0) {
      setTimerValues(newValue);
      updateMinuteLabel(newValue);
    }
  };

  const startTimer = () => {
    console.log("Setting context timer value to:", timerValue);
    setContextTimerValue(timerValue);
    navigate(<AnalogTimer />);
  };

  return (
    <>
      <div className="main-setTimer">
        <div className="navbar">
          <Menu />
        </div>
        <div className="page-content">
          <div className="minutes-setter">
            <button onClick={() => changeTimerValue(-1)}>&lt;</button>
            <div className="minute-display">
              <div>{timerValue}</div>
              <div>{minuteValue}</div>
            </div>
            <button onClick={() => changeTimerValue(+1)}>&gt;</button>
          </div>
          <div>
            <div className="options">
              <div className="checkboxes">
                <input type="checkbox" />
                <p>Intervals</p>
              </div>
              <div className="checkbox-titles">
                <input type="checkbox" />
                <p>5 min break/ interval</p>
              </div>
            </div>

            <button onClick={startTimer}>START TIMER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetTimer;
