import { ComponentProps } from "react";

export type inputTypes = {
  variant?: "standard" | "filled";
  label: string;
  fullWidth?: boolean;
  id?: string;
} & ComponentProps<"input">;
