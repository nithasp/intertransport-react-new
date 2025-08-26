import styled from "styled-components";

const Navbar = styled.nav`
  font-family: "CloudLight";
  position: fixed;
  top: 0;
  width: 100%;
  height: 9.7vh;
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 60%);
  background-color: white;
  z-index: 10;

  .navbar-main-container {
    height: 100%;
  }
  .navbar-main-container.preload * {
    animation-duration: 0s !important;
    -webkit-animation-duration: 0s !important;
    transition: background-color 0s, opacity 0s, color 0s, width 0s, height 0s,
      padding 0s, margin 0s !important;
  }

  .navbar-desktop {
    height: 100%;
    .navbar-container {
      width: 70%;
      height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .navbar-item1 {
      img {
        position: relative;
        top: 0.3vh;
        width: 27.2vh;
        height: 9.3vh;
      }
    }
    .navbar-item2 {
      text-align: right;
      margin-right: 6vw;
      .wrapper {
        position: relative;
        display: inline-block;
        text-align: center;
        height: 9.5vh;
        cursor: pointer;
        .title {
          position: relative;
          top: 2.6vh;
          letter-spacing: 0.02em;
          font-size: 3.5vh;
          font-weight: bold;
        }
        .menu {
          position: absolute;
          top: 9.6vh;
          left: 50%;
          transform: translateX(-50%);
          min-width: 20vh;
          background-color: white;
          box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 60%);
          opacity: 0;
          visibility: hidden;
          transition: 0.2s;

          .item {
            display: block;
            padding: 1vh 0;
            transition: 0.2s;
            &:hover {
              background-color: #2f2e2e;
              color: rgb(255, 208, 189);
            }
          }
        }

        .menu.active {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .languages {
      position: absolute;
      right: 2%;
      top: 4%;
      height: 100%;
      .wrapper {
        display: flex;
        align-items: center;
      }
      .line {
        width: 0.1vh;
        height: 4vh;
        background-color: black;
        margin: 0 1.5vh;
      }
      .lang {
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          color: var(--secondary-color);
        }

        img {
          width: 4vh;
          height: 4vh;
        }
        span {
          position: relative;
          top: 0.3vh;
          left: 0.5vh;
        }
      }

      .lang.en {
        margin-right: 2vh;
      }
    }
  }

  .navbar-mobile {
    display: none;
    height: 100%;
    .navbar-container {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .navbar-item1 {
      img {
        position: relative;
        top: 0.3rem;
        right: 0.5rem;
        width: 27.3vh;
        height: 9vh;
      }
    }
    .navbar-item2 {
      text-align: right;
      display: flex;
      justify-content: flex-end;

      .hamburger-menu {
        background-color: white;
        width: auto;
        height: auto;
        display: inline-block;
        padding: 0.3rem 1rem;
        border-radius: 1vh;
        cursor: pointer;
        z-index: 20;
        .line {
          background-color: #fe5c00;
          width: 2rem;
          height: 0.2rem;
          margin: 0.6rem 0;
          transition: 0.3s;
        }
        .line:nth-child(1) {
          animation: line1AnimationReverse 0.3s forwards;
        }
        .line:nth-child(2) {
          animation: line2AnimationReverse 0.3s forwards;
        }
        .line:nth-child(3) {
          animation: line3AnimationReverse 0.3s forwards;
        }
      }
      .hamburger-menu.active {
        .line:nth-child(1) {
          animation: line1Animation 0.3s forwards;
        }
        .line:nth-child(2) {
          animation: line2Animation 0.3s forwards;
        }
        .line:nth-child(3) {
          animation: line3Animation 0.3s forwards;
        }
      }
    }
  }

  .navbar-mobile-menu {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    z-index: 11;
    .navbar-mobile-menu-container {
      background-color: #2f2e2e;
      max-width: 45vh;
      height: 100%;
      padding: 20vh 5vh;
      transform: translateX(-100%);
      transition: 0.3s ease-in;
      .item {
        color: white;
        letter-spacing: 0.2vh;
        margin: 2vh 0;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          color: var(--secondary-color);
        }
      }
      .item:first-child {
        margin-top: 0;
      }

      .languages {
        color: white;
        display: flex;
        align-items: flex-start;
        margin-top: 3vh;
        .wrapper {
          display: flex;
          align-items: center;
        }
        .line {
          width: 0.1vh;
          height: 4vh;
          background-color: black;
          margin: 0 1.5vh;
        }
        .lang {
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            color: var(--secondary-color);
          }

          img {
            width: 4vh;
            height: 4vh;
          }
          span {
            position: relative;
            top: 0.3vh;
            left: 0.5vh;
          }
        }

        .lang.en {
          margin-right: 2vh;
        }
      }
    }
  }
  .navbar-mobile-menu.active {
    opacity: 1;
    visibility: visible;
    .navbar-mobile-menu-container {
      transform: translateX(0%);
    }
  }

  @keyframes line1Animation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.9rem);
    }
    100% {
      transform: translateY(0.9rem) rotate(45deg);
    }
  }
  @keyframes line2Animation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes line3Animation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.7rem);
    }
    100% {
      transform: translateY(-0.7rem) rotate(-45deg);
    }
  }

  @keyframes line1AnimationReverse {
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.9rem);
    }
    0% {
      transform: translateY(0.9rem) rotate(45deg);
    }
  }
  @keyframes line2AnimationReverse {
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
  @keyframes line3AnimationReverse {
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.7rem);
    }
    0% {
      transform: translateY(-0.7rem) rotate(-45deg);
    }
  }

  @media (max-width: 1200px) {
    .navbar-desktop {
      display: none;
    }
    .navbar-mobile {
      display: block;
    }
  }

  @media (max-width: 650px) {
    .navbar-mobile-menu-container {
      max-width: 100% !important;
    }
  }

  @media (max-height: 750px) {
    height: 13vh;
  }

  /* Mobile Landscape */
  @media (max-height: 500px) {
    .navbar-item2 {
      .hamburger-menu {
        padding: 1vh 2vh !important;
        .line {
          width: 8vh !important;
          height: 1vh !important;
          margin: 1.6vh 0 !important;
        }
      }
    }
    .navbar-mobile-menu {
      .navbar-mobile-menu-container {
        .item {
          font-size: 4.5vh;
        }
        .languages {
          .lang {
            span {
              font-size: 4.5vh;
            }
          }
        }
      }
    }

    @keyframes line1Animation {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(2.6vh);
      }
      100% {
        transform: translateY(2.6vh) rotate(45deg);
      }
    }
    @keyframes line2Animation {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes line3Animation {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-2.7vh);
      }
      100% {
        transform: translateY(-2.7vh) rotate(-45deg);
      }
    }
  }
`;
export { Navbar };
