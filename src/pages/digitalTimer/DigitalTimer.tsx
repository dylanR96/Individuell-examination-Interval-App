import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import PauseBtn from "../../components/PauseBtn";
import ResumeBtn from "../../components/ResumeBtn";
import { useTimeContext } from "../../contexts/TimerContext";
import "./digitalTimer.css";

const DigitalTimer = () => {
  const { remainingTime } = useTimeContext();

  return (
    <>
      <div className="main-digitalTimer">
        <div className="main-nav">
          <Menu />
        </div>
        <div className="page-content-digitaltimer">
          <div className="main__remaining-time">{remainingTime}</div>
          <AbortBtn />
          <PauseBtn />
          <ResumeBtn />
        </div>
      </div>
    </>
  );
};

export default DigitalTimer;
