import React from "react";
import Fab from "./Fab";

export default {
  title: "Fab",
  component: Fab,
};
export const ContainedFab = () => (
  <Fab>
    <h2>&#8459;</h2>
  </Fab>
);

export const OutlinedFab = () => (
  <Fab variant="outlined">
    <h2>&#8459;</h2>
    <p>Navigate</p>
  </Fab>
);
