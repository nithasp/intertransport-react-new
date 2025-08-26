import React, { useEffect } from "react";
import { ContactSection, ContactTopBg } from "./Contact.styled";
import { useTranslation, Trans } from "react-i18next";
import { Map } from "../../components";
import { LightBoxGallery } from "../../components";
import { ContactAnimation } from "../../utils/IntertransportAnimations";

import intertransportMapThumbnail from "../../assets/img/contact/intertransport-map.webp";
import intertransportMap from "../../assets/img/contact/e99f64_79652e76a61a4a428f9d60971326317b_mv2_d_2639_1867_s_2.webp";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    ContactAnimation();
  }, []);

  return (
    <>
      <ContactTopBg className="subpage-top-bg">
        <div className="inner-bg"></div>
      </ContactTopBg>
      <ContactSection id="contact">
        <div className="contact-section1">
          <div className="main-title">
            <span className="wrapper">
              <Trans i18nKey="contact-us.title" />
            </span>
          </div>
          <div className="intertransport-container">
            <div className="image-wrapper">
              <LightBoxGallery
                galleryID="contact-gallery"
                images={[
                  {
                    largeURL: intertransportMap,
                    thumbnailURL: intertransportMapThumbnail,
                    width: 1558,
                    height: 1104,
                  },
                ]}
              />
            </div>
            <div className="content">
              <p>
                <Trans i18nKey="contact-us.address" />
              </p>
              <p>
                {t("contact-us.telephone")}, <span className="fax-block"></span>
                {t("contact-us.fax")},
                <br />
                {t("contact-us.mobilephone")}
                <br />
                {t("contact-us.email")}
              </p>
            </div>
          </div>
        </div>
        <div id="map">
          <Map />
        </div>
      </ContactSection>
    </>
  );
};

export default Contact;
