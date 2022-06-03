import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
};

export const Breadcrumb = () => (
  <Breadcrumbs separator="/">
    <a href="/">UI-KIT</a>
    <a href="/">Core</a>
    <span>Breadcrumbs</span>
  </Breadcrumbs>
);

export const CustomBreadcrumb = () => (
  <Breadcrumbs separator=">">
    <a href="/">UI-KIT</a>
    <a href="/">Core</a>
    <span>Breadcrumbs</span>
  </Breadcrumbs>
);
