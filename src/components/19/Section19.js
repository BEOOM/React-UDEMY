import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// -> 데이터 추출하기

function Section19() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  //카트의 변화를 감지

  useEffect(() => {
    fetch("https://react-http-92230-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
//useSelector <- 상태를 받는 함수를 전닳해야함 , 현재 데이터를 받고 컴포넌트에서 사용하고 싶은 데이터를 반환해야 한다
//현재 슬라이드에서는 cartIsVisible 값이다 -> store/index.js -> ui key에 접근해서 사용해야 함
//uiSlice value에 따른 cart 보여주기

export default Section19;
