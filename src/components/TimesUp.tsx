import React from "react";
import TimerIcon from "../assets/TimerIcon";
import { Link } from "@tanstack/react-router";

const TimesUp: React.FC = () => {
  return (
    <div className="main__times-up">
      <div className="times-up-screen-content">
        <TimerIcon />
        <h2>Times up!</h2>

        <Link className="main__times-up-btn" to="/setTimer">
          SET NEW TIMER
        </Link>
      </div>
    </div>
  );
};

export default TimesUp;
