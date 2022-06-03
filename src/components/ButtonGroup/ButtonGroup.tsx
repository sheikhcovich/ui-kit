import React, { Children, cloneElement } from "react";
import "./button-group.css";
import { ButtonGroupTypes } from "./ButtonGroup.types";

const ButtonGroup = ({
  children,
  variant,
  orientation = "horizontal",
}: ButtonGroupTypes) => {
  const cloneElements = Children.map(children, (child) =>
    cloneElement(child, {
      notBordered: true,
      variant: `${variant} ${orientation}`,
    })
  );
  return (
    <span className={`buttons-group ${orientation}`}>{cloneElements}</span>
  );
};
export default ButtonGroup;
