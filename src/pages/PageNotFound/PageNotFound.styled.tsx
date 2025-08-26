import styled from "styled-components";
const PageNotFoundSection = styled.section`
  #notfound {
    position: relative;
    height: 100vh;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-width: 70%;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    padding: 15px;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 25vh;
  }

  .notfound .notfound-404 h1 {
    font-family: "Kanit", sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 20vh;
    font-weight: 200;
    margin: 0px;
    background: linear-gradient(130deg, #ffa34f, #ff6f68);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  .notfound h2 {
    font-family: "Cloud-Semibold";
    font-size: 4vh;
    font-weight: 200;
    text-transform: uppercase;
    margin: 2vh 0;
    letter-spacing: 3px;
  }

  .notfound p {
    font-family: "CloudLight";
    font-size: 2.7vh;
    font-weight: 200;
  }

  .notfound a {
    display: inline-block;
    font-family: "Kanit", sans-serif;
    color: #ff6f68;
    font-weight: 200;
    text-decoration: none;
    border-bottom: 1px dashed #ff6f68;
    border-radius: 2px;
    margin-top: 1vh;
  }

  .notfound-social > a {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    font-size: 14px;
    color: #ff6f68;
    border: 1px solid #efefef;
    border-radius: 50%;
    margin: 3px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
  .notfound-social > a:hover {
    color: #fff;
    background-color: #ff6f68;
    border-color: #ff6f68;
  }

  @media (max-width: 576px) {
    .notfound {
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    .notfound .notfound-404 {
      position: relative;
      height: 168px;
    }

    .notfound .notfound-404 h1 {
      font-size: 142px;
    }

    .notfound h2 {
      font-size: 22px;
    }
  }
`;
export { PageNotFoundSection };
