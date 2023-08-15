import { useState } from "react";
const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  console.log("Render ", count);

  return (
    <>
      <div style={{ fontSize: "48px" }}>{name}</div>
      <button className="btn-style" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span className="text-format">{count}</span>
      <button className="btn-style" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
};

export default Counter;
