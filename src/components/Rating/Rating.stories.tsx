/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Rating from "./Rating";
export default {
  title: "Rating",
  component: Rating,
};
export const ControlledRating = () => {
  const [value, setvalue] = useState<number>(1);
  return (
    <div>
      <h3>Rating :{value}</h3>
      <Rating onChange={(e, value) => setvalue(value)} value={value} />
    </div>
  );
};
export const ReadRating = () => {
  const [value, setvalue] = useState(4);
  return (
    <div>
      <Rating size="medium" value={value} readOnly />
    </div>
  );
};
