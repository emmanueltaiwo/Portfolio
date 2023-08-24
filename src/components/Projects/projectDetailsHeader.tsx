import React from "react";
import Project from "./project";

interface ProjectDetailsHeaderProps {
  filteredProjectData: any;
}

const ProjectDetailsHeader = (props: ProjectDetailsHeaderProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="bg-white py-5 h-full md:h-screen w-full">
      <h1 className="py-5 lg:p-0 xl:mx-20 lg:mx-10 text-[40px] md:text-[50px] xl:text-[70px] text-slate-800 font-bold mx-5">
        Project Info
      </h1>

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
        />
      ))}
    </section>
  );
};

export default ProjectDetailsHeader;
