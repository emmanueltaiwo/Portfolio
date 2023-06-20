import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import Card from "../UI/Card";
import CustomSection from "../UI/CustomSection";
import CustomHeaderText from "../UI/CustomHeaderText";
import CustomEmoji from "../UI/CustomEmoji";
import CustomParagraphText from "../UI/CustomParagraphText";
import { motion } from "framer-motion";

const AboutMain = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  return (
    <Card>
      <CustomSection>
        <motion.h1
          className="text-center ml-auto mr-auto px-3 text-3xl xl:text-6xl md:text-5xl sm:text-left font-black font-righteous"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomHeaderText>ABOUT ME</CustomHeaderText>
        </motion.h1>
        <motion.p
          className="text-center ml-auto mr-auto px-3 text-[15px] sm:text-lg text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomEmoji>😁</CustomEmoji>
        </motion.p>

        <motion.p
          className="text-center ml-auto mr-auto px-3 text-[15px] sm:text-lg text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomParagraphText>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming & technology
          </CustomParagraphText>
        </motion.p>
      </CustomSection>

      <main className="mt-20 flex flex-col gap-10 ml-5 mr-5 justify-center xl:flex-row md:flex-row sm:flex-row pb-24 h-full">
        <AboutLeft />

        <AboutRight />
      </main>
    </Card>
  );
};

export default AboutMain;
