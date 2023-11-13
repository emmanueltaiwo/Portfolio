import React from "react";

interface ProjectDetailsChallengesProps {
  filteredProjectData: any;
}

const ProjectChallenges = (props: ProjectDetailsChallengesProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="lg:w-[70%] w-[90%] mt-[5vh] h-fit py-5 bg-transparent">
      <h2 className="w-full xl:mx-[25vh] lg:mx-[15vh] mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-slate-800 font-bold">
        Challenges & Solutions
      </h2>

      {filteredProjectData.map((data: any) => (
        <p
          className="w-full xl:mx-[25vh] lg:mx-[15vh] mx-5 text-[15px] mt-5 md:text-[20px] text-slate-800 font-[400]"
          key={data.challengesAndSolutions}
        >
          {data.challengesAndSolutions}
        </p>
      ))}
    </section>
  );
};

export default ProjectChallenges;
