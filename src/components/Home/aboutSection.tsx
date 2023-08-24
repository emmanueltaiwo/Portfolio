import React from "react";
import AboutSectionLeft from "../About/aboutSectionLeft";
import AboutSectionRight from "../About/aboutSectionRight";

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  return (
    <section
      className="w-full bg-white h-full py-10 pb-[20vh] flex gap-5 flex-col lg:flex-row justify-around xl:justify-between"
      id="about"
    >
      <AboutSectionLeft textVariants={textVariants} />
      <AboutSectionRight />
    </section>
  );
};

export default AboutSection;
