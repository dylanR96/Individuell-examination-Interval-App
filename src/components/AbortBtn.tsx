import { useTimeContext } from "../contexts/TimerContext";

const AbortBtn = () => {
  const { resetTimer } = useTimeContext();
  return (
    <>
      <div>
        <button onClick={resetTimer}>ABORT TIMER</button>
      </div>
    </>
  );
};

export default AbortBtn;
