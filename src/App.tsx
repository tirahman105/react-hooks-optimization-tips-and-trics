import { useContext, useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseStateExample2 from "./pages/UseStateExample2";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerExample2 from "./pages/UseReducerTypescript";
import UseEffectExample from "./pages/useEffectExample";
import FetchCleanup from "./pages/FetchCleanup";
import UseRef from "./pages/UseRef";
import UseRefExample from "./pages/UseRefExample";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./Components/Menu";
import UseAvatar from "./Components/UseAvatar";
import Profile from "./pages/hooksPages/Profile";
import GameResult from "./pages/hooksPages/GameResult";
import UsersContainer from "./Components/UsersContainer";

function App() {
  const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  console.log(dark);

  return (
    <div className={`App h-screen ${dark ? "bg-slate-950" : "bg-slate-50"} `}>
      <button className="btn-primary" onClick={() => setDark(!dark)}>
        Toggle
      </button>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
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
      {/* <UseRefExample></UseRefExample> */}
      {/* <Profile></Profile>
      <GameResult></GameResult> */}
      <UsersContainer></UsersContainer>
    </div>
  );
}

export default App;
