import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="m-10 btn-primary"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <Counter></Counter>}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Render");
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h1 className="bg-slate-400 p-10 text-7xl rounded-lg text-white">
      {count}
    </h1>
  );
};

export default UseEffectExample;
