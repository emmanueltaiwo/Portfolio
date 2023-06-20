import React, { useEffect } from "react";
import Button from "../Button/Button";
import StackButton from "../Button/StackButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectList = ({
  title,
  description,
  projectImage,
  skills,
  repo,
  demo,
}) => {
  const getSkills = () => {
    return skills.map((skill) => {
      return <StackButton key={skill}>{skill}</StackButton>;
    });
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const sectionVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="flex flex-col w-full pb-24">
      <motion.div
        className="box"
        ref={ref}
        variants={sectionVariant}
        initial="hidden"
        animate={control}
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-7 xl:gap-16 grid-cols-1">
          <div>
            <h1 className="font-righteous text-3xl font-black">{title}</h1>
            <p className="mt-5 mr-5 text-neutral-500">{description}</p>
            <div className="mt-5 flex gap-3 flex-wrap">{getSkills()}</div>
          </div>

          <div>
            <div className="border-4 p-1 pb-3 xl:pb-0 border-blue-400 rounded">
              <img src={projectImage} alt="" className="w-auto" />
              <div className="grid gap-2 grid-rows-2 xl:grid-cols-2 md:grid-rows-2 mt-5">
                <a href={demo} className="flex" target="_blank">
                  <Button>View Demo</Button>
                </a>
                <a href={repo} className="flex" target="_blank">
                  <Button>Github Repo</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectList;
