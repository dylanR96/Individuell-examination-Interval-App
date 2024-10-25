import { useState } from "react";
import Menu from "../../components/Menu";
import "./setTimer.css";
import { useTimeContext } from "../../contexts/TimerContext";
import { Link } from "@tanstack/react-router";

const SetTimer = () => {
  const [timerValue, setTimerValues] = useState(10);
  const [minuteValue, setMinutValue] = useState("minutes");
  const { setTimerValue: setContextTimerValue } = useTimeContext();

  const updateMinuteLabel = (newValue: number) => {
    setMinutValue(newValue === 1 ? "minute" : "minutes");
  };

  const changeTimerValue = (delta: number) => {
    const newValue = timerValue + delta;
    if (newValue >= 0 && newValue < 60 && newValue !== 0) {
      setTimerValues(newValue);
      updateMinuteLabel(newValue);
    }
  };

  const startTimer = () => {
    setContextTimerValue(timerValue);
  };

  return (
    <>
      <div className="main-setTimer">
        <div>
          <Menu />
        </div>
        <div className="page-content-setTimer">
          <div className="minutes-setter">
            <button
              className="main__minute-btns"
              onClick={() => changeTimerValue(-1)}
            >
              &lt;
            </button>
            <div className="minute-display">
              <div className="main__minutes-value">{timerValue}</div>
              <div>{minuteValue}</div>
            </div>
            <button
              className="main__minute-btns"
              onClick={() => changeTimerValue(+1)}
            >
              &gt;
            </button>
          </div>
          <div className="main__options-container">
            <div className="options">
              <div className="checkboxes-container">
                <input className="checkboxes" type="checkbox" />
                <p>Intervals</p>
              </div>
              <div className="checkbox-titles">
                <input className="checkboxes" type="checkbox" />
                <p>5 min break/ interval</p>
              </div>
            </div>
            <div className="main__btn-container">
              <Link
                className="main__start-timer-btn"
                onClick={startTimer}
                to="/templateAnalog"
              >
                START TIMER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetTimer;
