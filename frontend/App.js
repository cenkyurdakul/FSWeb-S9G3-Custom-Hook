import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage.js";
import geceModuAc from "./hooks/geceModuAc";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, setGeceModu] = geceModuAc(false);
  const [data2, setData2] = useLocalStorage("geceModu" , "garanlıklar lordu");
  const [login, setLoginInfo] = useLocalStorage("login", false);

 /*  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []); */
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      {data2}
      <button type="button" onClick={()=>setData2("set me")}>
        Button
      </button>

      <button type="button" onClick={()=>setLoginInfo(!login)}>
        isLoggedin : {login.toString()}
      </button>

      <Navbar  geceModu={geceModu} setGeceModu={setGeceModu}  />
     {/*  <Charts coinData={coinData} /> */}
    </div>
  );
};

export default App;
