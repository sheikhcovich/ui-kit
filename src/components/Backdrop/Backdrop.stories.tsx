import Backdrop from "./Backdrop";
import Button from "../Button/Button";
import React, { useState } from "react";

export default {
  title: "Backdrop",
  component: Backdrop,
};

export const BlackBackdrop = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Button onClick={() => setopen(true)} variant="text">
        Open Backdrop
      </Button>
      <Backdrop onClick={() => setopen(false)} open={open} color="#000000">
        <div
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>WELCOME!</h1>
        </div>
      </Backdrop>
    </div>
  );
};
export const BlueBackdrop = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Button onClick={() => setopen(true)} variant="text">
        Open Backdrop
      </Button>
      <Backdrop onClick={() => setopen(false)} open={open} color="#0000FF">
        <div
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>WELCOME!</h1>
        </div>
      </Backdrop>
    </div>
  );
};
