import React from "react";

const StackButton = (props) => {
  return (
    <button className="flex gap-2 px-5 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 bg-neutral-600 border-b-8 border-neutral-800 rounded shadow-lg  shadow-neutral-600/50 hover:skew-y-6 hover:border-b-8 hover:border-neutral-700 w-max">
      {props.children}
    </button>
  );
};

export default StackButton;
