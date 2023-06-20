import React from "react";
import StackButton from "../Button/StackButton";

const TechStack = ({ title, logo }) => {
  return (
    <div className="mx-2 my-2">
      <StackButton>
        <img src={logo} className="w-7" alt="" />
        <span className="text-sm my-auto">{title}</span>
      </StackButton>
    </div>
  );
};

export default TechStack;
