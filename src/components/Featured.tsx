import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Featured = () => {
  return (
    <section className="w-full flex flex-col gap-10 h-[25vh] md:h-[50vh] bg-gray-100 items-start justify-center">
      <h1 className="mx-[5vh] lg:mx-[15vh] xl:mx-[25vh] xl:w-[650px] sm:text-[20px] text-[15px] md:text-[30px] font-[400] md:font-[300]">
        Recently, I've been working on a project called SpendSense, a finance
        management app that caters to all devices.
      </h1>
      <a
        href="http://spendsense.com.ng/"
        target="_blank"
        className="mx-[5vh] lg:mx-[15vh] xl:mx-[25vh] flex items-center text-[20px] font-[400] md:font-[300] gap-3 text-black hover:text-slate-700"
      >
        View Project
        <EastOutlinedIcon />
      </a>
    </section>
  );
};

export default Featured;
