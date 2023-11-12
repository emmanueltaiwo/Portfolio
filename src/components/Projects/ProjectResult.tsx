import React from "react";

interface ProjectDetailsResultProps {
  filteredProjectData: any;
}

const ProjectResult = (props: ProjectDetailsResultProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="w-full mt-[5vh] h-fit py-5 bg-transparent">
      <h2 className="xl:mx-[25vh] lg:mx-[15vh] mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-slate-800 font-bold">
        Result
      </h2>

      {filteredProjectData.map((data: any) => (
        <p
          className="xl:mx-[25vh] lg:mx-[15vh] mx-5 text-[15px] mt-5 md:text-[20px] text-slate-800 font-[400]"
          key={data.result}
        >
          {data.result}
        </p>
      ))}
    </section>
  );
};

export default ProjectResult;
