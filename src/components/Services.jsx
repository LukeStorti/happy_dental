import React from "react";
import { servicesData } from "../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <div className="flex justify-evenly lg:flex-row flex-col items-center ss:gap-2 gap-10 my-8">
        <div className="flex  flex-col font-poppins  sm:justify-start gap-2 w-full ss:w-1/2 select-none">
          <h2 className="text-xl">Services</h2>
          <h1 className="text-6xl leading-[72px] font-medium">
            Dental Services <br className="hidden sm:block" /> For Your Smile
          </h1>
          <p className="text-gray-400 w-3/4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer
            aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus
            ipsum malesuada fringilla amet elit.
          </p>
        </div>
        <div className="flex flex-col mt-[50px]">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} title={item.title} content={item.content} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
