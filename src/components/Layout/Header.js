import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css"
import React from "react";
import { HeaderButton } from "./HeaderButton";
export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton/>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  );
};
