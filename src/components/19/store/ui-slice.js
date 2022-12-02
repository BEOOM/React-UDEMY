import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false},
    reducers: {
      toggle(state) {
        state.cartIsVisible = !state.cartIsVisible;
        //기존 상태를 조작하는 것이 아닌 새 상태를 생성하여 변경
      },
    },
  
});

export const uiActions = uiSlice.actions

export default uiSlice;
