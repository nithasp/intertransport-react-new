import React, { useEffect } from "react";
import { AboutUsSection, AboutUsTopBg, AboutUsWrapper } from "./AboutUs.styled";
import { useTranslation, Trans } from "react-i18next";

import { AboutUsAnimation } from "../../utils/IntertransportAnimations";

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AboutUsAnimation();
  }, []);

  return (
    <AboutUsWrapper>
      <div className="about-us-bg"></div>
      <AboutUsTopBg className="subpage-top-bg">
        <div className="inner-bg"></div>
      </AboutUsTopBg>
      <AboutUsSection id="about-us">
        <div className="about-us-section1">
          <div className="main-title">
            <span className="wrapper">
              <Trans i18nKey="about-us.title" />
            </span>
          </div>
          <div className="intertransport-container">
            <div className="content">
              <p>{t("about-us.paragraph.paragraph1")}</p>
              <p>{t("about-us.paragraph.paragraph2")}</p>
              <p>{t("about-us.paragraph.paragraph3")}</p>
            </div>
          </div>
          <div className="anchor-points">
            <div className="wrapper">
              <div className="item" data-tab="vision" delay-time="0">
                {t("about-us.anchor-point.point1")}
              </div>
              <div className="item" data-tab="company-policy" delay-time="0.2">
                {t("about-us.anchor-point.point2")}
              </div>
              <div className="item" data-tab="quality" delay-time="0.4">
                {t("about-us.anchor-point.point3")}
              </div>
              <div className="item" data-tab="ethics" delay-time="0.6">
                {t("about-us.anchor-point.point4")}
              </div>
            </div>
          </div>
        </div>
        <div className="line-break"></div>
        <div className="about-us-section2">
          <div className="intertransport-container">
            <div className="item vision">
              <div className="title">
                <Trans i18nKey="about-us.content1.title" />
              </div>
              <div className="content">
                <p className="quote">“{t("about-us.content1.paragraph1")}”</p>
                <p>{t("about-us.content1.paragraph2")}</p>
              </div>
              <div className="top-arrow">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20 39.5 160 121"
                  viewBox="20 39.5 160 121"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M100 39.5l-80 79.493L61.77 160.5 100 122.508l38.23 37.992L180 118.993 100 39.5zm0 75.979l-38.23 37.992-34.69-34.477L100 46.53l72.921 72.464-34.69 34.477L100 115.479z"></path>
                    <path d="M100 77.492l-46.369 46.076 3.534 3.519L100 84.521l42.835 42.566 3.534-3.519L100 77.492z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="item company-policy">
              <div className="title">
                <Trans i18nKey="about-us.content2.title" />
              </div>
              <div className="content">
                <ol>
                  <li>{t("about-us.content2.item1")}</li>
                  <li>{t("about-us.content2.item2")}</li>
                  <li>{t("about-us.content2.item3")}</li>
                  <li>{t("about-us.content2.item4")}</li>
                  <li>{t("about-us.content2.item5")}</li>
                  <li>{t("about-us.content2.item6")}</li>
                  <li>{t("about-us.content2.item7")}</li>
                </ol>
              </div>
              <div className="top-arrow">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20 39.5 160 121"
                  viewBox="20 39.5 160 121"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M100 39.5l-80 79.493L61.77 160.5 100 122.508l38.23 37.992L180 118.993 100 39.5zm0 75.979l-38.23 37.992-34.69-34.477L100 46.53l72.921 72.464-34.69 34.477L100 115.479z"></path>
                    <path d="M100 77.492l-46.369 46.076 3.534 3.519L100 84.521l42.835 42.566 3.534-3.519L100 77.492z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="item quality">
              <div className="title">
                <Trans i18nKey="about-us.content3.title" />
              </div>
              <div className="content">
                <p>{t("about-us.content3.paragraph1")}</p>
              </div>
              <div className="top-arrow">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20 39.5 160 121"
                  viewBox="20 39.5 160 121"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M100 39.5l-80 79.493L61.77 160.5 100 122.508l38.23 37.992L180 118.993 100 39.5zm0 75.979l-38.23 37.992-34.69-34.477L100 46.53l72.921 72.464-34.69 34.477L100 115.479z"></path>
                    <path d="M100 77.492l-46.369 46.076 3.534 3.519L100 84.521l42.835 42.566 3.534-3.519L100 77.492z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="item ethics">
              <div className="title">
                <Trans i18nKey="about-us.content4.title" />
              </div>
              <div className="content">
                <div className="ethics-item1 ethics-item">
                  <div className="ethic-title">
                    {t("about-us.content4.item1.title")}
                  </div>
                  <ol>
                    <li>{t("about-us.content4.item1.list1")}</li>
                    <li>{t("about-us.content4.item1.list2")}</li>
                    <li>{t("about-us.content4.item1.list3")}</li>
                    <li>{t("about-us.content4.item1.list4")}</li>
                    <li>{t("about-us.content4.item1.list5")}</li>
                  </ol>
                </div>

                <div className="ethics-item2 ethics-item">
                  <div className="ethic-title">
                    {t("about-us.content4.item2.title")}
                  </div>
                  <ol>
                    <li>{t("about-us.content4.item2.list1")}</li>
                    <li>{t("about-us.content4.item2.list2")}</li>
                    <li>{t("about-us.content4.item2.list3")}</li>
                  </ol>
                </div>

                <div className="ethics-item3 ethics-item">
                  <div className="ethic-title">
                    {t("about-us.content4.item3.title")}
                  </div>
                  <ol>
                    <li>{t("about-us.content4.item3.list1")}</li>
                    <li>{t("about-us.content4.item3.list2")}</li>
                    <li>{t("about-us.content4.item3.list3")}</li>
                    <li>{t("about-us.content4.item3.list4")}</li>
                    <li>{t("about-us.content4.item3.list5")}</li>
                  </ol>
                </div>

                <div className="ethics-item4 ethics-item">
                  <div className="ethic-title">
                    {t("about-us.content4.item4.title")}
                  </div>
                  <ol>
                    <li>{t("about-us.content4.item4.list1")}</li>
                    <li>{t("about-us.content4.item4.list2")}</li>
                    <li>{t("about-us.content4.item4.list3")}</li>
                    <li>{t("about-us.content4.item4.list4")}</li>
                    <li>{t("about-us.content4.item4.list5")}</li>
                    <li>{t("about-us.content4.item4.list6")}</li>
                  </ol>
                </div>
              </div>
              <div className="top-arrow">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20 39.5 160 121"
                  viewBox="20 39.5 160 121"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M100 39.5l-80 79.493L61.77 160.5 100 122.508l38.23 37.992L180 118.993 100 39.5zm0 75.979l-38.23 37.992-34.69-34.477L100 46.53l72.921 72.464-34.69 34.477L100 115.479z"></path>
                    <path d="M100 77.492l-46.369 46.076 3.534 3.519L100 84.521l42.835 42.566 3.534-3.519L100 77.492z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </AboutUsSection>
    </AboutUsWrapper>
  );
};

export default AboutUs;
