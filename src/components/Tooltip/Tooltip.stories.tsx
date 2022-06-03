import React from "react";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

export const MyTooptip = () => (
  <Tooltip title="Excellent">
    <Button variant="success">Excellent</Button>
  </Tooltip>
);

export const MyNewTooptip = () => (
  <Tooltip title="excellent">
    <h1>This my fav tooltip</h1>
  </Tooltip>
);
