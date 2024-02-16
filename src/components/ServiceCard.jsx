import React from "react";

const ServiceCard = ({ icon, title, content }) => {
  return (
    <div className="flex flex-row my-4 items-center border-b-2 pb-4">
      <div className="w-1/4">
        <img src={icon} alt="" className="w-[100px] h-[100px] object-contain" />
      </div>
      <div className="flex flex-col px-4 w-3/4 gap-2">
        <h2 className="font-poppins font-semibold text-[28px]">{title}</h2>
        <p className="font-poppins font-light text-gray-400 w-2/3">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
