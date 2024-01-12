import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseStateExample2 from "./pages/UseStateExample2";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerExample2 from "./pages/UseReducerTypescript";
import UseEffectExample from "./pages/useEffectExample";
import FetchCleanup from "./pages/FetchCleanup";
import UseRef from "./pages/UseRef";
import UseRefExample from "./pages/UseRefExample";

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
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <FetchCleanup></FetchCleanup> */}
      {/* <UseRef></UseRef> */}
      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;
