import React from "react";
import Chip from "./Chip";

export default {
  title: "Chip",
  component: Chip,
};
export const FilledChip = () => <Chip label="Filled Chip" />;
export const OutlinedChip = () => (
  <Chip
    label="Outlined Chip"
    variant="outlined"
    color="success"
    onDelete={() => console.log("")}
  />
);
export const PrimarydChip = () => <Chip label="Filled Chip" color="success" />;
export const MultipleChips = () => (
  <div>
    <Chip label="Filled Chip" />
    <Chip
      label="Outlined Chip"
      variant="outlined"
      color="success"
      onDelete={() => console.log("")}
      onClick={() => console.log("hi")}
    />
  </div>
);
