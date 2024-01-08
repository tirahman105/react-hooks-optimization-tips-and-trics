import React, { useReducer } from "react";
const initialState = { count: 0 };

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "reset":
      return { count: 0 };

    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  //   const [state, setState] = useState(initialState);
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-10 border rounded-xl bg-slate-100 shadow-lg">
      <h1>Use Reducer</h1>
      <h1 className="text-3xl my-4">{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn-primary"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn-primary"
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerExample;
