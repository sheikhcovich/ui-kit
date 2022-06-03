import React from "react";
import { tooltipTypes } from "./Toolip.types";
import "./tooltip.css";

function Tooltip({ children, title }: tooltipTypes) {
  return (
    <div className="tooltip-wrapper">
      <p id="tooltip-span" className="tooltip">
        {title}
      </p>
      {children}
    </div>
  );
}
export default Tooltip;
