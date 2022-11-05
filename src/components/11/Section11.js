import Header from "./Layout/Header";
import { Fragment } from "react";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

function Section11() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default Section11;
