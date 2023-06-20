import React from "react";

const Card = (props) => {
  return (
    <div className="w-screen bg-gray-100 flex flex-col select-none h-full">
      {props.children}
    </div>
  );
};

export default Card;
