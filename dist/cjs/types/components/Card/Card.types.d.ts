import { ComponentProps } from "react";
export declare type cardTypes = {
    width?: string;
    children: any;
} & ComponentProps<"div">;
export declare type imageTypes = {
    img: string;
} & ComponentProps<"img">;
export declare type titleTypes = {
    children: any;
} & ComponentProps<"div" | "h3">;
export declare type bodyTypes = {
    children: any;
} & ComponentProps<"div">;
export declare type actionsTypes = {
    children: any;
} & ComponentProps<"div">;
