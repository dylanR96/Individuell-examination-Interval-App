import { useTimeContext } from "../contexts/TimerContext";

const PauseBtn = () => {
  const { stopTimer } = useTimeContext();
  return (
    <>
      <div>
        <button onClick={stopTimer}>PAUSE TIMER</button>
      </div>
    </>
  );
};

export default PauseBtn;
