import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:block my-auto xl:mr-20 mr-[5vh]">
      <ul className="flex gap-10 font-roboto">
        <li className="my-auto">
          <Link
            className="text-black text-sm hover:text-blue-700 transition-all duration-200 my-auto font-bold"
            href="/#about"
          >
            About
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-black text-sm hover:text-blue-700 transition-all duration-200 my-auto font-bold"
            href="/#projects"
          >
            Projects
          </Link>
        </li>
        <li className="my-auto">
          <Link
            className="text-black text-sm hover:text-blue-700 transition-all duration-200 my-auto font-bold"
            href="#contact"
          >
            Contact
          </Link>
        </li>
        {/* <li className="my-auto">
          <Link
            className="text-white text-sm hover:text-blue-700 hover:bg-gray-200 hover:shadow-gray-500 hover:shadow-md transition-all duration-200 w-fit h-fit px-4 py-2 bg-blue-700 rounded-md my-auto font-bold"
            href="/blog"
          >
            Blog
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default DesktopNav;
