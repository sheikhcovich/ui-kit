/// <reference types="react" />
import React$1, { ComponentProps, CSSProperties } from 'react';

declare type BackdropTypes = {
    color?: `#${string}`;
    open: boolean;
    children: any;
} & ComponentProps<"div">;

declare function Backdrop({ children, open, color, ...rest }: BackdropTypes): JSX.Element;

declare type BreadceumbsTypes = {
    separator: ">" | "+" | "-" | "_" | "=>" | "/" | "<" | "\\";
    children: any;
};

declare function Breadcrumbs({ children, separator }: BreadceumbsTypes): JSX.Element;

declare type ButtonTypes = {
    notBordered?: boolean;
    fab?: boolean;
    variant?: "primary" | "secondary" | "success" | "error" | "outlined" | "text";
    fullWidth?: boolean;
    children: any;
} & ComponentProps<"button">;

declare function Button(props: ButtonTypes): JSX.Element;

declare type ButtonGroupTypes = {
    variant: "primary" | "secondary" | "error" | "success" | "outlined" | "text";
    orientation?: "vertical" | "horizontal";
    children: any;
};

declare const ButtonGroup: ({ children, variant, orientation, }: ButtonGroupTypes) => JSX.Element;

declare type cardTypes = {
    width?: string;
    children: any;
} & ComponentProps<"div">;
declare type imageTypes = {
    img: string;
} & ComponentProps<"img">;
declare type titleTypes = {
    children: any;
} & ComponentProps<"div" | "h3">;
declare type bodyTypes = {
    children: any;
} & ComponentProps<"div">;
declare type actionsTypes = {
    children: any;
} & ComponentProps<"div">;

declare function Card({ children, width, ...rest }: cardTypes): JSX.Element;
declare namespace Card {
    var Img: ({ img, ...rest }: imageTypes) => JSX.Element;
    var Title: ({ children, ...rest }: titleTypes) => JSX.Element;
    var Body: ({ children, ...rest }: bodyTypes) => JSX.Element;
    var Actions: ({ children, ...rest }: actionsTypes) => JSX.Element;
}

declare const _default: React$1.MemoExoticComponent<any>;

declare type ChipTypes = {
    variant?: "filled" | "outlined";
    label: string;
    color?: "primary" | "secondary" | "success";
    onDelete?: () => void;
} & ComponentProps<"span">;

declare function Chip({ variant, color, label, onDelete, ...rest }: ChipTypes): JSX.Element;

declare type fabTypes = {
    variant?: "primary" | "secondary" | "success" | "error" | "outlined" | "text";
    children: any;
} & ComponentProps<"button">;

declare function Fab({ children, variant, ...rest }: fabTypes): JSX.Element;

declare type inputTypes = {
    variant?: "standard" | "filled";
    label: string;
    fullWidth?: boolean;
    id?: string;
} & ComponentProps<"input">;

declare function Input({ variant, label, id, fullWidth, ...rest }: inputTypes): JSX.Element;

interface basicTypes {
    count: number;
    shape?: "rounded" | "circled";
    activeStyle?: CSSProperties;
    sx?: CSSProperties;
    color?: "primary" | "secondary";
    variant?: "outlined" | "contained";
}
declare type controlledTypes = basicTypes & {
    onChange: (e: React.MouseEvent<HTMLSpanElement>, i: number) => void;
    page: number;
};
declare type unControlledTypes = basicTypes & {
    onChange?: never;
    page?: never;
} & ComponentProps<"span">;
declare type paginateTypes = controlledTypes | unControlledTypes;

declare function Paginate({ count, page, onChange, shape, activeStyle, sx, color, variant, ...rest }: paginateTypes): JSX.Element;

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
declare type propTypes = changeableTypes | readOnlyTypes;

declare function Rating({ value, onChange, size, readOnly, ...rest }: propTypes): JSX.Element;

declare type tooltipTypes = {
    children: any;
    title: string;
};

declare function Tooltip({ children, title }: tooltipTypes): JSX.Element;

export { Backdrop, Breadcrumbs, Button, ButtonGroup, Card, _default as Carousel, Chip, Fab, Input, Paginate, Rating, Tooltip };
