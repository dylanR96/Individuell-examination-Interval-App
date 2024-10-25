import { useEffect, useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import "./digitalTimer.css";
import PauseScreen from "../../components/PauseScreen";
import TimesUp from "../../components/TimesUp";

const DigitalTimer = () => {
  const { remainingTime, setRemainingTime } = useTimeContext();
  const [paused, setPaused] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted && remainingTime !== "00:00") {
      setHasStarted(true);
    }

    if (hasStarted && remainingTime === "00:00") {
      setIsTimerComplete(true);
      setHasStarted(false);
    }
  }, [remainingTime, hasStarted]);

  const clickPause = () => {
    if (remainingTime !== "00:00") {
      setPaused((prevPaused) => !prevPaused);
    }
  };

  const clickResume = () => {
    setPaused(false);
  };

  const clickAbort = () => {
    setPaused(false);
    setHasStarted(false);
    setRemainingTime("00:00");
    setIsTimerComplete(false);
  };

  return (
    <>
      {isTimerComplete ? (
        <TimesUp />
      ) : !paused ? (
        <div className="main-digitalTimer">
          <div className="main-nav">
            <Menu />
          </div>
          <div className="page-content-digitaltimer">
            <div className="main__remaining-time">{remainingTime}</div>
            <AbortBtn onClick={clickAbort} />
            <PauseBtn onClick={clickPause} />
          </div>
        </div>
      ) : (
        <PauseScreen onClick={clickResume} />
      )}
    </>
  );
};

export default DigitalTimer;
