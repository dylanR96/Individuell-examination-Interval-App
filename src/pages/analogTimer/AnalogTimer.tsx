import { useEffect, useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import "./analogTimer.css";
import { motion } from "framer-motion";
import PauseBtn from "../../components/PauseBtn";
import ResumeBtn from "../../components/ResumeBtn";

const AnalogTimer: React.FC = () => {
  const { remainingTime, setRemainingTime } = useTimeContext();
  const [rotationMin, setRotationMin] = useState(0);
  const [rotationSec, setRotationSec] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const [minutes, seconds] = remainingTime.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;

    const totalRotationMin = (totalSeconds / 3600) * 360;
    setRotationMin(totalRotationMin);

    const totalRotationSec = (totalSeconds / 600) * 3600;

    setRotationSec(totalRotationSec);
    if (hasStarted && !paused) {
      setRotationSec(totalRotationSec);
    }

    if (!hasStarted && remainingTime !== "00:00:00") {
      setHasStarted(true);
    }
  }, [remainingTime, hasStarted, paused]);

  useEffect(() => {
    if (hasStarted && !paused) {
      const interval = setInterval(() => {
        setRotationSec((prevRotationSec) => {
          const newRotationSec = prevRotationSec - 3600 / 600;
          return newRotationSec < 0 ? 3600 + newRotationSec : newRotationSec;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hasStarted, paused]);

  const clickPause = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const clickResume = () => {
    setPaused(false);
  };

  const clickAbort = () => {
    setPaused(false);
    setHasStarted(false);
    setRemainingTime("00:00:00");
    setRotationSec(0);
    setRotationMin(0);
  };

  return (
    <>
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
                className="stopwatch-pointer-sec"
                animate={{ rotate: rotationSec }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: hasStarted ? 1 : 0,
                }}
              />
              <motion.div
                className="stopwatch-pointer-min"
                animate={{ rotate: rotationMin }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              />
            </div>
          </div>
          <AbortBtn onClick={clickAbort} />
          <PauseBtn onClick={clickPause} />
          <ResumeBtn onClick={clickResume} />
        </div>
      </div>
    </>
  );
};

export default AnalogTimer;
