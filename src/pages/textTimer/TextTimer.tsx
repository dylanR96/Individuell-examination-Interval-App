import { useEffect, useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import "./textTimer.css";
import { numberToWords } from "../../utilities/NumberToWords";
import PauseScreen from "../../components/PauseScreen";
import TimesUp from "../../components/TimesUp";

const TextTimer = () => {
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

  const timeText = (minutes: number, seconds: number) => {
    const minuteWord = numberToWords(minutes);
    const secondWord = numberToWords(seconds);
    const minuteText = minuteWord + (minutes === 1 ? " MINUTE" : " MINUTES");
    const secondsText = secondWord + (seconds === 1 ? " SECOND" : " SECONDS");
    return `${minuteText} AND ${secondsText}`;
  };

  const [minutes, seconds] = remainingTime.split(":").map(Number);
  const timeTextResult = timeText(minutes, seconds);

  return (
    <>
      {" "}
      {isTimerComplete ? (
        <TimesUp />
      ) : !paused ? (
        <div className="main-textTimer">
          <div className="main-nav">
            <Menu />
          </div>
          <div className="page-content-textTimer">
            <div className="main__remaining-textTime">{timeTextResult}</div>
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

export default TextTimer;
