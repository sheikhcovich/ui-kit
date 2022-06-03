import { ComponentProps } from "react";

type ratingTypes = {
  size?: "large" | "medium" | "small";
  value: number;
};

type changeableTypes = ratingTypes & {
  onChange: (e: React.MouseEvent<HTMLOrSVGElement>, i: number) => void;
  readOnly?: never;
};
type readOnlyTypes = ratingTypes & {
  onChange?: never;
  readOnly: boolean;
} & ComponentProps<"svg">;
export type propTypes = changeableTypes | readOnlyTypes;
