import { useState } from "react";
import icon from "./icon/logo.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content">
        <div className="container ">
          <img className="logo" src={icon} style={{ width: "3.9vw", maxWidth: "55px" }} alt="Icon" />

          <div className="heading" >Currency Converter</div>
          
          <div className="input">

            <div className="amount">
              <label>Amount</label>
              <input type="number" />
            </div>

            <div className="fromCurrency">
              <label>From Currency</label>
              <select name="from" id="fromCurrency">
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="yen">YEN</option>
                <option value="rmb">RMB</option>
              </select>
            </div>

            <div className="toCurrency">
              <label>To Currency</label>
              <select name="from" id="ToCurrency">
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="yen">YEN</option>
                <option value="rmb">RMB</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
