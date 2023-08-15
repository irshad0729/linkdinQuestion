import { useState } from "react";
import Counter from "./components/Couter";
const Duplicate = () => {
  const [isIrshad, setIsIrshad] = useState(true);
  return (
    <>
      {isIrshad ? (
        <Counter name="Irshad" key="1" />
      ) : (
        <Counter name="Alia" key="2" />
      )}
      <button
        className="text-sm border border-gray-500 w-16 bg-slate-400 rounded-sm"
        onClick={() => setIsIrshad((e) => !e)}
      >
        swap
      </button>
    </>
  );
};

export default Duplicate;
