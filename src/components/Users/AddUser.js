import React, { useState } from "react";
import P1Card from "../UI/P1Card";
import classes from "./AddUser.module.css";
import P1Button from "../UI/P1Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <P1Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={ageChangeHandler} />
        <P1Button type="submit">Add User</P1Button>
      </form>
    </P1Card>
  );
};

export default AddUser;
