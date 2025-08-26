import React, { useEffect } from "react";
import { HomeWrapper, HomeTopBg, HomeSection } from "./Home.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useTranslation, Trans } from "react-i18next";

import { HomeAnimation } from "../../utils/IntertransportAnimations";

import HomeSection2Icon from "../../assets/img/home/IMG_3131_Home_Section2.jpg";
import slideImg1 from "../../assets/img/home/IMG_3144.jpg";
import slideImg2 from "../../assets/img/home/IMG_3178.jpg";
import slideImg3 from "../../assets/img/home/IMG_2859.jpg";
import slideImg4 from "../../assets/img/home/IMG_2742.jpg";
import slideImg5 from "../../assets/img/home/IMG_3018.jpg";
import slideImg6 from "../../assets/img/home/IMG_3033.jpg";
import slideImg7 from "../../assets/img/home/IMG_3236.jpg";

const HomeComponent = () => {
  const { t } = useTranslation();
  const homeSwiperConfig = {
    spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
    speed: 700,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<span class="${className}"></span>`;
      },
    },
    navigation: {
      prevEl: ".prev-btn",
      nextEl: ".next-btn",
    },
  };

  useEffect(() => {
    HomeAnimation();
  }, []);

  return (
    <HomeWrapper id="home">
      <HomeTopBg>
        <div className="home-section1 flex-center">
          <div className="wrapper">
            <div className="title">
              <span className="text">
                <Trans i18nKey="home.section1.title" />
              </span>
              <div className="double-line1">
                <div className="line line1">
                  <div className="inner-line"></div>
                </div>
                <div className="line line2">
                  <div className="inner-line"></div>
                </div>
              </div>
              <div className="double-line2">
                <div className="line line1">
                  <div className="inner-line"></div>
                </div>
                <div className="line line2">
                  <div className="inner-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeTopBg>

      <HomeSection>
        <div className="line-break"></div>
        <div className="home-section2">
          <div className="intertransport-container">
            <div className="title">
              <div className="line1">
                <div className="inner-line"></div>
              </div>
              <span className="text">"{t("home.section2.title")}"</span>
              <div className="line2">
                <div className="inner-line"></div>
              </div>
            </div>
            <div className="content">
              <div className="image-wrapper">
                <img alt="" src={HomeSection2Icon} />
              </div>
              <div className="text">
                <div className="text-title">
                  <Trans i18nKey="home.section2.sub-title" />
                </div>
                <p>
                  <Trans i18nKey="home.section2.content" />
                </p>
              </div>
            </div>
            <div className="addresses">
              <div className="addresses-item1">
                <Trans i18nKey="home.section2.address1" />
              </div>
              <div className="addresses-item2">
                <Trans i18nKey="home.section2.address2" />
              </div>
            </div>
          </div>
        </div>
        <div className="line-break"></div>
        <div className="home-section3">
          <div className="intertransport-container">
            <Swiper {...homeSwiperConfig} modules={[Navigation, Pagination]}>
              <SwiperSlide>
                <img alt="" src={slideImg1} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg2} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg3} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg4} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg5} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg6} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={slideImg7} />
              </SwiperSlide>
            </Swiper>
            <div className="arrow prev-btn"></div>
            <div className="arrow next-btn"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </HomeSection>
    </HomeWrapper>
  );
};

export default HomeComponent;
