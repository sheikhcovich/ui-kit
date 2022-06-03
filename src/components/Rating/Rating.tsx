import React from "react";
import styles from "./rating.module.css";
import { propTypes } from "./Rating.types";

function Rating({
  value = 0,
  onChange,
  size = "large",
  readOnly,
  ...rest
}: propTypes) {
  return (
    <span className={styles.ratingContainer} id={!readOnly ? "rating" : ""}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
        <svg
          {...rest}
          className={` ${styles.svg} ${!readOnly ? styles.pointer : null}`}
          key={i}
          id={!readOnly ? "spanIcon" : ""}
          onClick={(e) => onChange && onChange(e, i)}
          height="23"
          width="22"
        >
          <polygon
            className={`${styles.polygon} ${
              i <= value ? styles.orangePolygon : styles.lightgreyPolygon
            }`}
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
            style={{
              transform:
                size === "large"
                  ? "scale(1)"
                  : size === "medium"
                  ? "scale(.75)"
                  : size === "small"
                  ? "scale(0.5)"
                  : "none",
            }}
          />
        </svg>
      ))}
    </span>
  );
}
export default Rating;
