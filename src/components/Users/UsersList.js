import React from "react";
import P1Card from "../UI/P1Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <P1Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age}years old)
          </li>
        ))}
      </ul>
    </P1Card>
  );
};
export default UsersList;
