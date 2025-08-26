import styled from "styled-components";
import OurClientsBg from "../../assets/img/our-clients/our-clients-head-bg.png";

const OurClientsTopBg = styled.div`
  .inner-bg {
    background: url(${OurClientsBg});
    background-size: cover !important;
  }
`;

const OurClientsSection = styled.section`
 
  .our-clients-section1 {
    padding: 7vh 0;
    background-color: white;
    .main-title {
      margin-bottom: 5vh;
    }
    .content {
      ol {
        display: grid;
        grid-template-columns: 0.2fr 0.2fr;
        gap: 10vh;
        justify-content: center;
      }
      li {
        margin: 0.5vh 0;
        white-space: nowrap;
      }
    }
    .image-wrapper {
      text-align: center;
      margin-top: 8vh;
      img {
        /* width: 65vh;
        height: 49vh; */
      }
    }
  }

  @media (max-width: 1200px) {
    .our-clients-section1 {
      .content {
        .li-wrapper {
          padding-left: 10vw;
        }
        ol {
          grid-template-columns: 1fr;
          gap: 0;
        }
        li {
          white-space: normal;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .our-clients-section1 {
      .image-wrapper {
        img {
          /* width: 100%;
          height: 70vw; */
        }
      }
      .content {
        ol {
          grid-template-columns: 1fr;
          gap: 0;
        }
        li {
          white-space: normal;
        }
      }
      .li-wrapper:first-child {
        li:last-child {
          margin: 0;
        }
      }
    }
  }
`;
export { OurClientsSection, OurClientsTopBg };
