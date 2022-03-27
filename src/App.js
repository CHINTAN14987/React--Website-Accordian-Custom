import "./App.css";
import Overview from "./Overview/Overview.js";
import { Route, Routes } from "react-router-dom";
import Mission from "./Mission/Mission";
import Values from "./Values/Values";

const App = () => {
  return (
    <div className="App">
      <Overview />
    </div>
  );
};

export default App;
