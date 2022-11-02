import { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import mealsImage from "../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </Fragment>
  );
};

export default Header;
