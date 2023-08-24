import React from "react";
import Project from "./project";
import ProjectDetailsHeader from "./projectDetailsHeader";
import ProjectDetailsFeatures from "./projectDetailsFeatures";
import ProjectDetailsChallenges from "./projectDetailsChallenges";
import ProjectDetailsResult from "./projectDetailsResult";

interface Project {
  id: number;
  featuredProjects: boolean;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubRepo: string;
  coverImg: string;
  features: { id: number; title: string; description: string }[];
  challengesAndSolutions: string;
  result: string;
}

interface ProjectDetailsContentProps {
  filteredProjectData: Project[];
}

const ProjectDetailsContent = (props: ProjectDetailsContentProps) => {
  const { filteredProjectData } = props;
  return (
    <main className="mt-[10vh] h-full w-full">
      <ProjectDetailsHeader filteredProjectData={filteredProjectData} />
      <ProjectDetailsFeatures filteredProjectData={filteredProjectData} />
      <ProjectDetailsChallenges filteredProjectData={filteredProjectData} />
      <ProjectDetailsResult filteredProjectData={filteredProjectData} />
    </main>
  );
};

export default ProjectDetailsContent;
