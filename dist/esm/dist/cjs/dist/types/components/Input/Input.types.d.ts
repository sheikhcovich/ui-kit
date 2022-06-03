import { ComponentProps } from "react";
export declare type inputTypes = {
    variant?: "standard" | "filled";
    label: string;
    fullWidth?: boolean;
    id?: string;
} & ComponentProps<"input">;
