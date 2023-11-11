import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LandingPageContentLeftProps {
  textVariants: any;
}

const Gallery = ({ textVariants }: LandingPageContentLeftProps) => {
  return (
    <motion.section
      variants={textVariants}
      initial="hidden"
      animate="visible"
      className="grid w-full lg:grid-cols-2 grid-cols-1 gap-10"
    >
      <Image
        src="/assets/Images/spendsense_banner.png"
        width={1000}
        height={1000}
        alt="Spendsense"
        className="w-full"
      />
      <Image
        src="/assets/Images/spendsense_gallery.png"
        width={1000}
        height={1000}
        alt="Spendsense"
        className="w-full"
      />
    </motion.section>
  );
};

export default Gallery;
