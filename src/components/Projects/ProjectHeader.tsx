import React from "react";
import Project from "./Project";

interface ProjectDetailsHeaderProps {
  filteredProjectData: any;
}

const ProjectHeader = (props: ProjectDetailsHeaderProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="bg-transparent mt-[5vh] md:mt-[13vh] py-5 w-full">
      <h1 className="py-5 lg:p-0 xl:mx-[25vh] lg:mx-[15vh] text-[40px] md:text-[50px] xl:text-[70px] text-slate-800 font-bold mx-5">
        Project Info
      </h1>
      <div className="mt-[5vh]">
        {filteredProjectData.map((data: any) => (
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
            mainPage={true}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectHeader;
