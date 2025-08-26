import styled from "styled-components";

import HomeSection1Bg from "../../assets/img/home/IMG_2971_Head.jpg";

const HomeWrapper = styled.section`
  background-color: unset;
`;

const HomeTopBg = styled.div`
  padding-top: 9vh;
  .home-section1 {
    height: 68vh;
    overflow: hidden;
    &:after {
      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 83vh;
      background: url(${HomeSection1Bg});
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      z-index: -1;
    }
    .wrapper {
      width: 105.5vh;
      text-align: center;
    }
    .title {
      position: relative;
      top: 5vh;
      color: white;
      line-height: 10vh;
      font-family: "CloudLight";
      font-size: 8.611vh;
      font-weight: bold;
      padding: 0 2rem;
      .text {
        display: inline-block;

        text-shadow: rgb(0, 0, 0) 0px 0px 5px, rgb(0, 0, 0) 0px 0px 10px,
          rgb(0, 0, 0) 0px 0px 1px, rgb(0, 0, 0) 0px 0px 1px,
          rgb(0, 0, 0) 0px 0px 5px, rgb(0, 0, 0) 0px 0px 4px,
          rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 2px,
          rgb(0, 0, 0) 0px 0px 1px;
      }
    }

    .inner-line {
      height: 1px;
    }
    .double-line1 {
      position: absolute;
      top: -67%;
      right: 4.5%;
      transform: rotate(30deg);
      .line1 {
        width: 22.5vh;
        height: 0.1vh;
        margin: 2.7vh auto;
        .inner-line {
          width: 0%;
          height: 0.1vh;
          background-color: var(--secondary-color);
          animation: lineAnimation 1.5s 0.5s forwards;
        }
      }
      .line2 {
        margin: 0 auto;
        width: 30vh;
        height: 0.1vh;
        .inner-line {
          width: 0%;
          height: 0.1vh;
          background-color: white;
          animation: lineAnimation 1.5s 0.5s forwards;
        }
      }
    }
    .double-line2 {
      position: absolute;
      bottom: -30%;
      left: 3.5%;
      transform: rotate(30deg);
      .line1 {
        width: 30vh;
        height: 1px;
        margin: 2.7vh auto;
        .inner-line {
          width: 0%;
          height: 0.1vh;
          background-color: var(--secondary-color);
          animation: lineAnimation 1.5s 0.5s forwards;
        }
      }
      .line2 {
        width: 22.5vh;
        height: 1px;
        margin: 0 auto;
        .inner-line {
          width: 0%;
          height: 0.1vh;
          background-color: white;
          animation: lineAnimation 1.5s 0.5s forwards;
        }
      }
    }
  }
  @supports (-webkit-touch-callout: none) {
    .home-section1 {
      .title {
        font-family: "Cloud-Semibold" !important;
        font-weight: 400 !important;
        letter-spacing: 0.1rem !important;
        @media (max-width: 576px) {
          letter-spacing: 0.05rem !important;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    mobile-block {
      display: block;
    }
    .home-section1 {
      height: 90vh;
      &:after {
        height: 100vh;
      }
      .title {
        top: 0;
        font-size: 8vh;
        line-height: 10vh;
      }
      .double-line1 {
        top: -70%;
      }
      .double-line2 {
        bottom: -70%;
      }
    }
  }

  @media (max-width: 768px) {
    .home-section1 {
      .title {
        font-size: 6vh;
        line-height: 8vh;
      }
      .double-line1 {
        top: -75%;
      }
      .double-line2 {
        bottom: -75%;
      }
    }
  }

  @media (max-width: 576px) {
    .home-section1 {
      .double-line1 {
        top: -50%;
      }
      .double-line2 {
        bottom: -50%;
      }
    }
  }

  @media (orientation: landscape) {
    .double-line1 {
      top: -70% !important;
    }
    .double-line2 {
      bottom: -40% !important;
    }
  }
`;

