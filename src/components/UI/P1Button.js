import React from "react";
import classes from "./P1Button.module.css";

const P1Button = (props) => {
  return (
    <div
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default P1Button;
