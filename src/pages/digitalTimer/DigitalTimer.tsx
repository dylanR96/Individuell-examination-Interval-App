import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import "./digitalTimer.css";

const DigitalTimer = () => {
  const { remainingTime } = useTimeContext();

  return (
    <>
      <div className="main-digitalTimer">
        <div className="main-nav">
          <Menu />
          interval
        </div>
        <div>
          <div className="stopwatch-container">
            <div className="stopwatch">
              <div>{remainingTime}</div>
            </div>
          </div>
          <AbortBtn />
          <PauseBtn />
        </div>
      </div>
    </>
  );
};

export default DigitalTimer;
