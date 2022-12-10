import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index21.css";
import App from "./App";
import App2 from "./App2";
import Practice1 from "./Practice1";
import Section10 from "./Section10";
import { AuthContextProvider } from "./components/10/store/auth-context";
import Section11 from "./components/11/Section11";
import Section13 from "./components/13/Section13";
import Section14 from "./components/14/Section14";
import Section15 from "./components/15-1/Section15";
import Section152 from "./components/15-2/Section152";
import Section16 from "./components/16/Section16";
import Section17 from "./components/17/Section17";
import Section18 from "./components/18/Section18";
import store from "./components/19/store";
import Section19 from "./components/19/Section19";
import Section20 from "./components/20/Section20";
import { BrowserRouter } from "react-router-dom";
import Section21 from "./components/21/Section21";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Section21 />
  </BrowserRouter>
);
