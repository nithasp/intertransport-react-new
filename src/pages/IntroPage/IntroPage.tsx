import React, { useEffect } from "react";
import { IntroPageSection } from "./IntroPage.styled";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { UseGlobalContext } from "../../context";
import { IntroPageAnimation } from "../../utils/IntertransportAnimations";

import logo from "../../assets/img/intertransport-logo.png";

const IntroPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { setLangState } = UseGlobalContext();

  const changePage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangState(lang);
    navigate("/home");
  };

  useEffect(() => {
    IntroPageAnimation();
  }, []);

  return (
    <IntroPageSection id="intro-page" className="flex-center">
      <div className="wrapper">
        <div className="logo">
          <img alt="" src={logo} />
        </div>
        <div className="title">Intertransport &amp; Logistics Co., Ltd.</div>
        <div className="subtitle">
          บริษัท อินเตอร์ ทรานสปอร์ต แอนด์ โลจิสติกส์ จำกัด
        </div>
        <div className="choose-language flex-center">
          <div className="th btn" onClick={() => changePage("th")}>
            เข้าสู่เว็บไซต์
          </div>
          <div className="line"></div>
          <div className="en btn" onClick={() => changePage("en")}>
            Enter Site
          </div>
        </div>
      </div>
    </IntroPageSection>
  );
};

export default IntroPage;
