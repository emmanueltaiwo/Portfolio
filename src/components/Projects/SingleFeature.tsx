import React from "react";

interface ProjectFeatureProps {
  title: string;
  description: string;
}

const SingleFeature = (props: ProjectFeatureProps) => {
  const { title, description } = props;
  return (
    <li className="w-full bg-[#5e18a4] shadow-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-5 rounded-md flex flex-col">
      <h3 className="text-[25px] md:text-[40px] text-[#defb81] font-medium">
        {title}
      </h3>
      <hr className="border-[#defb81] py-3" />
      <p className="text-[#e7d3ff] text-[15px] font-[400]">{description}</p>
    </li>
  );
};

export default SingleFeature;