import { useTimeContext } from "../contexts/TimerContext";

interface PauseBtnProps {
  onClick?: () => void;
}

const PauseBtn: React.FC<PauseBtnProps> = ({ onClick }) => {
  const { pauseTimer } = useTimeContext();
  const handleClick = () => {
    pauseTimer();
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>PAUSE TIMER</button>
      </div>
    </>
  );
};

export default PauseBtn;
