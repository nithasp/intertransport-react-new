import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

import {
  HomeComponent,
  IntroPage,
  AboutUs,
  OurServices,
  WhyUs,
  OurClients,
  Contact,
  PageNotFound
} from "../pages";

const AnimatedRoutes = () => {
  const location = useLocation();

  const routes = [
    { path: "/", ComponentName: <IntroPage /> },
    { path: "/home", ComponentName: <HomeComponent /> },
    { path: "/about-us", ComponentName: <AboutUs /> },
    { path: "/why-us", ComponentName: <WhyUs /> },
    { path: "/our-services", ComponentName: <OurServices /> },
    { path: "/our-clients", ComponentName: <OurClients /> },
    { path: "/contact", ComponentName: <Contact /> },
    { path: "*", ComponentName: <PageNotFound /> },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, ComponentName }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<AnimatedPage>{ComponentName}</AnimatedPage>}
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
