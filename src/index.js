import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./themes/dark.css";
import "./themes/light.css";
import App from "./App";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
