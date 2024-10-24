import { useState } from "react";
import PauseIcon from "../../assets/PauseIcon";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import ResumeBtn from "../../components/ResumeBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import "./digitalTimer.css";

const DigitalTimer = () => {
  const { remainingTime } = useTimeContext();
  const [paused, setPaused] = useState(false);

  const clickPause = () => {
    if (remainingTime !== "00:00") {
      setPaused((prevPaused) => !prevPaused);
    }
  };

  const clickResume = () => {
    setPaused(false);
  };

  return (
    <>
      {!paused ? (
        <div className="main-digitalTimer">
          <div className="main-nav">
            <Menu />
          </div>
          <div className="page-content-digitaltimer">
            <div className="main__remaining-time">{remainingTime}</div>
            <AbortBtn />
            <PauseBtn onClick={clickPause} />
          </div>
        </div>
      ) : (
        <div className="main-pause-page">
          <div className="pause-screen-content">
            <PauseIcon />
            <h2>Pause & breath</h2>
            <div>{remainingTime}</div>

            <ResumeBtn onClick={clickResume} />
          </div>
        </div>
      )}
    </>
  );
};

export default DigitalTimer;
