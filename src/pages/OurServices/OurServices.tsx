import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { OurServicesSection, OurServicesTopBg } from "./OurServices.styled";

import { OurServicesAnimation } from "../../utils/IntertransportAnimations";

import OurServicesImage1 from "../../assets/img/our-services/IMG_3147.jpg";
import OurServicesImage2 from "../../assets/img/our-services/IMG_3165.jpg";
import OurServicesImage3 from "../../assets/img/our-services/IMG_2782.jpg";

const OurServices = () => {
  const { t } = useTranslation();

  useEffect(() => {
    OurServicesAnimation();
  }, []);

  return (
    <>
      <OurServicesTopBg className="subpage-top-bg">
        <div className="inner-bg"></div>
      </OurServicesTopBg>
      <OurServicesSection id="our-services">
        <div className="our-services-section1">
          <div className="main-title">
            <span className="wrapper">
              <Trans i18nKey="our-services.title" />
            </span>
          </div>
          <div className="intertransport-container">
            <div className="our-services-items">
              <div className="item">
                <div className="image">
                  <img alt="" src={OurServicesImage1} />
                </div>
                <div className="content">
                  <div className="title">
                    <Trans i18nKey="our-services.content.item1.title" />
                  </div>
                  <ol type="i">
                    <li>{t("our-services.content.item1.list1")}</li>
                    <li>{t("our-services.content.item1.list2")}</li>
                  </ol>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img alt="" src={OurServicesImage2} />
                </div>
                <div className="content">
                  <div className="title">
                    <Trans i18nKey="our-services.content.item2.title" />
                  </div>
                  <ol type="i">
                    <li>{t("our-services.content.item2.list1")}</li>
                    <li>{t("our-services.content.item2.list2")}</li>
                  </ol>
                </div>
              </div>
              <div className="item">
                <div className="image">
                  <img alt="" src={OurServicesImage3} />
                </div>
                <div className="content">
                  <div className="title">
                    <Trans i18nKey="our-services.content.item3.title" />
                  </div>
                  <ol type="i">
                    <li>{t("our-services.content.item3.list1")}</li>
                    <li>{t("our-services.content.item3.list2")}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OurServicesSection>
    </>
  );
};

export default OurServices;
