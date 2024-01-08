import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseStateExample2 from "./pages/UseStateExample2";
import UseReducerExample from "./pages/UseReducerExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample>

      <UseStateExample2></UseStateExample2> */}
      <UseReducerExample></UseReducerExample>
    </div>
  );
}

export default App;
