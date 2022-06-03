import React from "react";
import "./button.css";
import { ButtonTypes } from "./Button.types";

function Button(props: ButtonTypes) {
  const {
    notBordered,
    fab,
    variant = "text",
    fullWidth,
    children,
    ...rest
  } = props;
  return (
    <button
      style={{ width: fullWidth === true ? "100%" : "" }}
      className={`button ${!notBordered && "bordered"} ${
        fab && "fab"
      } ${variant}`}
      {...rest}
    >
      {children}
      {!fab && <span className="overlay" />}
    </button>
  );
}

export default Button;
