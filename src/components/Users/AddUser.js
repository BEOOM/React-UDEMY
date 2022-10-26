import React, { useState, useRef } from "react";
import P1Card from "../UI/P1Card";
import classes from "./AddUser.module.css";
import P1Button from "../UI/P1Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a vlid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a vlid age greater than 0",
      });
      return;
    }
    props.onAddUser(enteredUserAge, enteredName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  //   const usernameChangeHandler = (e) => {
  //     setEnteredUsername(e.target.value);
  //   };

  //   const ageChangeHandler = (e) => {
  //     setEnteredAge(e.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <P1Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <P1Button type="submit">Add User</P1Button>
        </form>
      </P1Card>
    </>
  );
};

export default AddUser;
