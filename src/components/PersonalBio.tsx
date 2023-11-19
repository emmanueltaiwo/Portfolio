import React from "react";
import { motion } from "framer-motion";

interface AboutSectionLeftProps {
  textVariants: any;
}

const PersonalBio = (props: AboutSectionLeftProps) => {
  const { textVariants } = props;
  return (
    <article className="mt-[10vh] mx-5 md:mx-10 lg:mx-[15vh] xl:ml-[25vh]">
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl font-extrabold text-[#defb81]"
      >
        About Me
      </motion.h3>

      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="w-full font-roboto text-[16.5px] md:text-[18px] text-[#e7d3ff] mt-[5vh]"
      >
        👋 Hello! I&apos;m Emmanuel, a passionate frontend developer on a
        mission to turn ideas into beautifully functional web experiences. With
        a strong foundation in frontend technologies, I specialize in creating
        user-friendly interfaces that not only bring ideas to life but also love
        solving problems through my skills.
        <br />
        <br />
        🚀I believe in harnessing the power of clean code and intuitive design
        to solve complex challenges and create smooth online experience. Whether
        it&apos;s optimizing performance, enhancing user experiences, or
        tackling unique development hurdles, I thrive on turning obstacles into
        opportunities.
        <br />
        <br />
        🎨 When I&apos;m not coding, you&apos;ll find me exploring new UI
        trends, sipping coffee, and turning lines of code into visual stories.
        Let&apos;s connect, collaborate, and turn your web dreams into reality!
      </motion.p>
    </article>
  );
};

export default PersonalBio;
