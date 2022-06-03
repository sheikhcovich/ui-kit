import { ComponentProps } from "react";
export declare type ChipTypes = {
    variant?: "filled" | "outlined";
    label: string;
    color?: "primary" | "secondary" | "success";
    onDelete?: () => void;
} & ComponentProps<"span">;
