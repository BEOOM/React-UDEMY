import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    //바로 실행하지 않기 때문에 밑의 방식을 사용해야 한다

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    //가장 최신의 state 값을 가지고 있는 것을 보장하기에 위의 방법보다 더 안전한 방법
  };

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="nex-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
