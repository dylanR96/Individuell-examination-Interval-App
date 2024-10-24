import { useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import ResumeBtn from "../../components/ResumeBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import PauseIcon from "../../assets/PauseIcon";
import "./textTimer.css";
import { numberToWords } from "../../utilities/NumberToWords";
const TextTimer = () => {
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

  const timeText = (minutes: number, seconds: number) => {
    const minuteText =
      numberToWords(minutes) + (minutes === 1 ? " MINUTE" : " MINUTES");
    const secondsText =
      numberToWords(seconds) + (seconds === 1 ? " SECOND" : " SECONDS");
    return `${minuteText} AND ${secondsText}`;
  };

  const [minutes, seconds] = remainingTime.split(":").map(Number);
  const timeTextss = timeText(minutes, seconds);

  return (
    <>
      {!paused ? (
        <div className="main-textTimer">
          <div className="main-nav">
            <Menu />
          </div>
          <div className="page-content-textTimer ">
            <div className="main__remaining-textTime">{timeTextss}</div>
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

export default TextTimer;
