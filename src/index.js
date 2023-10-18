import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./Routes/App";
import App from './Func/App'
// import App from "./Site/App";
// import App from "./Components/App";

// const title = Response.potentiallyMaliciousInput;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1 className="myclass">Hello !{title} </h1>);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log res ults (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
