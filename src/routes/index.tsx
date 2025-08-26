import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { NavbarComponent, FooterComponent } from "../components";
import { ChangePageTitle } from "../utils/Utils";

const RoutesComponent = () => {
  return (
    <>
      <div id="app">
        <BrowserRouter>
          <NavbarComponent />
          <ChangePageTitle />

          <AnimatedRoutes />

          <FooterComponent />
        </BrowserRouter>
      </div>
    </>
  );
};

export default RoutesComponent;
