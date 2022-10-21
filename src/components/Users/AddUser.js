import React from "react";
import P1Card from "../UI/P1Card";
import classes from "./AddUser.module.css";
import P1Button from "../UI/P1Button";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <P1Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <P1Button type="submit">Add User</P1Button>
      </form>
    </P1Card>
  );
};

export default AddUser;
