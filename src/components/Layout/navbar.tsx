import React, { useState, useEffect } from "react";
import DesktopNav from "../Header/DesktopHeader";
import MobileNav from "../Header/MobileHeader";
import Link from "next/link";

interface NavBarProps {
  userHasScroll: boolean;
}

const Navbar = (props: NavBarProps) => {
  const { userHasScroll } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleMenuOpen = () => {
    setMenuIsOpen(true);
  };

  const handleMenuClose = () => {
    setMenuIsOpen(false);
  };

  const isScrollingUp = scrollingUp
    ? "bg-white w-full h-[7rem] fixed top-0 z-20 shadow-gray-300 shadow-md flex justify-between translate-y-0 transition-all duration-500"
    : "bg-white w-full fixed top-0 z-20 flex justify-between -translate-y-20 transition-all duration-500";

  const headerStyles = userHasScroll
    ? isScrollingUp
    : "bg-white w-full h-[7rem] fixed top-0 z-20 flex justify-between translate-y-0";

  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      setScrollingUp(newY < scrollY);
      setScrollY(newY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div>
      <header className={headerStyles}>
        <div className="my-auto ml-[5vh] lg:ml-[15vh] xl:ml-[25vh]">
          <Link
            href="/"
            className="text-[23px] md:text-[30px] text-slate-800 font-[400]"
          >
            Emmanuel
          </Link>
        </div>
        <DesktopNav />

        <MobileNav
          handleMenuOpen={handleMenuOpen}
          handleMenuClose={handleMenuClose}
          menuIsOpen={menuIsOpen}
        />
      </header>
    </div>
  );
};

export default Navbar;
