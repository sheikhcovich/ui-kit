import { CSSProperties, ReactNode } from "react";
export declare type CarouselTypes<T> = {
    data: T[];
    children: any;
    itemsCount: number;
    onNextEvent?: () => void;
    left?: ReactNode;
    right?: ReactNode;
    sx?: CSSProperties;
    loadingComponent?: ReactNode;
    responsive?: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
};
