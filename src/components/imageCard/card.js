import React from "react";
import classes from "./card.module.css";

const Card = props => {
  return (
    <div
      className={classes.cardWrapper}
    >
      <img className={classes.image} src={props.item} alt="item" />
    </div>
  );
};
export default Card;
