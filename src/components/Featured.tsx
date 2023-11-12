import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Featured = () => {
  return (
    <section className="w-full flex flex-col gap-10 h-[35vh] md:h-[50vh] bg-[rgba(236,236,236)]  items-start justify-center">
      <h1 className="mx-5 lg:mx-[15vh] xl:mx-[25vh] xl:w-[620px] sm:text-[20px] text-[20px] md:text-[30px] font-[400] md:font-[300]">
        Recently, I&apos;ve been working on a project called SpendSense, a finance
        management app that caters to all fdevices.
      </h1>
      <a
        href="http://spendsense.com.ng/"
        target="_blank"
        className="mx-5 lg:mx-[15vh] xl:mx-[25vh] flex items-center text-[18px] font-[400] md:font-[300] gap-1 md:gap-3 text-black hover:text-slate-700"
      >
        View Project
        <EastOutlinedIcon fontSize="medium" />
      </a>
    </section>
  );
};

export default Featured;
