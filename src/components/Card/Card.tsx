import React from "react";
import styles from "./card.module.css";
import Tooltip from "../Tooltip/Tooltip";
import {
  actionsTypes,
  bodyTypes,
  cardTypes,
  imageTypes,
  titleTypes,
} from "./Card.types";

function Card({ children, width = "100%", ...rest }: cardTypes) {
  return (
    <div className={styles.card} style={{ width }} {...rest}>
      {children}
    </div>
  );
}

Card.Img = ({ img, ...rest }: imageTypes) => (
  <div className={styles.imageWrapper}>
    <img {...rest} loading="lazy" src={img} alt="product" />
  </div>
);

Card.Title = ({ children, ...rest }: titleTypes) => (
  <div {...rest} className={styles.cardTitle}>
    <Tooltip title={children}>
      <h3 {...rest} className={styles.title}>
        {children}
      </h3>
    </Tooltip>
  </div>
);

Card.Body = ({ children, ...rest }: bodyTypes) => (
  <div {...rest} className={styles.body}>
    {children}
  </div>
);

Card.Actions = ({ children, ...rest }: actionsTypes) => (
  <div {...rest} className={styles.actions}>
    {children}
  </div>
);
export default Card;
