import React from "react";
import { motion } from "framer-motion";
import { ScrollToTopPage } from "../utils/IntertransportAnimations";

const AnimatedPage = ({ children }: { children?: React.ReactNode }) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => ScrollToTopPage()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
