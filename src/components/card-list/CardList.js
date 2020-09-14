import React from "react";
import classes from "./CardList.module.css";

import Card from "./Card";

const cardList = props => {
  console.log(props.monster);
  return (
    <div className={classes.CardList}>
      {props.monster.map((monster, idx) => (
        <Card key={idx} monster={monster} unique={idx} />
      ))}
    </div>
  );
};

export default cardList;
