import { useTimeContext } from "../contexts/TimerContext";

interface PauseBtnProps {
  onClick: () => void;
}

const PauseBtn: React.FC<PauseBtnProps> = ({ onClick }) => {
  const { pauseTimer } = useTimeContext();
  return (
    <>
      <div>
        <button
          onClick={() => {
            pauseTimer();
            onClick();
          }}
        >
          PAUSE TIMER
        </button>
      </div>
    </>
  );
};

export default PauseBtn;
