import React from "react";
import Card from "../UI/Card";
import CustomSection from "../UI/CustomSection";
import ProjectList from "./ProjectList";
import CustomHeaderText from "../UI/CustomHeaderText";
import CustomEmoji from "../UI/CustomEmoji";
import CustomParagraphText from "../UI/CustomParagraphText";
import { motion } from "framer-motion";

const ProjectMain = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const projectData = [
    {
      id: 1,
      title: "Food Mart",
      description:
        "Food Mart is a Full-Stack E-commerce web app made with Next.js, Tailwind, Redux, Next/Link, Next/Router, Firebase, NextAuth, Stripe. And deployed using Github and Vercel",
      projectImage:
        "https://i.ibb.co/R2SGCwn/Screenshot-2023-03-16-at-10-27-27-AM.png",
      skills: [
        "Next.js",
        "Redux",
        "Firebase",
        "Tailwind css",
        "Next Auth",
        "Stripe",
      ],
      repo: "https://github.com/realemmanuel/food-mart",
      demo: "https://emmanuelfood-mart.vercel.app/",
    },
    {
      id: 2,
      title: "Linkedin Clone",
      description:
        "This Project is a Linkedin Clone where users can create account and sign in and can also post on the app",
      projectImage:
        "https://i.ibb.co/2q0Tvcn/Screenshot-2023-03-16-at-10-27-42-AM.png",
      skills: ["React.js", "Redux", "CSS", "Firebase"],
      repo: "https://github.com/realemmanuel/linkedin-clone",
      demo: "",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "Expense Tracker is an app where users can create expenses by inputing the Title, Amount, Date. And users can also filter the expenses by year",
      projectImage:
        "https://i.ibb.co/s6jWR8Z/Screenshot-2023-03-16-at-10-44-16-AM.png",
      skills: ["React.js", "CSS"],
      repo: "https://github.com/realemmanuel/expense-tracker",
      demo: "https://emmanuelexpense-tracker.vercel.app/",
    },
    {
      id: 4,
      title: "SportPals",
      description:
        "SportPals is a sport-centric application designed to cater to passionate fans, with a primary focus on football.",
      projectImage:
        "https://i.ibb.co/PWZH0Z2/Screenshot-2023-06-20-at-8-28-48-AM.png",
      skills: ["Next.js", "API", "Tailwind css", "Firebase", "TypeScript"],
      repo: "https://github.com/realemmanuel/sportpals",
      demo: "https://sportpals.vercel.app/",
    },
    {
      id: 5,
      title: "Task Planner",
      description:
        "Daily Task Planner is a web app that helps you manage your daily tasks and make you day more productive with its built in features",
      projectImage:
        "https://i.ibb.co/GdMrcDP/Screenshot-2023-03-16-at-10-36-37-AM.png",
      skills: ["React.js", "Tailwind css"],
      repo: "https://github.com/realemmanuel/Task-Planner",
      demo: "https://emmanueltask-planner.vercel.app/",
    },
  ];
  return (
    <Card>
      <CustomSection>
        <motion.h1
          className="text-center ml-auto mr-auto px-3 text-3xl xl:text-6xl md:text-5xl sm:text-left font-black font-righteous"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomHeaderText>MY PROJECTS</CustomHeaderText>
        </motion.h1>
        <motion.p
          className="text-center ml-auto mr-auto px-3 text-[15px] sm:text-lg text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomEmoji>🛠️</CustomEmoji>
        </motion.p>

        <motion.p
          className="text-center ml-auto mr-auto lg:px-3 text-[15px] sm:text-lg text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomParagraphText>
            Here you will find some of the personal projects that I created with
            each project containing links to a github repo and live demo
          </CustomParagraphText>
        </motion.p>
      </CustomSection>

      <main className="mt-20 grid gap-10 ml-5 mr-5 xl:ml-32 xl:mr-32 justify-center xl:flex-row md:flex-row sm:flex-row">
        {projectData.map((project) => {
          return (
            <ProjectList
              key={project.id}
              title={project.title}
              description={project.description}
              projectImage={project.projectImage}
              skills={project.skills}
              repo={project.repo}
              demo={project.demo}
            />
          );
        })}
      </main>
    </Card>
  );
};

export default ProjectMain;
