import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("Inside clean up ");
    };
  }, [hidden]);
  return (
    <div>
      <h1 className="text-3xl">this is use effect</h1>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn-primary"
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectExample;
