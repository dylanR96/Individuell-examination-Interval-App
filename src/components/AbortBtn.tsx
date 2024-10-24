import { useTimeContext } from "../contexts/TimerContext";

interface AbortBtnProps {
  onClick?: () => void;
}

const AbortBtn: React.FC<AbortBtnProps> = ({ onClick }) => {
  const { resetTimer } = useTimeContext();

  const handleClick = () => {
    resetTimer();
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>ABORT TIMER</button>
      </div>
    </>
  );
};

export default AbortBtn;
