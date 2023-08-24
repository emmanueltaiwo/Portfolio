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
      <motion.div
        ref={ref}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/assets/images/leaf-icon-bottom.svg"
          width={200}
          height={200}
          alt="leaf-icon-bottom"
          className="w-[150px] sm:w-[200px] absolute top-[300px] xl:right-0 xl:left-0 lg:left-[-0px]"
        />

        <Image
          src="/assets/images/leaf-icon-top.svg"
          width={200}
          height={200}
          alt="leaf-icon-bottom"
          className="w-[150px] sm:w-[200px] absolute top-[50px] right-0"
        />

        <Image
          src="/assets/images/blue-circle.svg"
          width={50}
          height={50}
          alt="leaf-icon-bottom"
          className="w-[50px] sm:w-[50px] hidden lg:block absolute top-[150px] left-[100px]"
        />
      </motion.div>
      <LandingPageContentLeft textVariants={textVariants} />
      <LandingPageContentRight textVariants={textVariants} />
    </main>
  );
};

export default LandingPage;
