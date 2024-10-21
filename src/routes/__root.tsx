import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Menu from "../components/Menu";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Menu />
      <Outlet />
    </React.Fragment>
  ),
});
