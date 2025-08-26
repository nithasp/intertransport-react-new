import React, { useEffect } from "react";
import { WhyUsSection, WhyUsTopBg } from "./WhyUs.styled";
import { Trans } from "react-i18next";
import { LightBoxGallery } from "../../components";
import { WhyUsAnimation } from "../../utils/IntertransportAnimations";

import intertransportISO from "../../assets/img/why-us/image21.png";

const WhyUs = () => {

  useEffect(() => {
    WhyUsAnimation();
  }, []);

  return (
    <>
      <WhyUsTopBg className="subpage-top-bg">
        <div className="inner-bg"></div>
      </WhyUsTopBg>
      <WhyUsSection id="why-us">
        <div className="why-us-section1">
          <div className="main-title">
            <span className="wrapper">
              <Trans i18nKey="why-us.title" />
            </span>
          </div>
          <div className="intertransport-container">
            <div className="image-wrapper">
              <LightBoxGallery
                galleryID="our-clients-gallery"
                images={[
                  {
                    largeURL: intertransportISO,
                    thumbnailURL: intertransportISO,
                    width: 467,
                    height: 732,
                  },
                ]}
              />
            </div>
            <div className="content">
              <p>
                <Trans i18nKey="why-us.content.paragraph1.content" />
              </p>
              <p>
                <Trans i18nKey="why-us.content.paragraph2.content" />
              </p>
              <p>
                <Trans i18nKey="why-us.content.paragraph3.content" />
              </p>
            </div>
          </div>
        </div>
      </WhyUsSection>
    </>
  );
};

export default WhyUs;
