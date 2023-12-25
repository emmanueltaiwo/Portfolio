import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full shadow-lg shadow-white bg-transparent relative bottom-0 mt-auto h-[40vh] lg:h-[35vh] py-10 justify-center md:justify-between flex flex-col md:flex-row gap-10"
      id="contact"
    >
      <div className="mx-5 lg:ml-[15vh] xl:ml-[25vh] md:mt-[8vh]">
        <Link href="/" className="text-[25px] text-[#defb81] font-[400]">
          Emmanuel
        </Link>
      </div>
      <div className="mx-5 mr-[40%] md:mt-[8vh] flex flex-col gap-4 items-start">
        <p className="text-[17px] font-[320] text-[#defb81]">Personal email</p>
        <a
          href="mailto:devemmanuel1@gmail.com"
          className="text-[17px] font-[320] text-[#defb81]"
        >
          devemmanuel1@gmail.com
        </a>

        <ul className="mt-5 flex gap-7 flex-wrap">
          <li>
            <a target="_blank" href="https://github.com/realemmanuel">
              <GitHubIcon
                fontSize="medium"
                className="text-[#defb81] hover:text-blue-500"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/emmanueloluwafunso/"
            >
              <LinkedInIcon
                fontSize="medium"
                className="text-[#defb81] hover:text-blue-500"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/thedevemmanuel/">
              <TwitterIcon
                fontSize="medium"
                className="text-[#defb81] hover:text-blue-500"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/itsdevemmanuel/">
              <InstagramIcon
                fontSize="medium"
                className="text-[#defb81] hover:text-blue-500"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
