import React from "react";
import PauseIcon from "../assets/PauseIcon";
import ResumeBtn from "./ResumeBtn";
import { useTimeContext } from "../contexts/TimerContext";

interface PauseScreenProps {
  onClick: () => void;
}

const PauseScreen: React.FC<PauseScreenProps> = ({ onClick }) => {
  const { remainingTime } = useTimeContext();
  return (
    <div className="main-pause-page">
      <div className="pause-screen-content">
        <PauseIcon />
        <h2>Pause & breath</h2>
        <div>{remainingTime}</div>

        <ResumeBtn onClick={onClick} />
      </div>
    </div>
  );
};

export default PauseScreen;
