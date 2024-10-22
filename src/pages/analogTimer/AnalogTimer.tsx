import { useEffect, useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import "./analogTimer.css";
import { motion } from "framer-motion";

const AnalogTimer: React.FC = () => {
  const { remainingTime } = useTimeContext();
  const [rotation, setRotation] = useState(0);
  console.log(remainingTime);

  useEffect(() => {
    const [minutes, seconds] = remainingTime.split(":").map(Number);

    const totalSeconds = minutes * 60 + seconds;

    const newRotation =
      (totalSeconds / (parseInt(remainingTime.split(":")[0]) * 60)) * 360;

    setRotation(newRotation);
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
                className="stopwatch-pointer"
                animate={{
                  rotate: rotation,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </div>
          </div>
          <AbortBtn />
        </div>
      </div>
    </>
  );
};

export default AnalogTimer;
