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
        👋 Hi, I&apos;m Emmanuel, a dedicated software engineer with a passion
        for bringing creative ideas to life. Specializing in frontend
        development, I leverage my strong foundation in technologies to create
        user-friendly interfaces that not only embody ideas but also address
        challenges through efficient coding.
        <br />
        <br />
        🚀 My belief centers around the power of clean code and intuitive design
        to navigate through complex issues, ensuring a smooth online experience.
        From optimizing performance to enhancing user interactions and
        overcoming unique development hurdles, I excel in turning obstacles into
        opportunities.
        <br />
        <br />
        💬 Effective communication is at the core of my approach. I excel in
        translating complex technical concepts into clear, understandable
        language for both technical and non-technical stakeholders. Whether
        it&apos;s discussing project requirements with team members or
        presenting solutions to clients, I prioritize clarity and transparency.
        <br />
        <br />
        🤝 Collaboration is a key strength of mine. I thrive in team
        environments, valuing diverse perspectives and actively contributing to
        a collective effort. My collaborative approach extends to
        cross-functional teams, where I appreciate the synergy of combining
        technical expertise with insights from other disciplines to achieve
        holistic solutions.
        <br />
        <br />
        🎨 When I&apos;m not immersed in code, you&apos;ll find me exploring the
        latest UI trends, enjoying a cup of coffee, and translating lines of
        code into visual stories. Let&apos;s connect, collaborate, and turn your
        web aspirations into a tangible reality!
      </motion.p>
    </article>
  );
};

export default PersonalBio;
