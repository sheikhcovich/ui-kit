import { ComponentProps } from "react";

export type ButtonTypes = {
  notBordered?: boolean;
  fab?: boolean;
  variant?: "primary" | "secondary" | "success" | "error" | "outlined" | "text";
  fullWidth?: boolean;
  children: any;
} & ComponentProps<"button">;
