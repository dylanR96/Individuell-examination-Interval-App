import Timer from "easytimer.js";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface TimerContextType {
  remainingTime: string;
  setTimerValue: (value: number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimeContext = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimeContext must be used within a myProvider");
  }
  return context;
};

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState("00:00:00");

  const myTimer = new Timer();

  const setTimerValue = (value: number) => {
    setValue(value);
    myTimer.start({ countdown: true, startValues: { minutes: value } });
  };

  useEffect(() => {
    if (value > 0) {
      myTimer.addEventListener("secondsUpdated", () => {
        const remainingSeconds = myTimer.getTimeValues().seconds;
        const remainingMinutes = myTimer.getTimeValues().minutes;
        setRemainingTime(
          `${remainingMinutes}:${remainingSeconds.toString().padStart(2, "0")}`
        );
      });

      myTimer.addEventListener("targetAchieved", () => {
        setRemainingTime("00:00:00");
      });
    }

    return () => {
      myTimer.stop();
    };
  }, [value]);

  return (
    <TimerContext.Provider value={{ remainingTime, setTimerValue }}>
      {children}
    </TimerContext.Provider>
  );
};
