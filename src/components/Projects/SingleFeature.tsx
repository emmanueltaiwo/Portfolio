import React from "react";

interface ProjectFeatureProps {
  title: string;
  description: string;
}

const SingleFeature = (props: ProjectFeatureProps) => {
  const { title, description } = props;
  return (
    <li className="w-full bg-gray-50 shadow-gray-500 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-5 rounded-md flex flex-col">
      <h3 className="text-[25px] md:text-[40px] text-slate-800 font-medium">
        {title}
      </h3>
      <hr className="border-slate-800 py-3" />
      <p className="text-slate-500 text-[15px] font-[400]">{description}</p>
    </li>
  );
};

export default SingleFeature;
