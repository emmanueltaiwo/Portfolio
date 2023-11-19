import React from "react";
import Image from "next/image";

interface TechStackProps {
  name: string;
  logo: string;
}

const TechStack = (props: TechStackProps) => {
  const { name, logo } = props;
  return (
    <div className="bg-slate-50 w-fit h-fit p-4 cursor-pointer rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
      <Image
        src={logo}
        width={10}
        height={10}
        className="w-10 h-10 sm:w-12 sm:h-12 hover:animate-spin my-auto mx-auto"
        alt={name}
      />
    </div>
  );
};

export default TechStack;
