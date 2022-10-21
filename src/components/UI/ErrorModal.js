import React from "react";
import P1Card from "./P1Card";
import P1Button from "./P1Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <P1Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <P1Button>Okay</P1Button>
        </footer>
      </P1Card>
    </>
  );
};

export default ErrorModal;
