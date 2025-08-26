import styled from "styled-components";

import aboutUsBg from "../../assets/img/about-us/about-us-bg.jpg";
import aboutUsHeaderBg from "../../assets/img/about-us/IMG_3117.jpg";

const AboutUsWrapper = styled.div`
  .about-us-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${aboutUsBg});
    background-size: cover;
    background-position: 0% 15vh;
    z-index: -1;
  }
`;

const AboutUsTopBg = styled.div`
  .inner-bg {
    background: url(${aboutUsHeaderBg});
    background-position: 0vh -15vh !important;
  }
  @media (max-width: 1800px) {
    .inner-bg {
      background-size: cover !important;
    }
  }
  @media (max-width: 992px) {
    .inner-bg {
      background-position: center !important;
    }
  }
`;

const AboutUsSection = styled.section`
  background-color: unset;
  .intertransport-container {
    max-width: 79vh;
    text-indent: 2vh;
  }

  .top-arrow {
    width: 48px;
    height: 37px;
    margin: 6vh auto;
    cursor: pointer;
    svg {
      fill: var(--secondary-color);
      width: 100%;
      height: 100%;
    }
  }
  .about-us-section1 {
    position: relative;
    background-color: white;
    padding: 7vh 0;
    .content {
      p {
        margin: 4vh 0;
      }
    }

    .anchor-points {
      margin-top: 9vh;
      .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2vh;
        max-width: 87vh;
        margin: 0 auto;
        padding: 0 1.5rem;
        text-align: center;
        align-items: center;
      }
      .item {
        border: 0.2vh solid black;
        padding: 2vh;
        font-family: "CloudLight";
        font-size: 2.2vh;
        white-space: nowrap;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          border: 0.2vh solid var(--secondary-color);
          color: var(--secondary-color);
        }
      }
    }
  }
  .about-us-section2 {
    position: relative;
    background-color: white;
    padding: 7vh 0 1px 0;
    .intertransport-container {
      max-width: 100vh;
    }
    .item {
      margin: 5vh 0;
      &:nth-child(odd) {
        text-align: right;
      }
    }
    .title {
      font-family: "CloudLight";
      font-weight: bold;
      font-size: 7.534vh;
      letter-spacing: 0.05em;
      white-space: nowrap;
      .color {
        color: var(--secondary-color);
      }
    }
    .content {
      display: inline-block;
      padding: 3vh 3vh;
      border: 0.3vh solid #989898;
      text-indent: 0%;
      min-width: 84%;
      .quote {
        text-align: right;
        color: var(--secondary-color);
      }
    }
    .company-policy {
      .content {
        padding: 3vh 5vh !important;
      }
      ol {
        counter-reset: number;
      }
      li {
        list-style: none;
        counter-increment: number;
        text-indent: -1.7vh;
        margin: 1.8vh 0;
        line-height: 1.2em;

        &:before {
          content: counter(number) ".";
          position: relative;
          right: 0.5vh;
        }
      }
    }
    .quality {
      .content {
        text-align: left;
      }
    }
    .ethics {
      .content {
        padding: 3vh 3vh 3vh 6vh;
      }
      .ethics-item {
        margin: 5vh 0;
        &:nth-child(1) {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
        .ethic-title {
          font-family: "TH-Sarabun-New-Bold";
          font-size: 3.3vh;
          margin-left: -1.9rem;
        }
        ol {
          counter-reset: number;
        }
        li {
          list-style: none;
          counter-increment: number;
          text-indent: -1.6rem;
          margin: 1vh 0;
          line-height: 1.2em;
          &:before {
            content: "1." counter(number);
            position: relative;
            right: 0.5vh;
          }
          &:nth-child(1) {
            margin-top: 1vh;
          }
        }
      }
      .ethics-item2 {
        li {
          &:before {
            content: "2." counter(number);
          }
        }
      }
      .ethics-item3 {
        li {
          &:before {
            content: "3." counter(number);
          }
        }
      }
      .ethics-item4 {
        li {
          text-indent: -2.72vh;
          &:before {
            content: "4." counter(number);
            right: 0.8vh;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .anchor-points {
      .wrapper {
        grid-template-columns: 1fr 1fr !important;
      }
      .item {
        font-size: 1.3rem !important;
      }
    }
    .about-us-section2 {
      .content {
        padding: 2rem !important;
      }
      .title {
        font-size: 3.5rem;
      }
      .ethics {
        .content {
          padding: 2rem 1rem 2rem 3rem !important;
        }
      }
      .ethic-title {
        font-size: 1.9rem !important;
      }
      .company-policy {
        .content {
          padding: 1rem 1rem 1rem 2.5rem !important;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .about-us-section2 {
      .intertransport-container {
        text-indent: 0;
      }
      .title {
        white-space: normal;
      }
    }
  }

  @media (max-width: 576px) {
    .anchor-points {
      .wrapper {
        grid-template-columns: 1fr !important;
      }
    }
    .about-us-section2 {
      .title {
        font-size: 2.7rem;
      }
      .item.vision {
        text-align: left;
      }
    }
  }

  /* Mobile Landscape */
  @media (max-height: 500px) {
    .anchor-points {
      .item {
        font-size: 1rem !important;
      }
    }
  }
`;

export { AboutUsSection, AboutUsTopBg, AboutUsWrapper };
