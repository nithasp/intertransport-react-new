import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const ScrollToTopPage = () => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 0.3,
  });
};

const IntroPageAnimation = () => {
  gsap.fromTo(
    ".logo",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2.5,
      delay: 1,
    }
  );

  gsap.fromTo(
    ".title",
    { opacity: 0, translateX: "20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.7,
      delay: 1.6,
    }
  );

  gsap.fromTo(
    ".subtitle",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.7,
      delay: 2.2,
    }
  );

  gsap.fromTo(
    ".choose-language",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.7,
      delay: 2.9,
    }
  );

  return null;
};

const HomeAnimation = () => {
  gsap.fromTo(
    ".home-section1 .wrapper .title .text",
    { opacity: 0, translateX: "10%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 1,
    }
  );

  gsap.fromTo(
    ".home-section2 .title .text",
    { opacity: 0, translateX: "10%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: ".home-section2 .title .text",
      },
    }
  );

  gsap.fromTo(
    ".home-section2 .title .line1 .inner-line",
    { width: 0 },
    {
      width: "17vh",
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".home-section2 .title .line1 .inner-line",
      },
    }
  );

  gsap.fromTo(
    ".home-section2 .title .line2 .inner-line",
    { width: 0 },
    {
      width: "17vh",
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".home-section2 .title .line2 .inner-line",
      },
    }
  );

  gsap.fromTo(
    ".home-section2 .content .image-wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".home-section2 .content .image-wrapper",
      },
    }
  );

  gsap.fromTo(
    ".home-section2 .content .text",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 3,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".home-section2 .content .text",
      },
    }
  );

  gsap.fromTo(
    ".home-section2 .addresses",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      delay: 0,
      scrollTrigger: {
        trigger: ".home-section2 .addresses",
      },
    }
  );

  gsap.fromTo(
    ".home-section3 .intertransport-container",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      delay: 0,
      scrollTrigger: {
        trigger: ".home-section3 .intertransport-container",
      },
    }
  );
};

const AboutUsAnimation = () => {
  const topArrow = document.querySelectorAll(".top-arrow");
  topArrow.forEach((item) => {
    item.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: { y: ".anchor-points", offsetY: 140 },
        duration: 1,
      });
    });
  });

  const anchorPointItems = document.querySelectorAll(".anchor-points .item");
  anchorPointItems.forEach((item) => {
    const dataTab = item.getAttribute("data-tab");
    const delayTime = item.getAttribute("delay-time") as string;
    const anchorEndPoint = document.querySelector(`.${dataTab}`) as HTMLElement;

    item.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: { y: anchorEndPoint, offsetY: 100 },
        duration: 1,
      });
    });

    gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        delay: delayTime,
        scrollTrigger: {
          trigger: ".anchor-points",
        },
      }
    );
  });

  gsap.fromTo(
    ".about-us-section1 .main-title .wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    ".about-us-section1 .intertransport-container .content",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      delay: 0.8,
    }
  );

  const itemSection2 = document.querySelectorAll(".about-us-section2 .item");
  itemSection2.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
        },
      }
    );
  });
};

const WhyUsAnimation = () => {
  gsap.fromTo(
    ".why-us-section1 .main-title .wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".why-us-section1 .image-wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".why-us-section1 .image-wrapper",
      },
    }
  );

  const paragraphs = document.querySelectorAll(".why-us-section1 .content p");
  if (window.innerWidth > 768) {
    gsap.fromTo(
      ".why-us-section1 .content",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".why-us-section1 .content",
        },
      }
    );
  } else {
    paragraphs.forEach((paragraph) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: paragraph,
          },
        }
      );
    });
  }
};

const OurServicesAnimation = () => {
  const ourServicesImages = document.querySelectorAll(
    ".our-services-items .image"
  );
  const ourServicesContents = document.querySelectorAll(
    ".our-services-items .content"
  );
  gsap.fromTo(
    ".our-services-section1 .main-title .wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
    }
  );

  ourServicesImages.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, translateX: "-20%" },
      {
        opacity: 1,
        translateX: "0%",
        duration: 1.5,
        delay: 0,
        scrollTrigger: {
          trigger: item,
        },
      }
    );
  });

  ourServicesContents.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: item,
        },
      }
    );
  });
};

const OurClientsAnimation = () => {
  gsap.fromTo(
    ".our-clients-section1 .main-title .wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    ".our-clients-section1 .content",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".our-clients-section1 .content",
      },
    }
  );

  gsap.fromTo(
    ".our-clients-section1 .image-wrapper",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".our-clients-section1 .image-wrapper",
      },
    }
  );
};

const ContactAnimation = () => {
  gsap.fromTo(
    ".contact-section1 .main-title .wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 1.5,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".contact-section1 .image-wrapper",
    { opacity: 0, translateX: "-20%" },
    {
      opacity: 1,
      translateX: "0%",
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".contact-section1 .image-wrapper",
      },
    }
  );
  gsap.fromTo(
    ".contact-section1 .content",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".contact-section1 .content",
      },
    }
  );
  gsap.fromTo(
    "#map",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 3,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#map",
      },
    }
  );
};

export {
  ScrollToTopPage,
  IntroPageAnimation,
  HomeAnimation,
  AboutUsAnimation,
  WhyUsAnimation,
  OurServicesAnimation,
  OurClientsAnimation,
  ContactAnimation,
};
