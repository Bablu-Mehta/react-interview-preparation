import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState<any>(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
