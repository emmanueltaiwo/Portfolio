import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: number;
  featuredProjects: boolean;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubRepo: string;
  coverImg: string;
}

const Project = (props: ProjectProps) => {
  const {
    id,
    featuredProjects,
    title,
    description,
    techStack,
    liveLink,
    githubRepo,
    coverImg,
  } = props;
  return (
    <div className="w-[90%] xl:mx-20 lg:mx-10 mx-5 flex flex-col-reverse md:flex-row items-center md:gap-3  relative shadow-lg border md:border-none md:shadow-none rounded ">
      <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 md:bg-transparent py-5 md:mt-5">
        <article className="p-4">
          {featuredProjects && (
            <p className="font-roboto text-lg pb-1 text-blue-500 md:px-4">
              Featured Project
            </p>
          )}

          <h2 className="text-2xl md:px-4 text-slate-700 font-bold">{title}</h2>
        </article>
        <article className="md:bg-blue-500 md:my-5 text-slate-700 md:text-white p-4 rounded md:shadow-lg">
          <p className="pb-4 text-md">
            {description}{" "}
            <Link
              href={`/projects/${id}/?title=${encodeURIComponent(title)}`}
              className="text-blue-700 hover:text-blue-900 underline md:text-gray-300 md:hover:text-black"
            >
              Read More
            </Link>
          </p>
        </article>
        <article className="lg:w-8/12 flex flex-wrap text-xs rounded text-slate-600 gap-x-8 gap-y-4 font-roboto px-4">
          {techStack.map((stack) => (
            <span
              key={stack}
              className="text-slate-500 hover:text-black cursor-pointer"
            >
              {stack}
            </span>
          ))}
        </article>
        <article className="flex px-3 mt-6 gap-5 items-center ">
          <a
            href={liveLink.toString()}
            target="_blank"
            className="w-fit h-fit border-[1px] rounded-full px-3 py-3 border-gray-500 hover:bg-gray-300"
          >
            <OpenInNewIcon />
          </a>
          <a
            href={githubRepo}
            target="_blank"
            className="w-fit h-fit border-[1px] rounded-full px-3 py-3 border-gray-500 hover:bg-gray-300"
          >
            <GitHubIcon />
          </a>
        </article>
      </div>
      <div className="w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 md:left-auto md:right-0 flex items-start p-4 md:p-0 bg-slate-50 border-b md:border-none md:bg-transparent">
        <Image
          src={coverImg}
          width={300}
          height={300}
          alt="Project Image"
          className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Project;
