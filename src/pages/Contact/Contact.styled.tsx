import styled from "styled-components";

import ContactBg from "../../assets/img/contact/IMG_3087.jpg";

const ContactTopBg = styled.div`
  .inner-bg {
    background: url(${ContactBg});
    background-size: cover !important;
    background-position: center !important;
  }
`;

const ContactSection = styled.section`
  padding: 7vh 0;
  background-color: white;
  .intertransport-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 6vh;
    align-items: center;
    max-width: 102vh;
  }
  .contact-section1 {
    padding: 7vh 0;
    .main-title {
      margin-bottom: 5vh;
    }
    .image-wrapper {
      width: 50.2vh;
      height: 35.6vh;
      img {
        position: relative;
        left: 0%;
      }
    }
    .content {
      secondary-color {
        font-family: "TH-Sarabun-New-Bold";
      }
      p:nth-child(1) {
        margin-bottom: 3vh;
      }
    }
  }

  @media (max-width: 1200px) {
    .intertransport-container {
      grid-template-columns: 1fr;
      gap: 6vh;
      text-align: center;
    }
    .contact-section1 {
      .image-wrapper {
        width: 100%;
        height: 50.6vh;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 400px) {
    .fax-block {
      display: block;
    }
  }
`;
export { ContactSection, ContactTopBg };
