import React from "react";
import ReactDOM from "react-dom/client";
import "./index18.css";
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
import { Provider } from "react-redux";
import store from "./components/18/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Section18 />
  </Provider>
);
