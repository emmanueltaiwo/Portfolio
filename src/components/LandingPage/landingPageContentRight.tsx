import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LandingPageContentRightProps {
  textVariants: any;
}

const LandingPageContentRight = (props: LandingPageContentRightProps) => {
  const { textVariants } = props;
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      className="md:mt-5 mx-5 lg:mx-10 xl:mx-20 lg:mt-0"
    >
      <Image
        src="/assets/Images/hero.gif"
        width={150}
        height={150}
        className="lg:min-w-[400px] min-w-[320px] md:min-w-[500px] sm:min-w-[450px] mx-auto xl:min-w-[500px]"
        alt="Hero Image"
        priority
      />
    </motion.div>
  );
};

export default LandingPageContentRight;
