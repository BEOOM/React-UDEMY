import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import Practice1 from "./Practice1";
import Section10 from "./Section10";
import { AuthContextProvider } from "./components/10/store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <Section10 />
  </AuthContextProvider>
);
