import { useTimeContext } from "../contexts/TimerContext";

interface ResumeBtnProps {
  onClick?: () => void;
}

const ResumeBtn: React.FC<ResumeBtnProps> = ({ onClick }) => {
  const { startTimer } = useTimeContext();

  const handleClick = () => {
    startTimer();
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>RESUME TIMER</button>
      </div>
    </>
  );
};

export default ResumeBtn;
