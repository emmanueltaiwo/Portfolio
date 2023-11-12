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
  mainPage: boolean;
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
    mainPage,
  } = props;
  return (
    <div className="lg:w-[70%] w-[90%] lg:ml-[15vh] xl:ml-[25vh] mx-5 flex flex-col-reverse items-center shadow-lg border rounded ">
      <div className="w-full z-10 bg-slate-50 md:bg-none py-5 rounded-b-md">
        <article className="p-4">
          {featuredProjects && (
            <p className="font-roboto text-lg pb-1 text-slate-500 md:px-4">
              Top Pick
            </p>
          )}

          <h2 className="text-2xl md:px-4 text-slate-700 font-bold">{title}</h2>
        </article>
        <article className="md:bg-slate-500 md:my-5 text-slate-700 md:text-white p-4 md:shadow-lg">
          <p className="pb-4 text-md">
            {description}{" "}
            {!mainPage && (
              <Link
                href={`/projects/${id}/?title=${encodeURIComponent(title)}`}
                className="text-blue-700 hover:text-blue-900 underline md:text-gray-300 md:hover:text-black"
              >
                View Details
              </Link>
            )}
          </p>
        </article>
        <article className="w-full flex flex-wrap text-xs rounded text-slate-600 gap-x-8 gap-y-4 font-roboto px-4">
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
      <div className="w-full h-full flex items-start bg-slate-50 border-b md:border-none md:bg-transparent">
        <Image
          src={coverImg}
          width={1000}
          height={1000}
          alt="Project Image"
          className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-t-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Project;
