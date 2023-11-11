import React from "react";

interface ProjectDetailsChallengesProps {
  filteredProjectData: any;
}

const ProjectDetailsChallenges = (props: ProjectDetailsChallengesProps) => {
  const { filteredProjectData } = props;
  return (
    <section className="w-full mt-[5vh] h-fit py-5 bg-white">
      <h2 className="xl:mx-20 lg:mx-10 mx-5 xl:text-[70px] md:text-[50px] text-[40px] text-slate-800 font-bold">
        Challenges & Solutions
      </h2>

      {filteredProjectData.map((data: any) => (
        <p
          className="xl:mx-20 lg:mx-10 mx-5 text-[15px] mt-5 md:text-[20px] text-slate-800 font-medium"
          key={data.challengesAndSolutions}
        >
          {data.challengesAndSolutions}
        </p>
      ))}
    </section>
  );
};

export default ProjectDetailsChallenges;
