import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import "./Theme/_reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
