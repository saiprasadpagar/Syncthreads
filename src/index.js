import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState())); //To Track Changes Add ReduDev Tool from Chrome

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store ={store}> 
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//-------------------------Notes-------------------------
//go to store & Add : reduxDevtool extention link: https://github.com/reduxjs/redux-devtools/tree/main/extension#installation