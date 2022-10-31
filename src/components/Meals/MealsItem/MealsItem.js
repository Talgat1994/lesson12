import classes from "./MealItems.module.css";
import React from "react";

function MealsItem({name, description, price}) {
  const newPrice = price.toFixed(2);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{newPrice}</p>
      </div>
    </li>
  );
}

export default MealsItem;
