import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";

function App() {
  const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  // const handleAsyncIncrement = () => {
  //   setTimeout(() => {
  //     setCounter((prevState) => prevState + 1);
  //   }, 2000);
  // };
  return (
    <div className="App">
      <UseStateExample
        counter={counter}
        setCounter={setCounter}
      ></UseStateExample>
    </div>
  );
}

export default App;
