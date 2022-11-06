import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import Practice1 from "./Practice1";
import Section10 from "./Section10";
import { AuthContextProvider } from "./components/10/store/auth-context";
import Section11 from "./components/11/Section11";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Section11 />);
