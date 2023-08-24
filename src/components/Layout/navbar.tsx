import React, { useState, useEffect } from "react";
import Image from "next/image";
import DesktopNav from "../Header/desktopNav";
import MobileNav from "../Header/mobileNav";
import Link from "next/link";

interface navBarProps {
  userHasScroll: boolean;
}

const Navbar = (props: navBarProps) => {
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
      <header
        className={`${
          userHasScroll
            ? scrollingUp
              ? "bg-white w-full h-[4rem] fixed top-0 z-20 shadow-gray-300 shadow-md flex justify-between translate-y-0 transition-all duration-500"
              : "bg-white w-full h-[4rem] fixed top-0 z-20 flex justify-between -translate-y-20 transition-all duration-500"
            : "bg-white w-full h-[4rem] fixed top-0 z-20 flex justify-between translate-y-0"
        }`}
      >
        <div className="my-auto ml-[5vh] lg:mx-16 xl:ml-20">
          <Link href="/">
            <Image
              src="/assets/Images/logo.png"
              width={20}
              height={20}
              className="w-[40px] rounded-tl-lg"
              alt="My Logo"
              priority
            />
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
