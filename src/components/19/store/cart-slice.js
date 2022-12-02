import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    //이 부분의 스테이트 값들이 handle 되어야 하는 부분을 함수로 만들어야 함
    addItemToCart(state, action) {
      //dispatch 될 때 추가 정보도 같이 내보내야 하기 때문에 action 필요 / 어떤 항목을 추가해야 하는지 알아야 한다
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      //존재하는 상품이 없으면
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //존재하는 상품이 있으면
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
        //action -> 추가 정보 필요한 payload 얻을 수 있기 때문
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        //배열에서 완전히 제거해야한다
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        //수량이 1보다 크니 그냥 감소시키면 된다
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
//to dispatch actions

export default cartSlice;
