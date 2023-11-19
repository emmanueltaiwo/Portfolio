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
    ? "bg-[#201344] w-full h-[7rem] fixed top-0 z-20 flex justify-between translate-y-0 transition-all duration-500"
    : "bg-[#201344] w-full fixed top-0 z-20 flex justify-between -translate-y-20 transition-all duration-500";

  const headerStyles = userHasScroll
    ? isScrollingUp
    : "bg-transparent w-full h-[7rem] fixed top-0 z-20 flex justify-between translate-y-0";

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
        <div className="my-auto ml-5 lg:ml-[15vh] xl:ml-[25vh]">
          <Link
            href="/"
            className="text-[23px] md:text-[20px] text-[#e7d3ff] font-[400]"
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
