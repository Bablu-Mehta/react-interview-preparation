import { useState } from "react";

const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  // Simulate a JavaScript error when count exceeds 3
  if (count > 3) {
    throw new Error("Count exceeded the allowed limit!");
  }

  return (
    <div>
      <p>
        Click the button to increase the count. Once the count is greater than
        3, an error will be thrown.
      </p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count ({count})
      </button>
    </div>
  );
};

export default BuggyComponent;
