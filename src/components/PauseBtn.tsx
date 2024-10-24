import { useTimeContext } from "../contexts/TimerContext";

interface PauseBtnProps {
  onClick?: () => void;
}

const PauseBtn: React.FC<PauseBtnProps> = ({ onClick }) => {
  const { pauseTimer } = useTimeContext();
  const handleClick = () => {
    pauseTimer(); // Start the timer
    if (onClick) {
      onClick(); // Call the provided onClick function, if it exists
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
