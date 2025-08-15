import { useState,useEffect } from "react";
import icon from "./icon/logo.svg";

import "./App.css";

function App() {
  const [exchangeRate, setexchangeRate] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setfromCurrency] = useState('USD');
  const [toCurrency, settoCurrency] = useState('INR');
  const[convertedAmount, setConvertedAmount] = useState({});

  useEffect(() =>{
    const apiURL = `https://open.er-api.com/v6/latest/${fromCurrency.toUpperCase()}`

    fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {
    setexchangeRate(data.rates)
  })
  .catch((err)=> console.error("API fetch error : ",err));
  },[fromCurrency])
  
  useEffect(() => {
    const conversionRate = exchangeRate[toCurrency];
    if(conversionRate){
      const converted = amount * conversionRate;
      setConvertedAmount(converted.toFixed(2));
    }
  },[amount,fromCurrency,toCurrency,exchangeRate])
  


  const handleChange = (e)=>{

    const {name,value} = e.target;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;
        
      case 'fromCurrency':
        setfromCurrency(value);
        break;

      case 'toCurrency':
        settoCurrency(value);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="content">
        <div className="container ">
          <img className="logo" src={icon} style={{ width: "3.9vw", maxWidth: "55px" }} alt="Icon" />

          <div className="heading" >Currency Converter</div>
          
          <div className="input">

            <div className="amount">
              <label>Amount</label>
              <input type="number" name='amount' value={amount} onChange={handleChange} />
            </div>

            <div className="fromCurrency">
              <label>From Currency</label>
              <select name="fromCurrency" value={fromCurrency} onChange={handleChange} id="fromCurrency">
                {
                  Object.keys(exchangeRate).map(currency =>(
                    <option key={currency} value={currency}>{currency}</option>
                  ))
                }
              </select>
            </div>

            <div className="toCurrency">
              <label>To Currency</label>
              <select name="toCurrency" value={toCurrency} onChange={handleChange} id="ToCurrency">
               {
                  Object.keys(exchangeRate).map(currency =>(
                    <option key={currency} value={currency}>{currency}</option>
                  ))
                }
              </select>
            </div>

          </div>

          <div className="result">Converted Amount : <span>{convertedAmount}</span></div>
        </div>
      </div>
    </>
  );
}

export default App;
