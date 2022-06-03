import React from "react";
declare const _default: {
    title: string;
    component: React.MemoExoticComponent<any>;
};
export default _default;
export declare const AsyncronousCarousel: <T extends {
    id: number;
}>() => JSX.Element | undefined;
export declare const DefaultCarousel: () => JSX.Element;
export declare type itemPropTypes = {
    item?: {
        id: number;
        title: string;
        price: number;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    };
};
