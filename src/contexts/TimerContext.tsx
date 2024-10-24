import Timer from "easytimer.js";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
} from "react";

interface TimerContextType {
  remainingTime: string;
  setRemainingTime: (value: string) => void;
  setTimerValue: (value: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  myTimer: Timer;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimeContext = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimeContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [remainingTime, setRemainingTime] = useState("00:00:00");
  const [running, setRunning] = useState(false);
  const myTimer = useRef(new Timer());

  const updateRemainingTime = () => {
    const { minutes, seconds } = myTimer.current.getTimeValues();
    setRemainingTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
  };

  const setTimerValue = (newValue: number) => {
    console.log("Starting timer with value:", newValue);
    myTimer.current.stop();

    myTimer.current.start({
      countdown: true,
      startValues: { minutes: newValue },
    });

    setRemainingTime(`${newValue}:00`);
    setRunning(true);

    myTimer.current.addEventListener("secondsUpdated", updateRemainingTime);
    myTimer.current.addEventListener("targetAchieved", () => {
      setRemainingTime("00:00:00");
      setRunning(false);
    });
  };

  const startTimer = () => {
    if (!running) {
      myTimer.current.start();
      setRunning(true);
      myTimer.current.addEventListener("secondsUpdated", updateRemainingTime);
    }
  };

  const pauseTimer = () => {
    myTimer.current.pause();
    setRunning(false);
  };

  const resetTimer = () => {
    console.log(running);

    myTimer.current.reset();
    myTimer.current.stop();
    setRemainingTime("00:00:00");
    setRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        remainingTime,
        setRemainingTime,
        setTimerValue,
        startTimer,
        pauseTimer,
        resetTimer,
        myTimer: myTimer.current,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
