import React from "react";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" bg-gray-800 select-none">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> EMMANUEL TAIWO </h3>
          <p className="text-[12px] sm:text-lg text-gray-300 mx-5">
            {" "}
            A Front End Developer with an eye for design and deep understanding
            of usability goals.{" "}
          </p>
          <div className="flex justify-center my-10">
            <a href="https://www.linkedin.com/in/realemmanuel/" target="_blank">
              <div className="flex items-center border rounded-lg px-4 py-2 w-fit mx-2 hover:bg-blue-700 transition-all duration-100">
                <LinkedInIcon />
              </div>
            </a>
            <a href="https://github.com/realemmanuel" target="_blank">
              <div className="flex items-center border rounded-lg px-4 py-2 w-fit mx-2 hover:bg-blue-700 transition-all duration-100">
                <GitHubIcon />
              </div>
            </a>
            <a href="https://twitter.com/realdevemmanuel" target="_blank">
              <div className="flex items-center border rounded-lg px-4 py-2 w-fit mx-2 hover:bg-blue-700 transition-all duration-100">
                <TwitterIcon />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; Emmanuel Taiwo, 2023.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer px-2 border-r"
            >
              Home
            </span>
            <span
              onClick={() => router.push("/about")}
              className="cursor-pointer px-2"
            >
              About me
            </span>
            <span
              onClick={() => router.push("/contact")}
              className="cursor-pointer px-2 border-l"
            >
              Contact me
            </span>
            <span
              onClick={() => router.push("/projects")}
              className="cursor-pointer px-2 border-l"
            >
              Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
