import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function Section20() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default Section20;
