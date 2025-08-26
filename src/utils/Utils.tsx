import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../context";

const ChangePageTitle = () => {
  const { pathname } = useLocation();
  const { langState } = UseGlobalContext();

  useEffect(() => {
    const checkPath = () => {
      if (langState === "th") {
        if (pathname === "/") {
          document.title =
            "Intertransport and Logistics Co., Ltd. | Rayong, Thailand";
        } else if (pathname === "/home") {
          document.title = "หน้าแรก | Intertransport";
        } else if (pathname === "/about-us") {
          document.title = "เกี่ยวกับเรา | Intertransport";
        } else if (pathname === "/why-us") {
          document.title = "ทำไมต้องเรา | Intertransport";
        } else if (pathname === "/our-services") {
          document.title = "บริการของเรา | Intertransport";
        } else if (pathname === "/our-clients") {
          document.title = "ลูกค้าที่ไว้วางใจ | Intertransport";
        } else if (pathname === "/contact") {
          document.title = "ติดต่อเรา | Intertransport";
        }
      }

      if (langState === "en") {
        if (pathname === "/") {
          document.title =
            "Intertransport and Logistics Co., Ltd. | Rayong, Thailand";
        } else if (pathname === "/home") {
          document.title = "Home | Intertransport";
        } else if (pathname === "/about-us") {
          document.title = "About Us | Intertransport";
        } else if (pathname === "/why-us") {
          document.title = "Why Us | Intertransport";
        } else if (pathname === "/our-services") {
          document.title = "Our Services | Intertransport";
        } else if (pathname === "/our-clients") {
          document.title = "Our Clients | Intertransport";
        } else if (pathname === "/contact") {
          document.title = "Contact | Intertransport";
        }
      }
    };

    document.body.className = "";
    document.body.classList.add(`lang-${langState}`);
    checkPath();
  }, [pathname, langState]);

  return null;
};

export { ChangePageTitle };
