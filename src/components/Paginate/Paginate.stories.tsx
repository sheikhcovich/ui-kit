import React, { useState } from "react";
import Paginate from "./Paginate";
export default {
  title: "Paginate",
  component: Paginate,
};
export const Pagination = () => (
  <Paginate variant="outlined" shape="rounded" count={10} />
);
export const PrimaryPagination = () => {
  const [page, setpage] = useState(1);

  return (
    <Paginate
      count={100000}
      page={page}
      onChange={(e, value) => setpage(value)}
      shape="rounded"
      activeStyle={{ backgroundColor: "green", color: "white" }}
    />
  );
};
export const CustomPagination = () => (
  <Paginate count={10} variant="outlined" shape="rounded" color="secondary" />
);
export const ControlledPagination = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <h3>page number : {page}</h3>
      <Paginate
        count={30000000000}
        page={page}
        variant="outlined"
        onChange={(e, value) => setPage(value)}
        activeStyle={{
          backgroundColor: "orange",
          color: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        sx={{ border: "1px solid orange" }}
      />
    </>
  );
};
