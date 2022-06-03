import { useEffect, useRef } from "react";

export const usePrevCurrent = (current: number) => {
  const prevCurrent = useRef<number | null>(null);
  useEffect(() => {
    prevCurrent.current = current;
  }, [current]);
  return prevCurrent.current;
};
