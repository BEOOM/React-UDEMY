import React from "react";
import classes from "./P1Card.module.css";

const P1Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default P1Card;
