// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { HashRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );

// import React from "react";
// import ReactDOM from "react-dom"; // Correct import path for ReactDOM
// import App from "./App.jsx";
// import "./index.css";
// import { HashRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );



import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);