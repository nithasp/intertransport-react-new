import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer.styled";
import { useTranslation } from "react-i18next";

const FooterComponent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Footer
      style={{ display: `${location.pathname === "/" ? "none" : "block"}` }}
    >
      <div className="wrapper">
        <p className="footer-item1">{t("footer.company-name")}</p>
        <p className="footer-item2">{t("footer.address")}</p>
      </div>
    </Footer>
  );
};

export default FooterComponent;
