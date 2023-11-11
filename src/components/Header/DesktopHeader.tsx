import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block my-auto xl:mr-[30vh] lg:mr-[15vh] mr-[5vh]">
      <ul className="flex gap-10 font-roboto">
        <li className="my-auto">
          <Link
            className="text-black text-[17px] hover:text-slate-700 transition-all duration-200 my-auto font-[100]"
            href="/#about"
          >
            About
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-black text-[17px] hover:text-slate-700 transition-all duration-200 my-auto font-[100]"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-black text-[17px] hover:text-slate-700 transition-all duration-200 my-auto font-[100]"
            href="#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
