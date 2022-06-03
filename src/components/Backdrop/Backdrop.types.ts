import { ComponentProps } from "react";

export type BackdropTypes = {
  color?: `#${string}`;
  open: boolean;
  children: any;
} & ComponentProps<"div">;
