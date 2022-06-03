import React, { useState } from "react";
import styles from "./paginate.module.css";
import { paginateTypes } from "./Paginate.types";

function Paginate({
  count,
  page = 0,
  onChange,
  shape = "circled",
  activeStyle,
  sx,
  color,
  variant = "contained",
  ...rest
}: paginateTypes) {
  const [activePage, setactivePage] = useState(1);
  const arr = [];
  if (page)
    for (let index = page - 2; index <= page + 2; index++) {
      if (index <= 0) continue;
      if (index > count) break;
      arr.push(index);
    }
  else
    for (let index = activePage - 2; index <= activePage + 2; index++) {
      if (index <= 0) continue;
      if (index > count) break;
      arr.push(index);
    }

  let ac = null;

  return (
    <div id={color && "active"} className={styles.pagination}>
      <button
        disabled={page ? page === 1 : activePage === 1}
        onClick={(e) => (page ? onChange && onChange(e, 1) : setactivePage(1))}
        className={`${styles.arrow} ${styles[shape]}`}
        style={{ ...sx, borderWidth: variant !== "outlined" ? "0" : "1" }}
      >
        &lsaquo; &lsaquo;
      </button>
      <button
        disabled={page ? page === 1 : activePage === 1}
        onClick={(e) =>
          page
            ? onChange && onChange(e, page - 1)
            : setactivePage((prev) => prev - 1)
        }
        className={`${styles.arrow} ${styles[shape]} `}
        style={{ ...sx, borderWidth: variant !== "outlined" ? "0" : "1" }}
      >
        &lsaquo;
      </button>
      {arr.map((i) => {
        if (i === page) {
          ac = activeStyle;
        } else ac = null;
        return (
          <span
            {...rest}
            key={i}
            onClick={(e) =>
              page ? onChange && onChange(e, i) : setactivePage(i)
            }
            className={`${shape && styles[shape]} ${styles.page} ${
              !page
                ? activePage - 3 < i && i < activePage + 3 && styles.shown
                : page - 3 < i && i < page + 3 && styles.shown
            } ${styles[variant]}
           ${
             !page
               ? i === activePage && styles[color ? color : ""]
               : i === page && styles[color ? color : ""]
           }`}
            style={{
              ...sx,
              ...ac,
            }}
          >
            {i}
          </span>
        );
      })}
      <button
        disabled={page ? page === count : activePage === count}
        onClick={(e) =>
          page
            ? onChange && onChange(e, page + 1)
            : setactivePage((prev) => prev + 1)
        }
        className={`${styles.arrow} ${styles[shape]}`}
        style={{ ...sx, borderWidth: variant !== "outlined" ? "0" : "1" }}
      >
        &rsaquo;
      </button>
      <button
        disabled={page ? page === count : activePage === count}
        onClick={(e) =>
          page ? onChange && onChange(e, count) : setactivePage(count)
        }
        className={`${styles.arrow} ${styles[shape]}`}
        style={{ ...sx, borderWidth: variant !== "outlined" ? "0" : "1" }}
      >
        &rsaquo; &rsaquo;
      </button>
    </div>
  );
}

export default Paginate;
