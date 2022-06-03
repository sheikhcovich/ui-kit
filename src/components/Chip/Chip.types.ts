import { ComponentProps } from "react";

export type ChipTypes = {
  variant?: "filled" | "outlined";
  label: string;
  color?: "primary" | "secondary" | "success";
  onDelete?: () => void;
} & ComponentProps<"span">;
