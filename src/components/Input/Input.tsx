import React from "react";
import styles from "./input.module.css";
import { inputTypes } from "./Input.types";

function Input({
  variant = "standard",
  label,
  id,
  fullWidth,
  ...rest
}: inputTypes) {
  return (
    <div>
      <div
        className={`${fullWidth && styles.fullWidth} ${styles.inputWrapper} ${
          variant !== "standard" && styles[variant]
        }`}
      >
        <input placeholder=" " id={id} className={styles.standard} {...rest} />
        <label className={styles[variant]} htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default Input;
