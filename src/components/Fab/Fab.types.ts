import { ComponentProps } from "react";

export type fabTypes = {
  variant?: "primary" | "secondary" | "success" | "error" | "outlined" | "text";
  children: any;
} & ComponentProps<"button">;
