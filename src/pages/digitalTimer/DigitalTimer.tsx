import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
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
          <div>{remainingTime}</div>

          <AbortBtn />
        </div>
        ´
      </div>
    </>
  );
};

export default DigitalTimer;
