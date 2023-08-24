import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
  userHasScroll: boolean;
}

const Layout = (props: LayoutProps) => {
  const { children, userHasScroll } = props;
  return (
    <Fragment>
      <Navbar userHasScroll={userHasScroll} />
      {children}
      <Footer  />
    </Fragment>
  );
};

export default Layout;
