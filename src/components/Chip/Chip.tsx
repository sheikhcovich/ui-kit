import React from "react";
import styles from "./chip.module.css";
import { ChipTypes } from "./Chip.types";

function Chip({
  variant = "filled",
  color = "secondary",
  label,
  onDelete,
  ...rest
}: ChipTypes) {
  return (
    <span
      className={`${styles.chip} ${styles[color]} ${styles[variant]}`}
      {...rest}
    >
      {label}
      {onDelete && <span className={styles.close} onClick={onDelete}></span>}
    </span>
  );
}

export default Chip;
