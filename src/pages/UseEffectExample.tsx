import React, { useEffect, useState } from "react";
import FetchCleanup from "./FetchCleanup";

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
      {!hidden && <Todo></Todo>}
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

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="p-10 bg-slate-300 rounded-2xl">
      <h1 className="text-3xl text-center p-4">To Do</h1>
    </div>
  );
};

export default UseEffectExample;