const HomeSection = styled.section`
  background-color: unset;

  .home-section2 {
    background-color: white;
    text-align: center;
    padding: 16.5vh 0;
    overflow: hidden;
    .intertransport-container {
      max-width: 95vh;
    }
    .title {
      position: relative;

      .text {
        display: inline-block;
        font-family: "CloudLight";
        font-size: 5.92vh;
        font-weight: bold;
        letter-spacing: 0.05em;
      }
      .line1 {
        position: absolute;
        top: -70%;
        left: 50%;
        transform: translateX(-50%);
        width: 17vh;
        height: 0.1vh;
        .inner-line {
          width: 0;
          height: 0.1vh;
          background-color: var(--secondary-color);
        }
      }
      .line2 {
        position: absolute;
        bottom: -70%;
        left: 50%;
        width: 17vh;
        height: 0.1vh;
        transform: translateX(-50%);
        .inner-line {
          width: 0;
          height: 0.1vh;
          background-color: var(--secondary-color);
        }
      }
    }
    .content {
      margin-top: 18vh;
      display: grid;
      grid-template-columns: 0.3fr 1fr;
      gap: 8vh;
      align-items: center;
      .image-wrapper {
        img {
          position: relative;
          right: 4vh;
          border-radius: 50%;
          width: 27vh;
          height: 27vh;
        }
      }
      .text {
        position: relative;
        right: 2vh;
        line-height: 2.8rem;
        .text-title {
          font-size: 3.336vh;
          text-align: right;
          color: var(--secondary-color);
          text-align: center;
        }
        p {
          text-align: left;
        }
      }
    }
    .addresses {
      margin-top: 3.767vh;
      font-size: 2.691vh;
      text-align: right;
      color: var(--secondary-color);
    }
  }
  @supports (-webkit-touch-callout: none) {
    .home-section2 {
      .title {
        .text {
          font-family: "Cloud-Semibold" !important;
          font-weight: 400 !important;
          letter-spacing: 0.1rem !important;
          @media (max-width: 576px) {
            letter-spacing: 0.05rem !important;
          }
        }
      }
    }
  }
  .home-section3 {
    background-color: white;
    padding: 10vh 0 20vh 0;
  }

  /* Swiper Config */
  .swiper-slide {
    width: 78.6vh;
    height: 52.2vh;
  }
  .arrow {
    border: 1px solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: 0.2s;
    &:hover {
      border: 1px solid var(--secondary-color);
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
    }
  }
  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    width: 2vh;
    height: 2vh;
    z-index: 1;
    cursor: pointer;
  }
  .prev-btn {
    left: -10vh;
    transform: rotate(135deg);
  }
  .next-btn {
    right: -10vh;
    transform: rotate(-45deg);
  }
  .swiper-pagination {
    bottom: -8vh;
    z-index: 1;
  }
  .swiper-pagination-bullet {
    width: 1vh;
    height: 1vh;
    margin: 0 1vh !important;
    background: #757575;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    width: 1.2vh;
    height: 1.2vh;
    border: 2px solid #757575;
    background: white;
  }

  @keyframes lineAnimation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .home-section2 {
      background-color: white;
      text-align: center;
      padding: 5rem 0 3.5rem 0;
      .title {
        .line1 {
          top: -15%;
        }
        .line2 {
          bottom: -15%;
        }
      }
      .content {
        grid-template-columns: 1fr;
        gap: 5vh;
        margin-top: 10vh;
        .image-wrapper {
          img {
            right: 0;
          }
        }
        .text {
          right: 0;
        }
        .text-title {
          font-size: 1.7rem !important;
          text-align: center !important;
          padding-left: 0 !important;
        }
      }
      .addresses {
        font-size: 1.6rem;
        text-align: center;
      }
    }
  }
  @media (max-width: 1100px) {
    .arrow {
      border: 1px solid orange;
      border-width: 0 6px 6px 0;
      padding: 15px;
      &:hover {
        border: 1px solid var(--secondary-color);
        border-width: 0 6px 6px 0;
        padding: 15px;
      }
    }
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }
  @media (max-width: 992px) {
    .home-section1 {
      .title {
        font-size: 5.611vh;
        padding: 0 3rem;
      }
    }
    .swiper-wrapper {
      width: 25vw;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    .addresses-item1 {
      mobile-block {
        display: block;
      }
    }
  }
  @media (max-width: 576px) {
    .home-section2 {
      .title {
        .text {
          font-size: 2.7rem;
        }
      }
    }
  }

  /* Mobile Landscape */
  @media (max-height: 500px) {
    .home-section2 {
      .content {
        .image-wrapper {
          img {
            width: 40vh !important;
            height: 40vh !important;
          }
        }
      }
    }
    .swiper-slide {
      height: 100vh !important;
    }
    .swiper-pagination-bullet {
      width: 2vh;
      height: 2vh;
    }
    .swiper-pagination-bullet-active {
      width: 2.2vh;
      height: 2.2vh;
    }
  }
`;

export { HomeWrapper, HomeTopBg, HomeSection };
