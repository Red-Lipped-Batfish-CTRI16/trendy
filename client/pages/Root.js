import React from "react";
import { Outlet } from "react-router-dom";
// Outlet: used to render the child components based on the current route.
// serves as a placeholder where the matched child components will be rendered
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <>
      <Navbar />
      {/** test without outlet */}
      <Outlet></Outlet>
    </>
  );
}