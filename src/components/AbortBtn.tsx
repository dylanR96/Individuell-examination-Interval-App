import { useTimeContext } from "../contexts/TimerContext";

interface AbortBtnProps {
  onClick: () => void;
}

const AbortBtn: React.FC<AbortBtnProps> = ({ onClick }) => {
  const { resetTimer } = useTimeContext();
  return (
    <>
      <div>
        <button
          onClick={() => {
            resetTimer();
            onClick();
          }}
        >
          ABORT TIMER
        </button>
      </div>
    </>
  );
};

export default AbortBtn;
