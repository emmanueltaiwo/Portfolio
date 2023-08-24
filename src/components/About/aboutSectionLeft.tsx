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
        className="lg:w-[500px] font-roboto xl:w-[600px] text-[16.5px] md:text-[20px] text-slate-800 mt-[5vh]"
      >
        👋 Hello! I&apos;m Emmanuel, a passionate frontend developer on a
        mission to turn ideas into beautifully functional web experiences. With
        a strong foundation in HTML, CSS, JavaScript, Typescript, Tailwind css I
        create user-friendly interfaces that bring design concepts to life.
        <br />
        <br />
        🚀 My toolkit includes React.js, Next.js, and a touch of creative magic
        to craft responsive and engaging websites. I&apos;m a firm believer in the
        power of clean code and intuitive design to create memorable online
        journeys.
        <br />
        <br />
        🎨 When I&apos;m not coding, you&apos;ll find me exploring new UI
        trends, sipping coffee, and turning lines of code into visual stories.
        Let&spos;s connect, collaborate, and turn your web dreams into reality!
      </motion.p>
    </article>
  );
};

export default AboutSectionLeft;
