import React from "react";

const CustomMediumText = (props) => {
  return (
    <h1 className="ml-3 font-righteous text-3xl font-black">
      {props.children}
    </h1>
  );
};

export default CustomMediumText;
