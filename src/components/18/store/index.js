import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
//앱이 커졌을때 문제 발생 가능 -> 하나의 리듀서만 전달해야함, slice가 여러개면 접근하는 리듀서도 여러개이기 때문
//configureStore -> 하나의 리듀서로 쉽게 합칠 수 있다 (객체넘기기)

export default store;
