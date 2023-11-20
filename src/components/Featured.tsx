import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Link from "next/link";

const Featured = () => {
  return (
    <section className="mt-10 w-full flex flex-col gap-8 h-[25vh] sm:h-[35vh] md:h-[50vh] bg-[#5e18a4]  items-start justify-center">
      <h1 className="mx-5 text-[#defb81] lg:mx-[15vh] xl:mx-[25vh] xl:w-[750px] sm:text-[20px] text-[15px] md:text-[30px] font-[400] md:font-[300] xl:leading-[35px]">
        Recently, I&apos;ve been working on a project called SpendSense, a finance
        management app that caters to all devices.
      </h1>
      <Link
        href="/projects/1?title=SpendSense"
        target="_blank"
        className="mx-5 lg:mx-[15vh] xl:mx-[25vh] flex items-center text-[15px] sm:text-[18px] font-[400] md:font-[300] gap-1 md:gap-3 text-[#e7d3ff] hover:text-blue-500"
      >
        View Project
        <EastOutlinedIcon fontSize="medium" />
      </Link>
    </section>
  );
};

export default Featured;
