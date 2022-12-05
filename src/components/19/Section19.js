import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, Fragment } from "react";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
// -> 데이터 추출하기

let isInitial = true;

function Section19() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  //카트의 변화를 감지

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}
//useSelector <- 상태를 받는 함수를 전닳해야함 , 현재 데이터를 받고 컴포넌트에서 사용하고 싶은 데이터를 반환해야 한다
//현재 슬라이드에서는 cartIsVisible 값이다 -> store/index.js -> ui key에 접근해서 사용해야 함
//uiSlice value에 따른 cart 보여주기

export default Section19;
