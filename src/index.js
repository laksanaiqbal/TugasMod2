import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Menus from "./Components/Menus/index";
import Desc from "./Components/Desc/index";
import Foods from "./Components/Foods/index";
import style from "./style.css";
const desc = "SEDIA Perlengkapan dan Pakan";

const menu = [
  { name: "Serok Ikan",price: "5ribu" },
  { name: "Akuarium", price: "18ribu" },
  { name: "Airator", price: "25ribu" },
  { name: "selang",price: "28ribu" },
  { name: "toples", price: "8ribu" },
];
const food= [
  { name: "kutir",  price: "5ribu" },
  { name: "pelet", price: "4ribu" },
  { name: "Casut", price: "10ribu" },
  { name: "cabek", price: "15ribu" },
];
ReactDOM.render(
  <React.StrictMode>
    <div className="body">
    <App />
    <Desc desc ={desc}/>
    <Menus menu={menu}/>
    <Foods food={food}/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
