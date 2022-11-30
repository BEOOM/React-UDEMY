import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//액션 전달은 createSlice로 가능 -> 서로 다른 리듀서에 해당하는 식별자 생성
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
      state.counter = state.counter + action.payload;
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

export const counterActions = counterSlice.actions;
//메서드가 호출되면 액션 객체가 생성됨

export default store;
