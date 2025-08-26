import styled from "styled-components";

import bg from "../../assets/img/intro/IMG_2979.jpg";

const IntroPageSection = styled.section`
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-color: white;
  color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.9;
    z-index: -1;
  }
  .wrapper {
    text-align: center;
  }
  .logo {
    margin: 0 0 2.368vh 0;
    img {
      width: 27.2vh;
      height: 9.3vh;
    }
  }
  .title {
    font-size: 4.413vh;
    font-family: "PlayfairDisplay-Regular";
    margin: 0 0 1.614vh 0;
  }
  .subtitle {
    font-size: 3.336vh;
    font-family: "CloudLight";
    color: var(--secondary-color);
    margin: 0 0 5.705vh 0;
  }
  .choose-language {
    .btn {
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: var(--secondary-color);
      }
    }
    .line {
      width: 0.1vh;
      height: 6vh;
      background-color: black;
      margin: 0 5vh;
    }
  }

  @media (max-width: 1280px) {
    .subtitle {
      font-size: 4.336vh;
      font-family: "TH-Sarabun-New-Bold";
    }
    .title {
      font-size: 4.413vh;
    }
  }

  @media (max-width: 576px) {
    .wrapper {
      padding: 0 2rem;
    }
  }
`;

export {IntroPageSection}