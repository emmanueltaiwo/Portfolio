import React from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MobileNavProps {
  handleMenuOpen: () => void;
  menuIsOpen: boolean;
  handleMenuClose: () => void;
}

const MobileNav = (props: MobileNavProps) => {
  const { handleMenuOpen, handleMenuClose, menuIsOpen } = props;

  return (
    <nav className="md:hidden block my-auto mr-[5vh] z-[1000px]">
      <div onClick={handleMenuOpen}>
        <MenuIcon fontSize="large" className="text-black hover:text-blue-700" />
      </div>

      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="bg-white h-screen w-screen fixed top-0 bottom-0 left-0 right-0 z-[1000px] text-left transition-all duration-200 flex flex-col items-center"
          >
            <div
              className="w-full text-right mr-[10vh] mt-[2vh] bg-none"
              onClick={handleMenuClose}
            >
              <CloseIcon
                fontSize="large"
                className="text-black hover:text-blue-700"
              />
            </div>

            <ul className="mt-[10vh] w-full flex flex-col gap-8 text-center font-roboto">
              <li className="my-auto">
                <Link
                  className="text-black text-[25px] hover:text-blue-700 transition-all duration-200 my-auto font-bold"
                  href="/#about"
                  onClick={handleMenuClose}
                >
                  About
                </Link>
              </li>
              <li className="my-auto">
                <Link
                  className="text-black text-[25px] hover:text-blue-700 transition-all duration-200 my-auto font-bold"
                  href="/#projects"
                  onClick={handleMenuClose}
                >
                  Projects
                </Link>
              </li>
              <li className="my-auto">
                <Link
                  className="text-black text-[25px] hover:text-blue-700 transition-all duration-200 my-auto font-bold"
                  href="/#contact"
                  onClick={handleMenuClose}
                >
                  Contact
                </Link>
              </li>
              {/* <li className="my-auto">
                <Link
                  className="text-white text-[25px] hover:text-blue-700 hover:bg-gray-200 hover:shadow-gray-500 hover:shadow-md transition-all duration-200 w-fit h-fit px-16 py-2 bg-blue-700 rounded-md my-auto font-bold"
                  href="/blog"
                  onClick={handleMenuClose}
                >
                  Blog
                </Link>
              </li> */}

              <ul className="mt-5 flex gap-7 flex-wrap mx-auto">
                <li>
                  <a href="https://github.com/realemmanuel">
                    <GitHubIcon
                      fontSize="large"
                      className="text-black hover:text-blue-700"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/taiwoemmanuel/">
                    <LinkedInIcon
                      fontSize="large"
                      className="text-black hover:text-blue-700"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/thedevemmanuel/">
                    <TwitterIcon
                      fontSize="large"
                      className="text-black hover:text-blue-700"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/itsdevemmanuel/">
                    <InstagramIcon
                      fontSize="large"
                      className="text-black hover:text-blue-700"
                    />
                  </a>
                </li>
              </ul>

              <hr className="border-gray-500 border-[1px]" />

              <ul className="flex gap-5 flex-col mx-auto w-full">
                <li>
                  <a
                    href="mailto:devemmanuel1@gmail.com"
                    className="w-[90%] bg-white flex gap-3 items-center justify-center text-lg font-bold mx-5 border-[1px] border-blue-500 py-2 hover:border-black"
                  >
                    <Image
                      src="/assets/images/mail.gif"
                      height={50}
                      width={50}
                      alt="Mail Gif"
                      className="my-auto"
                    />
                    <span>Say Hello</span>
                  </a>
                </li>
              </ul>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
