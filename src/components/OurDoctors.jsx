import React from "react";
import { doctorsData } from "../constants";
import DoctorsCard from "./DoctorsCard";

const OurDoctors = () => {
  return (
    <section>
      <div className="flex justify-evenly flex-col items-center ss:gap-2 gap-10 my-8 mx-6 ss:mx-8 select-none">
        <div className="flex  flex-col font-poppins gap-2 w-full ss:w-1/2 select-none">
          <h2 className="text-xl text-white">Our Doctors</h2>
          <h1 className="text-6xl leading-[72px] font-medium text-white">
            Meet Our Expert Dental Team
          </h1>
          <p className="text-gray-400 w-3/4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer
            aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus
            ipsum malesuada fringilla amet elit.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-[50px]">
          {doctorsData.map((item) => (
            <DoctorsCard key={item.name} title={item.title} name={item.name} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
