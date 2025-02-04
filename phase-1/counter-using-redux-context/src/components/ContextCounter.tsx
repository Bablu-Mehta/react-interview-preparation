import React from "react";
import { useCounter } from "../CounterContext";

const ContextCounter = () => {
  const { count, setCount }: any = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button
          onClick={() => (count <= 0 ? null : setCount((prev) => prev - 1))}
        >
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default ContextCounter;
