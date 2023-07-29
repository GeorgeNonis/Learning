import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GetBoundingClientRect from "./components/getBoundingClientRect/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <GetBoundingClientRect />
  </React.StrictMode>
);
