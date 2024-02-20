import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SlideShow from "./SlideShow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SlideShow />
  </React.StrictMode>
);
