import AbortBtn from "../../components/AbortBtn";
import Menu from "../../components/Menu";
import { useTimeContext } from "../../contexts/TimerContext";

const AnalogTimer = () => {
  const { value, setValue } = useTimeContext();
  return (
    <>
      <div>
        <Menu />
        interval
      </div>
      <div>
        <div>{value}</div>
        <AbortBtn />
      </div>
    </>
  );
};

export default AnalogTimer;
