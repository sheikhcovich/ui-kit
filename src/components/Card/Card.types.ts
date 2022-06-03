import { ComponentProps } from "react";

export type cardTypes = {
  width?: string;
  children: any;
} & ComponentProps<"div">;

export type imageTypes = {
  img: string;
} & ComponentProps<"img">;

export type titleTypes = {
  children: any;
} & ComponentProps<"div" | "h3">;
export type bodyTypes = {
  children: any;
} & ComponentProps<"div">;

export type actionsTypes = {
  children: any;
} & ComponentProps<"div">;
