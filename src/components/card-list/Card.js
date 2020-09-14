import React from "react";

import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.CardContainer}>
      <img
        alt={"monster"}
        src={`https://robohash.org/${props.unique}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
