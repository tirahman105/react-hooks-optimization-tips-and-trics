import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseStateExample2 from "./pages/UseStateExample2";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample>

      <UseStateExample2></UseStateExample2>
    </div>
  );
}

export default App;
