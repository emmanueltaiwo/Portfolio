import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block my-auto xl:mr-[30vh] lg:mr-[15vh] mr-[5vh]">
      <ul className="flex gap-10 font-roboto">
        <li className="my-auto">
          <Link
            className="text-[#e7d3ff] text-[17px] transition-all duration-200 my-auto font-[100]"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-[#e7d3ff] text-[17px] transition-all duration-200 my-auto font-[100]"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-[#e7d3ff] text-[17px] transition-all duration-200 my-auto font-[100]"
            href="#contact"
          >
            Contact
          </Link>
        </li>
        <ul className="flex gap-5 items-center">
          <li className="my-auto">
            <a target="_blank" href="https://twitter.com/thedevemmanuel/">
              <TwitterIcon
                fontSize="medium"
                className="text-[#defb81]"
              />
            </a>
          </li>
          <li className="my-auto">
            <a target="_blank" href="https://github.com/realemmanuel">
              <GitHubIcon
                fontSize="medium"
                className="text-[#defb81]"
              />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default DesktopNav;
