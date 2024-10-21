import React, { createContext, useContext, useState, ReactNode } from "react";

interface TimerContextType {
  value: number;
  setValue: (value: number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <TimerContext.Provider value={{ value, setValue }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimeContext = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimeContext must be used within a myProvider");
  }
  return context;
};
