import { useState } from "react";
import icon from "./icon/logo.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content">
        <div className="container ">
          <img className="logo" src={icon} width="55px" alt="Icon" />
          <h2>Currency Converter</h2>
        </div>
      </div>
    </>
  );
}

export default App;
