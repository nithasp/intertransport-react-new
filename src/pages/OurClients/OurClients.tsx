import React, { useEffect } from "react";
import { OurClientsSection, OurClientsTopBg } from "./OurClients.styled";
import { useTranslation, Trans } from "react-i18next";
import { OurClientsAnimation } from "../../utils/IntertransportAnimations";
import { LightBoxGallery } from "../../components";
import OurClientImage from "../../assets/img/our-clients/image35.png";

const OurClients = () => {
  const { t } = useTranslation();

  useEffect(() => {
    OurClientsAnimation();
  }, []);

  return (
    <>
      <OurClientsTopBg className="subpage-top-bg">
        <div className="inner-bg"></div>
      </OurClientsTopBg>
      <OurClientsSection id="our-clients">
        <div className="our-clients-section1">
          <div className="main-title">
            <span className="wrapper">
              <Trans i18nKey="our-clients.title" />
            </span>
          </div>
          <div className="intertransport-container">
            <div className="content">
              <ol>
                <div className="li-wrapper">
                  <li>{t("our-clients.client1")}</li>
                  <li>{t("our-clients.client2")}</li>
                  <li>{t("our-clients.client3")}</li>
                  <li>{t("our-clients.client4")}</li>
                </div>
                <div className="li-wrapper">
                  <li>{t("our-clients.client5")}</li>
                  <li>{t("our-clients.client6")}</li>
                  <li>{t("our-clients.client7")}</li>
                  <li>{t("our-clients.client8")}</li>
                </div>
              </ol>
            </div>
            <div className="image-wrapper">
              <LightBoxGallery
                galleryID="our-clients-gallery"
                images={[
                  {
                    largeURL: OurClientImage,
                    thumbnailURL: OurClientImage,
                    width: 846,
                    height: 386,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </OurClientsSection>
    </>
  );
};

export default OurClients;
