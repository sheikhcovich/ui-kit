import React from "react";
import Button from "../Button/Button";
import { fabTypes } from "./Fab.types";

function Fab({ children, variant = "secondary", ...rest }: fabTypes) {
  return (
    <Button variant={variant} notBordered fab {...rest}>
      {children}
    </Button>
  );
}

export default Fab;
