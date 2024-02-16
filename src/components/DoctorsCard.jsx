import React from "react";

const DoctorsCard = ({ name, title, img }) => {
  return (
    <div className="flex flex-col w-[354px] h-[512px]">
      <img src={img} alt="doctor image" className="w-[354px] h-[340px] " />
      <div className="flex flex-col items-start font-poppins text-black bg-white w-full  gap-2">
        <div className="mx-auto flex flex-col gap-2 mt-6 mb-8">
          <h2 className="font-bold text-lg cursor-pointer hover:text-secondary">{name}</h2>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
