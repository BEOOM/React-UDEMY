import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//액션 전달은 createSlice로 가능 -> 서로 다른 리듀서에 해당하는 식별자 생성
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
export const counterActions = counterSlice.actions;
//메서드가 호출되면 액션 객체가 생성됨

export default counterSlice.reducer;
