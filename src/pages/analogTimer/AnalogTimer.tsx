import { useEffect, useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import "./analogTimer.css";
import { motion } from "framer-motion";
import PauseBtn from "../../components/PauseBtn";

const AnalogTimer: React.FC = () => {
  const { remainingTime } = useTimeContext();
  const [rotationMin, setRotationMin] = useState(0);
  const [rotationSec, setRotationSec] = useState(0);

  useEffect(() => {
    const [minutes, seconds] = remainingTime.split(":").map(Number);

    const totalSeconds = minutes * 60 + seconds;

    const totalRotationMin = (totalSeconds / 3600) * 360;
    const totalRotationSec = (totalSeconds % 60) * 6;

    setRotationMin(totalRotationMin);
    setRotationSec(totalRotationSec);
  }, [remainingTime]);

  return (
    <>
      <div className="main-analogTimer">
        <div className="main-nav">
          <Menu />
          interval
        </div>
        <div>
          <div>{remainingTime}</div>
          <div className="stopwatch-container">
            <div className="stopwatch">
              <div className="stopwatch-dot"></div>
              <motion.div
                className="stopwatch-pointer-sec"
                animate={{ rotate: rotationSec }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                  ease: "linear",
                }}
              />
              <motion.div
                className="stopwatch-pointer-min"
                animate={{ rotate: rotationMin }}
                transition={{
                  repeat: Infinity,
                  duration: 3600,
                  ease: "linear",
                }}
              />
            </div>
          </div>
          <AbortBtn />
          <PauseBtn />
        </div>
      </div>
    </>
  );
};

export default AnalogTimer;
