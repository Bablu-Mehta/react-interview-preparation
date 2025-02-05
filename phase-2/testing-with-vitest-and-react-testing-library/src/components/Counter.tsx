import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
