import React from "react";
import { techStackList } from "../db/techStackData";
import TechStack from "./techStacks";

const AboutSectionRight = () => {
  return (
    <article className="items-center md:mx-10 xl:mx-20 mt-[5vh] mx-5 lg:mx-10 flex flex-wrap gap-5">
      {techStackList.map((data) => (
        <TechStack name={data.name} logo={data.logo} key={data.id} />
      ))}
    </article>
  );
};

export default AboutSectionRight;
