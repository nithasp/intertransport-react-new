import styled from "styled-components";
const Footer = styled.footer`
  position: relative;
  background-color: #2f2e2e;
  font-size: 1.937vh;
  font-family: "CloudLight";
  text-align: right;
  padding: 1.3vh 0;
  .wrapper {
    width: 105vh;
    margin: 0 auto;
  }
  .footer-item1 {
    font-size: 2.1vh;
    color: rgb(255, 208, 189);
  }
  .footer-item2 {
    color: white;
  }

  @media (max-width: 1200px) {
    .wrapper {
      width: auto;
      padding: 0 2rem;
    }
    .footer-item1 {
      font-size: 1.1rem;
      color: rgb(255, 208, 189);
    }
    .footer-item2 {
      font-size: 1.05rem;
      color: white;
    }
  }
  @media (max-width: 576px) {
    .wrapper {
      width: auto;
      padding: 0 1rem;
    }
  }
`;
export { Footer };
