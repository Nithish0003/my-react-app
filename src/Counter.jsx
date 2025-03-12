import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className=" text-center font-sans text-2xl font-bold">
      <p className=" text-9xl text-violet-800">{count}</p>
      <button
        className=" border-3 p-1.5 cursor-pointer bg-emerald-500 rounded-2xl m-2 font-sans text-white border-gray-600"
        onClick={increment}
      >
        increment
      </button>
      <button
        className=" border-3 p-1.5 cursor-pointer bg-emerald-500 rounded-2xl m-2 font-sans text-white border-gray-600"
        onClick={decrement}
      >
        decrement
      </button>
      <button
        className=" border-3 p-1.5 cursor-pointer bg-emerald-500 rounded-2xl m-2 font-sans text-white border-gray-600"
        onClick={reset}
      >
        reset
      </button>
    </div>
  );
}
export default Counter;
