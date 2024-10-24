import { useTimeContext } from "../contexts/TimerContext";

interface ResumeBtnProps {
  onClick: () => void;
}

const ResumeBtn: React.FC<ResumeBtnProps> = ({ onClick }) => {
  const { startTimer } = useTimeContext();
  return (
    <>
      <div>
        <button
          onClick={() => {
            startTimer();
            onClick();
          }}
        >
          RESUME TIMER
        </button>
      </div>
    </>
  );
};

export default ResumeBtn;
