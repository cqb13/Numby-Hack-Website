import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import "./styles/button.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
