import React, { cloneElement } from "react";
import styles from "./Backdrop.module.css";
import { BackdropTypes } from "./Backdrop.types";

function Backdrop({ children, open, color, ...rest }: BackdropTypes) {
  const child = cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
    },
  });
  return (
    <>
      {open && (
        <div
          style={{
            backgroundColor: `${color}80`,
          }}
          {...rest}
          className={styles.backdrop}
        >
          <div className={styles.backdropWrapper}>{child}</div>
        </div>
      )}
    </>
  );
}
export default Backdrop;
