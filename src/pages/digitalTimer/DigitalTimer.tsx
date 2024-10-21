import { useState } from "react";
import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";
import Timer from "easytimer.js";
import "./digitalTimer.css";

const myTimer = new Timer();
const DigitalTimer = () => {
  const { value } = useTimeContext();
  const [time, setTime] = useState("00:00:00");

  myTimer.start({ countdown: true, startValues: { minutes: value } });

  myTimer.addEventListener("secondsUpdated", () => {
    setTime(myTimer.getTimeValues().toString());
  });
  return (
    <>
      <div className="main-digitalTimer">
        <div className="main-nav">
          <Menu />
          interval
        </div>
        <div>
          <div>{time}</div>

          <AbortBtn />
        </div>
        ´
      </div>
    </>
  );
};

export default DigitalTimer;
