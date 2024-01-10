import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseStateExample2 from "./pages/UseStateExample2";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerExample2 from "./pages/UseReducerTypescript";
import UseEffectExample from "./pages/useEffectExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample>

      <UseStateExample2></UseStateExample2> */}
      {/* <UseReducerExample></UseReducerExample> */}

      {/* <UseReducerExample2></UseReducerExample2> */}
      <UseEffectExample></UseEffectExample>
    </div>
  );
}

export default App;
