import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LandingPageContentLeftProps {
  textVariants: any;
}

const LandingPageContentLeft = (props: LandingPageContentLeftProps) => {
  const { textVariants } = props;
  return (
    <div className="flex flex-col gap-1 lg:mx-10 xl:mx-20 mx-5 sm:mx-10 lg:mt-0 mt-10">
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-[20px] text-blue-700 font-medium font-roboto tracking-wider"
      >
        Hi, My Name Is,
      </motion.h3>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-[40px] lg:text-[55px] xl:text-[70px] sm:text-[70px] font-bold"
      >
        Emmanuel Taiwo
      </motion.h1>
      <motion.h2
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-[25px] xl:text-[40px] font-roboto lg:text-[25px] sm:text-[40px] text-gray-700 font-extrabold"
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="md:w-[600px] xl:w-[600px] lg:w-[350px] text-[15px] text-gray-700 font-medium"
      >
        Passionate Frontend Developer skilled in optimizing web performance and
        staying current with industry trends.
      </motion.p>
      <motion.a
        variants={textVariants}
        initial="hidden"
        animate="visible"
        href="/assets/documents/Taiwo Emmanuel Resume.pdf"
        target="_blank"
        className="mt-3 w-fit h-fit flex gap-3 items-center justify-center text-lg font-bold border-[1px] py-2 border-blue-500 px-[3vh] hover:border-black rounded-md "
      >
        <Image
          src="/assets/Images/download.gif"
          width={40}
          height={40}
          alt="Hero Image"
        />
        <span className="text-[15px] text-blue-500 hover:text-black">
          My Resume
        </span>
      </motion.a>
    </div>
  );
};

export default LandingPageContentLeft;
