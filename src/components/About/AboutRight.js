import React from "react";
import TechStack from "./TechStack";
import CustomMediumText from "../UI/CustomMediumText";
import { motion } from "framer-motion";

const AboutRight = () => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const techStackList = [
    {
      id: 1,
      name: "HTML",
      logo: "https://i.ibb.co/hDGs81x/pngegg-4.png",
    },
    {
      id: 2,
      name: "CSS",
      logo: "https://i.ibb.co/bBJbfgt/pngegg-6.png",
    },
    {
      id: 3,
      name: "SCSS",
      logo: "https://i.ibb.co/0GCvRx0/Seek-Png-com-css3-logo-png-1415689.png",
    },
    {
      id: 4,
      name: "GIT",
      logo: "https://i.ibb.co/xz3Td3c/pngegg-3.png",
    },
    {
      id: 5,
      name: "GITHUB",
      logo: "https://i.ibb.co/hBZgb6g/pngwing-com-2.png",
    },
    {
      id: 6,
      name: "REACTJS",
      logo: "https://i.ibb.co/QkLpJdw/pngegg-2.png",
    },
    {
      id: 7,
      name: "REDUX",
      logo: "https://i.ibb.co/yYXCFm9/pngegg-1.png",
    },
    {
      id: 8,
      name: "NEXTJS",
      logo: "https://i.ibb.co/Qdv64nn/Next-js.png",
    },
    {
      id: 9,
      name: "NETLIFY",
      logo: "https://i.ibb.co/FHqvBSw/pngegg.png",
    },
    {
      id: 10,
      name: "VERCEL",
      logo: "https://i.ibb.co/V01jtNs/Vercel.png",
    },
    {
      id: 11,
      name: "FIREBASE",
      logo: "https://i.ibb.co/HCw8pmT/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460-4730334415239628303.png",
    },
    {
      id: 12,
      name: "TAILWIND CSS",
      logo: "https://i.ibb.co/MGMqjQZ/tailwind-css-icon.png",
    },
    {
      id: 13,
      name: "MATERIAL UI",
      logo: "https://i.ibb.co/S32SfM1/pngwing-com-3.png",
    },
    {
      id: 14,
      name: "JAVASCRIPT",
      logo: "https://i.ibb.co/Nx6y14m/javascript.png",
    },
  ];
  return (
    <div className="xl:w-6/12 md:w-2/5 select-none">
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <CustomMediumText>My Tech Stack</CustomMediumText>
        <div className="mt-10 mx-2 flex flex-wrap">
          {techStackList.map((tech) => {
            return (
              <TechStack title={tech.name} logo={tech.logo} key={tech.id} />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutRight;
