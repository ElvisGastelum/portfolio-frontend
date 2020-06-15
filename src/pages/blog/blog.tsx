import React from "react";
import { Articles } from "../../components/articles";
import { Nav } from "../../components/nav";

export const Blog = () => {
  return (
    <>
      <Nav onSetSidebarOpen={(open) =>{ }} />
      <Articles />
    </>
  );
};
