import React, { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  //   console.log("current state =>", currentState);
  //   console.log("Action =>", action);
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const UseReducerExample2 = () => {
  //   const [state, setState] = useState(initialState);
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 p-10 mt-5 rounded-xl">
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="mx-4 p-2 rounded-lg"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        className="mx-4 p-2 rounded-lg"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
      />
      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default UseReducerExample2;
