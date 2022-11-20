import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    //키 입력마다 유효성 검사가 필요하다면 state 사용이 나음
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    //값이 한번만 필요하다면 ref 사용
    console.log(enteredValue);
    // nameInputRef.current.value = "" <- DOM에 직접 접근 이상적이지 않음!!
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
