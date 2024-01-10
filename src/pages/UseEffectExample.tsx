import React, { useEffect, useState } from "react";
import FetchCleanup from "./FetchCleanup";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);

  return (
    <div className="bg-slate-400 p-10">
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="mx-4 p-2 rounded-lg"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
        id="email"
        className="mx-4 p-2 rounded-lg border"
      />
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
