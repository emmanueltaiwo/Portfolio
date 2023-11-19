import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../database/projectsData";

interface LandingPageContentLeftProps {
  textVariants: any;
}

const Gallery = ({ textVariants }: LandingPageContentLeftProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <motion.section
      variants={textVariants}
      initial="hidden"
      animate="visible"
      className="grid w-full lg:grid-cols-2 grid-cols-1 gap-3"
    >
      {projectsData.map((data, index) => (
        <div
          key={data.id}
          className="relative cursor-pointer transition-all duration-500"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Image
            src={data.coverImg}
            width={1000}
            height={1000}
            alt={data.alt}
            className="w-full"
          />
          {hoveredIndex === index && (
            <div
              className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center gap-5"
              style={{
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <Link
                href={`/projects/${data.id}`}
                className="w-[80%] md:w-[35%] lg:w-[50%] xl:w-[35%] text-center h-fit px-14 py-3 bg-[#5e18a4] text-[#defb81] rounded-lg hover:border-[2px] "
              >
                View Project
              </Link>
              <a
                href={data.liveLink}
                target="_blank"
                className="w-[80%] md:w-[35%] lg:w-[50%] xl:w-[35%] text-center h-fit px-14 py-3 bg-none border-[2px] border-[#e7d3ff] text-[#e7d3ff] rounded-lg"
              >
                Live Demo
              </a>
            </div>
          )}
        </div>
      ))}
    </motion.section>
  );
};

export default Gallery;
