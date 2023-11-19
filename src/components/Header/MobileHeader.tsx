import React, { useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  handleMenuOpen: () => void;
  menuIsOpen: boolean;
  handleMenuClose: () => void;
}

const MobileNav = (props: MobileNavProps) => {
  const { handleMenuOpen, handleMenuClose, menuIsOpen } = props;

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuIsOpen]);

  return (
    <nav className="md:hidden block my-auto mr-5 z-[1000px]">
      <button onClick={handleMenuOpen}>
        <MenuIcon fontSize="large" className="text-[#defb81]" />
      </button>

      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="bg-[#5e18a4] h-screen w-screen fixed top-0 bottom-0 left-0 right-0 z-[1000px] text-left transition-all duration-200 flex flex-col items-center"
          >
            <div className="w-full flex h-[13vh] items-center justify-between">
              <Link
                href="/"
                className="w-full text-left ml-5 text-[23px] text-[#e7d3ff] font-[400]"
              >
                Emmanuel
              </Link>

              <button
                className="w-full text-right mr-5"
                onClick={handleMenuClose}
              >
                <CloseIcon
                  fontSize="large"
                  className="text-[#defb81]"
                />
              </button>
            </div>

            <ul className="mt-[30%] w-full flex flex-col gap-16 text-center font-roboto">
              <li className="my-auto">
                <Link
                  className="text-[#defb81] text-[25px] transition-all duration-200 my-auto font-bold"
                  href="/about"
                  onClick={handleMenuClose}
                >
                  About
                </Link>
              </li>
              <li className="my-auto">
                <Link
                  className="text-[#defb81] text-[25px] transition-all duration-200 my-auto font-bold"
                  href="/projects"
                  onClick={handleMenuClose}
                >
                  Projects
                </Link>
              </li>
              <li className="my-auto">
                <Link
                  className="text-[#defb81] text-[25px] transition-all duration-200 my-auto font-bold"
                  href="/#contact"
                  onClick={handleMenuClose}
                >
                  Contact
                </Link>
              </li>

              <ul className="mt-5 flex gap-7 flex-wrap mx-auto">
                <li>
                  <a href="https://github.com/realemmanuel">
                    <GitHubIcon
                      fontSize="large"
                      className="text-[#defb81]"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/taiwoemmanuel/">
                    <LinkedInIcon
                      fontSize="large"
                      className="text-[#defb81]"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/thedevemmanuel/">
                    <TwitterIcon
                      fontSize="large"
                      className="text-[#defb81]"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/itsdevemmanuel/">
                    <InstagramIcon
                      fontSize="large"
                      className="text-[#defb81]"
                    />
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
