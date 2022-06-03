import React from "react";
import Input from "./Input";
export default {
  title: "Input",
  component: Input,
};

export const Standard = () => (
  <Input id="standard-input" label="Standard" fullWidth />
);
export const Filled = () => (
  <Input id="filled-input" label="Filled" variant="filled" />
);
