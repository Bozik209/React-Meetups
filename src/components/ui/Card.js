import classes from "./Card.module.css";

const Card = (prpos) => {
  return <div className={classes.card}>{prpos.children}</div>;
};

export default Card;
