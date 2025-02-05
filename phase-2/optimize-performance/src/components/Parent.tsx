import { useCallback, useMemo, useState } from "react";
import { fibonacci } from "../utilities";
import ChildList from "./ChildList";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Cherry"]);
  const [num, setNum] = useState(10);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const fibValue = useMemo(() => {
    console.log("Calculating fibonacci");

    return fibonacci(num);
  }, [num]);

  return (
    <div>
      <h1>Performance Optimization Demo</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <h2>Fibonacci section</h2>
        <h3>{fibValue}</h3>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </div>
      <div>
        <h1>Child Listing</h1>
        <ChildList items={items} />
      </div>
    </div>
  );
};

export default Parent;
