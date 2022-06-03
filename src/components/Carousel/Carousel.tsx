/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  cloneElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { CarouselTypes } from "./Carousel.types";
import withSwipe from "./hoc/WithSwipe";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { usePrevCurrent } from "./hooks/usePrevCurrent";
import styles from "./Swiper.module.css";

type propTypes<T> = {
  current: number;
  next: () => void;
  prev: () => void;
} & CarouselTypes<T>;
function Carousel<T extends { id: number }>({
  children,
  data,
  itemsCount,
  onNextEvent,
  left,
  right,
  sx,
  loadingComponent,
  responsive = { xs: 1, sm: 2, md: 3, lg: 5, xl: 5 },
  current,
  next,
  prev,
}: propTypes<T>) {
  const width = useMediaQuery(responsive);
  const prevCurrent = usePrevCurrent(current);
  const carouselRef = useRef<HTMLDivElement>(null!);
  const rightButton = useRef<HTMLDivElement>(null!);
  const leftButton = useRef<HTMLDivElement>(null!);
  const child = useMemo(
    () =>
      data?.map((item) => {
        return (
          <div
            style={{
              boxSizing: "border-box",
              ...sx,
              width: `${100 / width - 0.23}%`,
              flexShrink: "0",
            }}
          >
            {cloneElement(children, { item, key: item.id })}
          </div>
        );
      }),
    [data, width]
  );
  // this for scroll the swiper
  useLayoutEffect(() => {
    if (current < 0) return;

    console.log(data?.length);
    if (
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth <=
      (current * carouselRef.current.clientWidth) / 2
    ) {
      // if the rest of overflown div is lesser than the value I add,then translateX by the rest of overflown div & setendto false to hide the the arrow

      rightButton.current.style.display = "none";
      // transform by the rest
      carouselRef.current.style.transform = `translateX(${-(
        carouselRef.current.scrollWidth -
        carouselRef.current.clientWidth +
        5
      )}px)`;
      // to fetch some data if component is sideEffecct

      return;
    }

    // normal behaviour
    rightButton.current.style.display = "flex";
    if (prevCurrent !== current) {
      carouselRef.current.style.transform = `translateX(${
        (-current * carouselRef.current.clientWidth) / 2
      }px) translateZ(0px)`;
    }
  }, [current, data]);
  // to hide the arrow
  useEffect(() => {
    if (
      carouselRef.current.scrollWidth <= carouselRef.current.clientWidth ||
      data?.length < itemsCount
    ) {
      leftButton.current.style.display = "none";
      rightButton.current.style.display = "none";
    }
  }, []);

  // to retrieve the data
  useEffect(() => {
    if (
      carouselRef.current.scrollWidth -
        carouselRef.current.clientWidth -
        1000 <=
      (current * carouselRef.current.clientWidth) / 2
    )
      if (data?.length < itemsCount && onNextEvent) onNextEvent();
  }, [current]);

  return (
    <div className={styles.swiper}>
      <div className={styles.swiperWrapper}>
        <div ref={carouselRef} className={styles.swiperContainer}>
          {child}
          {data.length < itemsCount && (
            <div
              style={{
                boxSizing: "border-box",
                ...sx,
                width: `${100 / width - 0.23}%`,
                flexShrink: "0",
              }}
            >
              {loadingComponent}
            </div>
          )}
        </div>
      </div>
      <LeftButton lRef={leftButton} current={current} prev={prev} left={left} />
      <RightButton rRef={rightButton} next={next} right={right} />
    </div>
  );
}
export default React.memo(withSwipe(Carousel));
type leftProps = {
  current: number;
  prev: () => void;
  left?: ReactNode;
  lRef: React.RefObject<HTMLDivElement>;
};

const LeftButton = ({ current, prev, left, lRef }: leftProps) => (
  <div
    ref={lRef}
    onClick={() => {
      prev();
    }}
    className={`${styles.buttonWrapper} ${styles.left} ${
      !current ? styles.leftButtonWrapper : null
    }`}
  >
    {left ? left : <button className={`${styles.button} `}>&lsaquo;</button>}
  </div>
);
type rightProps = {
  next: () => void;
  right?: ReactNode;
  rRef: React.RefObject<HTMLDivElement>;
};

const RightButton = ({ rRef, next, right }: rightProps) => (
  <div
    ref={rRef}
    onClick={() => {
      next();
    }}
    className={`${styles.buttonWrapper} ${styles.right}`}
  >
    {right ? right : <button className={`${styles.button} `}>&rsaquo;</button>}
  </div>
);
