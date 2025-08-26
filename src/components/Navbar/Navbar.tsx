import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./Navbar.styled";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/intertransport-logo.png";
import enFlag from "../../assets/img/en.svg";
import thFlag from "../../assets/img/th.svg";
import { UseGlobalContext } from "../../context";

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);

  const { setLangState } = UseGlobalContext();

  const navbarMobileMenu = useRef<HTMLDivElement>(null);
  const navbarMainContainer = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangState(lang);
    setIsHamburgerMenuActive(false);
    setIsMobileMenuActive(false);
  };

  const removeNavbarPreload = () => {
    setTimeout(() => {
      navbarMainContainer.current?.classList.remove("preload");
    }, 300);
  };

  const changePageDesktop = (pageName: string) => {
    navigate(pageName);
    setIsMenuActive(false);
  };

  const changePageMobile = (pageName: string) => {
    navigate(pageName);
    setIsHamburgerMenuActive(false);
    setIsMobileMenuActive(false);
  };

  const checkWindowInnerWidth = () => {
    if (window.innerWidth > 1200) {
      setIsHamburgerMenuActive(false);
      setIsMobileMenuActive(false);
    }
  };

  useEffect(() => {
    removeNavbarPreload();
    window.addEventListener("resize", checkWindowInnerWidth);
    return () => {
      window.removeEventListener("resize", checkWindowInnerWidth);
    };
  }, []);

  return (
    <Navbar
      style={{ display: `${location.pathname === "/" ? "none" : "block"}` }}
    >
      <div className="navbar-main-container preload" ref={navbarMainContainer}>
        <div className="navbar-desktop">
          <div className="navbar-container">
            <div className="navbar-item1">
              <Link to="/home">
                <img alt="" src={logo} />
              </Link>
            </div>
            <div className="navbar-item2">
              <div
                className="wrapper"
                onMouseOver={() => setIsMenuActive(true)}
                onMouseOut={() => setIsMenuActive(false)}
              >
                <div className="title">{t("navbar.menu-title")}</div>
                <div className={`menu ${isMenuActive ? "active" : ""}`}>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("home")}
                  >
                    {t("navbar.item1")}
                  </div>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("about-us")}
                  >
                    {t("navbar.item2")}
                  </div>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("why-us")}
                  >
                    {t("navbar.item3")}
                  </div>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("our-services")}
                  >
                    {t("navbar.item4")}
                  </div>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("our-clients")}
                  >
                    {t("navbar.item5")}
                  </div>
                  <div
                    className="item"
                    onClick={() => changePageDesktop("contact")}
                  >
                    {t("navbar.item6")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="languages flex-center">
            <div className="wrapper">
              <div className="lang en" onClick={() => changeLanguage("en")}>
                <img alt="" src={enFlag} />
                <span>EN</span>
              </div>
              {/* <div className="line"></div> */}
              <div className="lang th" onClick={() => changeLanguage("th")}>
                <img alt="" src={thFlag} />
                <span>TH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-mobile">
          <div className="navbar-container">
            <div className="navbar-item1">
              <Link to="/home">
                <img alt="" src={logo} />
              </Link>
            </div>
            <div className="navbar-item2">
              <div
                className={`${
                  isHamburgerMenuActive ? "active " : ""
                }hamburger-menu`}
                onClick={() => {
                  setIsHamburgerMenuActive(!isHamburgerMenuActive);
                  setIsMobileMenuActive(!isMobileMenuActive);
                }}
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuActive ? "active " : ""}navbar-mobile-menu`}
        ref={navbarMobileMenu}
      >
        <div className="navbar-mobile-menu-container">
          <div className="link">
            <div className="item" onClick={() => changePageMobile("home")}>
              {t("navbar-mobile-menu.item1")}
            </div>
            <div className="item" onClick={() => changePageMobile("about-us")}>
              {t("navbar-mobile-menu.item2")}
            </div>
            <div className="item" onClick={() => changePageMobile("why-us")}>
              {t("navbar-mobile-menu.item3")}
            </div>
            <div
              className="item"
              onClick={() => changePageMobile("our-services")}
            >
              {t("navbar-mobile-menu.item4")}
            </div>
            <div
              className="item"
              onClick={() => changePageMobile("our-clients")}
            >
              {t("navbar-mobile-menu.item5")}
            </div>
            <div className="item" onClick={() => changePageMobile("contact")}>
              {t("navbar-mobile-menu.item6")}
            </div>
          </div>
          <div className="languages">
            <div className="wrapper">
              <div className="lang en" onClick={() => changeLanguage("en")}>
                <img alt="" src={enFlag} />
                <span>EN</span>
              </div>
              <div className="lang th" onClick={() => changeLanguage("th")}>
                <img alt="" src={thFlag} />
                <span>TH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
