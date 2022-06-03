import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button variant="primary">
    <div>primary</div>
  </Button>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Error = () => <Button variant="error">Error</Button>;
export const Outlined = () => <Button variant="outlined">Outlined</Button>;
export const Text = () => <Button variant="text">Text</Button>;
