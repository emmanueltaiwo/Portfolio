import React from "react";
import { motion } from "framer-motion";

interface AboutSectionLeftProps {
  textVariants: any;
}

const AboutSectionLeft = (props: AboutSectionLeftProps) => {
  const { textVariants } = props;
  return (
    <article className="mt-[5vh] mx-5 md:mx-10 lg:mx-10 xl:mx-20">
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl font-extrabold text-slate-800"
      >
        About Me
      </motion.h3>

      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="lg:w-[500px] font-roboto xl:w-[600px] text-[16.5px] md:text-[18px] text-slate-800 mt-[5vh]"
      >
        👋 Hello! I&apos;m Emmanuel, a passionate frontend developer on a
        mission to turn ideas into beautifully functional web experiences. With
        a strong foundation in HTML, CSS, JavaScript, and TypeScript, along with
        the creative touch of Tailwind CSS, I specialize in creating
        user-friendly interfaces that not only bring design concepts to life but
        also love solving problems through my skills.
        <br />
        <br />
        🚀 My toolkit includes React.js and Next.js, and I believe in harnessing
        the power of clean code and intuitive design to solve complex challenges
        and create memorable online journeys. Whether it&apos;s optimizing
        performance, enhancing user experiences, or tackling unique development
        hurdles, I thrive on turning obstacles into opportunities.
        <br />
        <br />
        🎨 When I&apos;m not coding, you&apos;ll find me exploring new UI
        trends, sipping coffee, and turning lines of code into visual stories.
        Let&apos;s connect, collaborate, and turn your web dreams into reality!
      </motion.p>
    </article>
  );
};

export default AboutSectionLeft;
