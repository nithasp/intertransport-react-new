import styled from "styled-components";

import OurServicesBg from "../../assets/img/our-services/IMG_2967.jpg";

const OurServicesTopBg = styled.div`
  .inner-bg {
    background: url(${OurServicesBg});
    background-position: 0vh -60vh !important;
  }
  @media (max-width: 576px) {
    .inner-bg {
      background-position: center !important;
    }
  }
`;

const OurServicesSection = styled.section`
  .intertransport-container {
    max-width: 115vh;
  }

  .main-title {
    margin-bottom: 8vh;
  }
  .our-services-section1 {
    min-height: 100vh;
    background-color: white;
    padding: 7vh 0;

    .our-services-items {
      .item {
        display: flex;
        align-items: center;
        gap: 5rem;
        margin: 10vh 0;
        &:nth-child(even) {
          flex-direction: row-reverse;
        }
        &:first-child,
        &:last-child {
          margin: 0;
        }
        .image {
          position: relative;
          width: 50vh;
          height: auto;
          flex-basis: 50%;
          &:after {
            content: "";
            position: absolute;
            top: -4%;
            left: 3%;
            width: 100%;
            height: 95%;
            border: 0.3vh solid #cccccc;
            z-index: -1;
          }
        }
        .content {
          flex-basis: 50%;
        }
        .title {
          font-family: "CloudLight";
          color: var(--secondary-color);
        }
        ol {
          text-indent: 0.3vh;
          margin: 0vh 2vh;
          line-height: 1.2em;
        }
      }
    }
    .item:nth-child(2) {
      .image {
        &:after {
          top: -3%;
          left: -3%;
          height: 95%;
        }
      }
    }
    .item:nth-child(3) {
      .image {
        &:after {
          top: 3%;
          left: -4%;
          height: 94%;
        }
      }
    }
    .item:nth-child(4) {
      .image {
        &:after {
          top: 3%;
          left: 2%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .item {
      gap: 0rem !important;
      flex-direction: column !important;
      .image {
        width: 100% !important;
        height: 30vh !important;
      }
      .content {
        margin-top: 2rem;
      }
    }
  }
  @media (max-width: 576px) {
    .item {
      flex-direction: column !important;
      .image {
        width: 100% !important;
        height: 30vh !important;
      }
    }
    .item:nth-child(odd) {
      align-items: start !important;
    }
    .item:nth-child(even) {
      align-items: end !important;
    }
  }

  /* Mobile Landscape */
  @media (max-height: 500px) {
    .item {
      gap: 5rem !important;
    }
  }
`;

export { OurServicesSection, OurServicesTopBg };
