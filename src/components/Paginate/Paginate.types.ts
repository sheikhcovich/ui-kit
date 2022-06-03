import { ComponentProps, CSSProperties } from "react";

interface basicTypes {
  count: number;
  shape?: "rounded" | "circled";
  activeStyle?: CSSProperties;
  sx?: CSSProperties;
  color?: "primary" | "secondary";
  variant?: "outlined" | "contained";
}
type controlledTypes = basicTypes & {
  onChange: (e: React.MouseEvent<HTMLSpanElement>, i: number) => void;
  page: number;
};
type unControlledTypes = basicTypes & {
  onChange?: never;
  page?: never;
} & ComponentProps<"span">;
export type paginateTypes = controlledTypes | unControlledTypes;
