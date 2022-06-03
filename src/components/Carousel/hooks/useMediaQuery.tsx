/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type propType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
export const useMediaQuery = ({ xs, sm, md, lg, xl }: propType) => {
  const [width, setWidth] = useState(lg);
  const updateDimensions = () => {
    const widthW = window.innerWidth;
    if (widthW >= 1440) setWidth(xl);
    else if (widthW >= 1200) setWidth(lg);
    else if (widthW >= 1024) setWidth(md);
    else if (widthW >= 768) setWidth(md);
    else if (widthW >= 425) setWidth(sm);
    else if (widthW >= 320) setWidth(xs);
  };
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return width;
};
