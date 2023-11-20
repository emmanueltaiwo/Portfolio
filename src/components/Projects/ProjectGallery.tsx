import React, { useState } from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { projectsData } from "../../database/projectsData";
import Project from "./Project";
import { motion } from "framer-motion";

const AllProjects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [search, setSearch] = useState("");

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
  };

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    setFilteredProjects(
      projectsData.filter(
        (data) =>
          data.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.description.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <main className="w-full mt-[10vh] md:mt-[15vh] h-full py-10">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="mx-5 lg:mx-[15vh] xl:mx-[25vh] text-[40px] md:text-[60px] lg:text-[70px] text-[#defb81] font-extrabold"
      >
        View My Work
      </motion.h1>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="lg:w-[50%] md:w-[60%] w-[90%] sm:w-[80%] border-b-[1px]  border-[#defb81] sm:gap-5 lg:mx-[15vh] mx-5 xl:mx-[25vh] mt-5 flex items-center"
      >
        <SavedSearchIcon className="ml-5 text-[#e7d3ff]" />
        <input
          type="search"
          className="w-full text-[#e7d3ff] placeholder:text-[#e7d3ff] mx-auto md:mx-0 bg-transparent py-3 px-3 text-[15px] sm:text-lg outline-none"
          placeholder="Search By Keywords"
          value={search}
          onChange={handleSearchChange}
        />
      </motion.div>

      <motion.section
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="w-full mt-[10vh] flex flex-col gap-[5rem]"
      >
        {filteredProjects.length === 0 ? (
          <h1 className="mx-5 text-center text-[15px] sm:text-[20px] md:text-[30px] text-[#defb81] font-medium">
            No Projects Found for{" "}
            <span className="text-[#e7d3ff]">({search})</span>, Try Searching New
            Keywords
          </h1>
        ) : (
          filteredProjects.map((data) => (
            <Project
              key={data.id}
              id={data.id}
              featuredProjects={data.featuredProjects}
              title={data.title}
              description={data.description}
              techStack={data.techStack}
              liveLink={data.liveLink}
              githubRepo={data.githubRepo}
              coverImg={data.coverImg}
              mainPage={false}
            />
          ))
        )}
      </motion.section>
    </main>
  );
};

export default AllProjects;
