import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { topicsList } from "../db/blogData";

const BlogHeader = () => {
  return (
    <section className="md:py-[3vh] w-full">
      <h1 className="xl:mx-20 lg:mx-10 mx-5 lg:text-[70px] text-[50px]  font-extrabold text-slate-900">
        My Blog
      </h1>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <div className="px-3 xl:ml-20 lg:ml-10 mx-5 flex bg-blue-700 my-auto w-[85%] md:w-[60%] lg:w-[60%] xl:w-[60%] rounded-lg">
          <input
            type="text"
            className="rounded-lg outline-none text-white bg-blue-700 w-full py-3 font-medium text-lg placeholder-white"
            placeholder="Search for blog..."
          />
          <SearchIcon className="my-auto text-white" />
        </div>
        <div className="mx-5 lg:mx-10 xl:mx-0 flex flex-wrap gap-5 my-auto">
          <button className="w-fit h-fit rounded-xl border-[3px] border-blue-700 px-3 py-2 font-medium flex gap-3 items-center">
            Highest rated
            <StarIcon className="my-auto text-yellow-600" />
          </button>
          <button className="w-fit h-fit rounded-xl border-[3px] border-blue-700 px-3 py-2 font-medium flex gap-3 items-center">
            Lowest rated
            <StarIcon className="my-auto text-gray-600" />
          </button>
        </div>
      </div>

      <div className="xl:mx-20 lg:mx-10 mx-5 w-[90%] mt-[5vh] flex flex-wrap gap-5 items-center">
        <h3 className="text-[30px] font-bold text-slate-800">Topics:</h3>
        {topicsList.map((data) => (
          <button
            key={data.id}
            className="w-fit h-fit rounded-xl border-[3px] border-blue-700 px-3 py-2 font-medium"
          >
            {data.title}
          </button>
        ))}
      </div>

      <hr className="xl:mx-20 lg:mx-10 mx-5 my-10 border-[1px] border-slate-800" />
    </section>
  );
};

export default BlogHeader;
