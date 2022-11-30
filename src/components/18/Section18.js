import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function Section18() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default Section18;
