import React, { Children, ReactNode } from "react";
import styles from "./breadcrumbs.module.css";
import { BreadceumbsTypes } from "./Breadcrumbs.types";

function Breadcrumbs({ children, separator }: BreadceumbsTypes) {
  return (
    <div className={styles.breadcrumbsWrapper}>
      {Children.map(children, (child, index) => (
        <span>
          {child} {index !== children.length - 1 && separator}
        </span>
      ))}
    </div>
  );
}
export default Breadcrumbs;
