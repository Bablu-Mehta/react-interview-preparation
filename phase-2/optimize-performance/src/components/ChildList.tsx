import React, { memo } from "react";

interface ChildListProp {
  items: string[];
}

const ChildList: React.FC<ChildListProp> = memo(({ items }) => {
  console.log("Checking re-rendering.");
  return (
    <div>
      <h1>Child List</h1>
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </div>
  );
});

export default ChildList;
