import React from "react";
import ProjectFeature from "./projectFeature";

interface ProjectDetailsFeaturesProps {
  filteredProjectData: any;
}

const ProjectDetailsFeatures = (props: ProjectDetailsFeaturesProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="w-full mt-[5vh] h-fit py-5 bg-white">
      <h2 className="xl:mx-20 lg:mx-10 mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-slate-800 font-bold">
        Features
      </h2>
      <div className="xl:mx-20 lg:mx-10 mx-5 mt-10">
        {filteredProjectData.map((data: any) => (
          <ul key={data.id} className="w-full flex flex-col gap-5">
            {data.features.map((feature: any) => (
              <ProjectFeature
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetailsFeatures;
