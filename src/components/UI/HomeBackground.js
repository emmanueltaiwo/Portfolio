import React from "react";

const HomeBackground = (props) => {
  return (
    <div
      className="bg-cover w-screen h-screen flex flex-col align-middle justify-center gap-10 select-none"
      style={{
        backgroundImage: `url("/assets/Images/hero.png")`,
      }}
    >
      {props.children}
    </div>
  );
};

export default HomeBackground;
