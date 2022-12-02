import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
// -> 데이터 추출하기

function Section19() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
//uiSlice value에 따른 cart 보여주기

export default Section19;
