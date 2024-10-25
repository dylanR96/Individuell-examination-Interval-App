import { useEffect, useState, useRef } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import "./analogTimer.css";
import { motion } from "framer-motion";
import PauseBtn from "../../components/PauseBtn";
import TimesUp from "../../components/TimesUp";
import PauseScreen from "../../components/PauseScreen";

const AnalogTimer: React.FC = () => {
  const { remainingTime, setRemainingTime } = useTimeContext();
  const [hasStarted, setHasStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  const minutesPointer = useRef<HTMLDivElement | null>(null);
  const secondsPointer = useRef<HTMLDivElement | null>(null);

  const highestValue = 60;

  useEffect(() => {
    const [minutes, seconds] = remainingTime.split(":").map(Number);

    const minutesRemaining = highestValue - minutes;
    const secondsRemaining = highestValue - seconds;

    if (minutesPointer.current) {
      minutesPointer.current.style.transform = `rotate(${minutesRemaining * 6}deg)`;
    }
    if (secondsPointer.current) {
      secondsPointer.current.style.transform = `rotate(${secondsRemaining * 6}deg)`;
    }

    if (!hasStarted && remainingTime !== "00:00") {
      setHasStarted(true);
    }

    if (hasStarted && remainingTime === "00:00") {
      setIsTimerComplete(true);
      setHasStarted(false);
    }

    let interval: number | undefined;
    if (hasStarted && !paused) {
      interval = window.setInterval(() => {
        setRemainingTime((prev) => {
          const [min, sec] = prev.split(":").map(Number);
          if (sec > 0) {
            return `${min}:${String(sec - 1).padStart(2, "0")}`;
          } else if (min > 0) {
            return `${min - 1}:59`;
          } else {
            return "00:00";
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [remainingTime, hasStarted, paused, setRemainingTime]);

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
  };

  return (
    <>
      {isTimerComplete ? (
        <TimesUp />
      ) : !paused ? (
        <div className="main-analogTimer">
          <div>
            <Menu />
          </div>
          <div className="page-content-analogtimer">
            <div className="remaining-time">{remainingTime}</div>
            <div className="stopwatch-container">
              <div className="stopwatch">
                <div className="stopwatch-dot"></div>
                <motion.div
                  ref={secondsPointer}
                  className="stopwatch-pointer-sec"
                  style={{
                    transformOrigin: "bottom center",
                  }}
                />
                <motion.div
                  ref={minutesPointer}
                  className="stopwatch-pointer-min"
                  style={{
                    transformOrigin: "bottom center",
                  }}
                />
              </div>
            </div>
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

export default AnalogTimer;
