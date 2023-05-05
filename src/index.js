import React from "react";
import ReactDOM from "react-dom/client";
//custom imports
import { SnackbarProvider } from "notistack";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    preventDuplicate
  >
    <App />
  </SnackbarProvider>
);
