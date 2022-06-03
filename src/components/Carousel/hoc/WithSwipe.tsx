import React, { ComponentProps, FunctionComponent, useState } from "react";
import Carousel from "../Carousel";
import { CarouselTypes } from "../Carousel.types";

const withSwipe: Function = (
  WrappedComponent: FunctionComponent<ComponentProps<typeof Carousel>>
) => {
  const NewConponent = <T extends { id: number }>(props: CarouselTypes<T>) => {
    const [current, setcurrent] = useState(0);
    const next = () => {
      setcurrent((prev) => prev + 1);
    };
    const prev = () => {
      setcurrent((prev) => prev - 1);
    };

    return (
      <WrappedComponent current={current} next={next} prev={prev} {...props} />
    );
  };

  return NewConponent;
};
export default withSwipe;
