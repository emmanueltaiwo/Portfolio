import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingPageContentLeft from "../LandingPage/landingPageContentLeft";
import LandingPageContentRight from "../LandingPage/landingPageContentRight";

const LandingPage = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  return (
    <main className="w-full h-[100vh] mt-[4rem] lg:mt-0 flex gap-5 flex-col lg:flex-row lg:justify-around xl:justify-between lg:items-center">
      <LandingPageContentLeft textVariants={textVariants} />
      <LandingPageContentRight textVariants={textVariants} />
    </main>
  );
};

export default LandingPage;
