import React from "react";
import Gallery from "../Gallery";
import { motion } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  return (
    <main className="w-full h-fit py-10 mt-20 md:mt-[8rem] flex gap-20 flex-col">
      <div className="flex flex-col gap-4  lg:ml-[15vh] xl:mx-[25vh] mx-5 sm:mx-10 lg:mt-0 mt-10">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[35px] lg:text-[80px] xl:text-[90px] text-[#defb81] sm:text-[70px] font-[600]"
        >
          Emmanuel Taiwo
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="md:w-[600px] xl:w-[800px] lg:w-[650px] xl:text-[30px] lg:text-[20px] text-[17px] text-[#e7d3ff] font-[500] md:font-[300] xl:leading-[40px]"
        >
          I&apos;m a software engineer, turning creative ideas into functioning
          applications. I use code to solve problems efficiently.
        </motion.p>
        <motion.a
          variants={textVariants}
          initial="hidden"
          animate="visible"
          href="/assets/documents/Taiwo Emmanuel Resume.pdf"
          download
          target="_blank"
          className="mt-2 md:mt-5 w-fit h-fit flex gap-3 items-center justify-center text-lg font-[500] md:font-[200] border-[2px] md:border-[1px] hover:border-[2px] py-3 border-[#e7d3ff] px-14 text-[#e7d3ff] hover:border-blue-500 rounded-md "
        >
          <CloudDownloadIcon />
          My Resume
        </motion.a>
      </div>
      <Gallery textVariants={textVariants} />
    </main>
  );
};

export default HeroSection;
