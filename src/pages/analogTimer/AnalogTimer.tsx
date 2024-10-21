import { useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import Timer from "easytimer.js";
import "./analogTimer.css";
import { motion } from "framer-motion";

const myTimer = new Timer();
const AnalogTimer = () => {
  const { value } = useTimeContext();
  const [time, setTime] = useState("00:00:00");

  myTimer.start({ countdown: true, startValues: { minutes: value } });

  myTimer.addEventListener("secondsUpdated", () => {
    setTime(myTimer.getTimeValues().toString());
  });

  return (
    <>
      <div className="main-analogTimer">
        <div className="main-nav">
          <Menu />
          interval
        </div>
        <div>
          <div>{time}</div>
          <div className="stopwatch-container">
            <div className="stopwatch">
              <motion.div
                className="stopwatch-dot"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              />
              <motion.div
                className="stopwatch-pointer"
                animate={{ rotate: 360 }}
                transition={{
                  duration: value,
                  ease: "linear",
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
