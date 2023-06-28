import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import HomeBackground from "../UI/HomeBackground";
import Link from "next/link";

const HomeMain = () => {
  const router = useRouter();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  return (
    <HomeBackground>
      <motion.h1
        className="text-center ml-auto mr-auto px-3 text-3xl xl:text-6xl md:text-5xl sm:text-left font-black font-righteous"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        HEY, I&apos;M EMMANUEL TAIWO 👋
      </motion.h1>
      <motion.p
        className="text-center ml-auto mr-auto px-3 text-[15px] sm:text-lg text-gray-600"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        A Frontend developer building my version of the digital world one step
        at a time.
      </motion.p>
      <div className="w-full flex gap-1 md:gap-3 flex-row items-center sm:flex-row justify-center space-x-4  animate-none">
        {" "}
        <motion.div
          className="flex-shrink-0"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="/assets/documents/My Resume.pdf" target="_blank">
            <Button>Resume</Button>
          </a>
        </motion.div>
        <motion.div
          onClick={() => router.push("/projects")}
          className="flex-shrink-0"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button>Projects</Button>
        </motion.div>
      </div>
    </HomeBackground>
  );
};

export default HomeMain;
