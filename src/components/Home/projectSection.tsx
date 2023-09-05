import React from "react";
import { projectsData } from "../db/projectsData";
import Project from "../Projects/project";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="w-full mt-[10vh] bg-white h-full py-10" id="projects">
      <h2 className="mx-5 md:mx-10 lg:mx-10 xl:mx-20 text-3xl text-slate-800 font-extrabold">
        Some Things I&apos;ve Built
      </h2>

      <main className="w-full mt-[10vh] lg:mx-0 flex flex-col gap-10">
        <section className="w-full mt-[10vh] lg:mx-0 flex flex-col gap-[5rem] xl:gap-[10rem]">
          {projectsData
            .filter((data) => data.featuredProjects)
            .slice(0, 3)
            .map((data) => (
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
              />
            ))}
        </section>

        <Link
          href="/projects"
          target="_blank"
          className="w-fit h-fit px-5 py-3 border-[1px] border-blue-700 text-blue-700 text-md text-center mx-auto hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          View All Projects
        </Link>
      </main>
    </section>
  );
};

export default ProjectSection;
