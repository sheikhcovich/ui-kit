import { ComponentProps } from "react";
declare type ratingTypes = {
    size?: "large" | "medium" | "small";
    value: number;
};
declare type changeableTypes = ratingTypes & {
    onChange: (e: React.MouseEvent<HTMLOrSVGElement>, i: number) => void;
    readOnly?: never;
};
declare type readOnlyTypes = ratingTypes & {
    onChange?: never;
    readOnly: boolean;
} & ComponentProps<"svg">;
export declare type propTypes = changeableTypes | readOnlyTypes;
export {};
