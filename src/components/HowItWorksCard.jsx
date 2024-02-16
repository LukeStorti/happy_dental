import React from "react";

const HowItWorksCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <img src={icon} alt="" className="w-[100px] h-[100px]" />
      <h2 className="font-poppins font-semibold text-xl">{title}</h2>
      <p className="text-gray-400 w-3/4">
        Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
      </p>
    </div>
  );
};

export default HowItWorksCard;
