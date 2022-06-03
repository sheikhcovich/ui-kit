import React from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

export default {
  title: "Button Group",
  component: ButtonGroup,
};

export const HorizontalButtonGroup = () => (
  <ButtonGroup variant="outlined">
    <Button> ONE </Button>
    <Button> TWO </Button>
    <Button> FOUR </Button>
    <Button> FIVE </Button>
    <Button> SEX </Button>
    <Button> SEVEN </Button>
  </ButtonGroup>
);
export const VerticalButtonGroup = () => (
  <ButtonGroup variant="outlined" orientation="vertical">
    <Button> ONE </Button>
    <Button> TWO </Button>
    <Button> THREE </Button>
  </ButtonGroup>
);

export const CustomButtonGroup = () => (
  <ButtonGroup variant="primary" orientation="vertical">
    <Button> ONE </Button>
    <Button> TWO </Button>
    <Button> THREE </Button>
  </ButtonGroup>
);
