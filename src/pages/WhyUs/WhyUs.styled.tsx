import styled from "styled-components";

import whyUsBg from "../../assets/img/why-us/IMG_2971.jpg";

const WhyUsTopBg = styled.div`
  .inner-bg {
    background: url(${whyUsBg});
    background-position: center !important;
  }
`;

const WhyUsSection = styled.section`
  .intertransport-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 6vh;
    align-items: center;
    max-width: 90vh;
  }
  .why-us-section1 {
    padding: 7vh 0;
    background-color: white;
    .main-title {
      margin-bottom: 7vh;
    }
    .image-wrapper {
      position: relative;
      width: 32.1vh;
      height: 51.9vh;
      img {
        position: absolute;
        left: -8%;
      }
    }
    .content {
      p:nth-child(2) {
        margin: 3vh 0;
      }
    }
  }

  @media (max-width: 1200px) {
    .intertransport-container {
      grid-template-columns: 1fr;
      .image-wrapper {
        margin: 0 auto;
        img {
          left: 0;
        }
      }
    }
  }
`;

export {WhyUsSection, WhyUsTopBg}