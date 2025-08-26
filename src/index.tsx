import React from "react";
import ReactDOM from "react-dom/client";
import "./css/styles.scss";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import "photoswipe/dist/photoswipe.css";

import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
