import React from "react";
import SingleFeature from "./SingleFeature";

interface ProjectDetailsFeaturesProps {
  filteredProjectData: any;
}

const ProjectFeatures = (props: ProjectDetailsFeaturesProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="lg:w-[70%] w-[90%] h-fit py-5 bg-transparent">
      <h2 className="xl:mx-[25vh] lg:mx-[15vh] mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-[#defb81] font-bold">
        Features
      </h2>
      <div className="xl:mx-[25vh] w-full lg:mx-[15vh] mx-5 mt-10">
        {filteredProjectData.map((data: any) => (
          <ul key={data.id} className="w-full flex flex-col gap-5">
            {data.features.map((feature: any) => (
              <SingleFeature
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

export default ProjectFeatures;
