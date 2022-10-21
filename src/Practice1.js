import React, { useState } from "react";
import "./Practice1.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const Practice1 = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default Practice1;
