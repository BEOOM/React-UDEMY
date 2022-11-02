import Header from "./Layout/Header";
import { Fragment } from "react";
import Meals from "./Meals/Meals";

function Section11() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default Section11;
