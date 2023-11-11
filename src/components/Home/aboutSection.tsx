import React from "react";
import PersonalBio from "../PersonalBio";
import { techStackList } from "../../database/techStackData";
import TechStack from "../TechStack";

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
      className="w-full bg-white h-full py-10 pb-[20vh] flex gap-5 flex-col xl:flex-row justify-around xl:justify-between"
      id="about"
    >
      <PersonalBio textVariants={textVariants} />
      <article className="tems-center md:mx-10 xl:mx-[20vh] lg:mx-[15vh] mt-[5vh] mx-5 flex flex-wrap gap-10">
        {techStackList.map((data) => (
          <TechStack name={data.name} logo={data.logo} key={data.id} />
        ))}
      </article>
    </section>
  );
};

export default AboutSection;
