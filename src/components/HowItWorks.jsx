import React from "react";
import { howItWorksData } from "../constants";
import HowItWorksCard from "./HowItWorksCard";
import arrow from "../assets/arrow.png";

const HowItWorks = () => {
  return (
    <section>
      <div className="flex flex-col justify-evenly items-start ss:gap-2 gap-10 my-8 mx-8 ss:mx-8">
        <div className="flex  flex-col font-poppins gap-8  select-none mt-[70px]">
          <h2 className="text-xl text-black">How It Works</h2>
          <h1 className="text-6xl leading-[72px] font-medium text-black">
            Your Journey to a Healthy <br className="md:block hidden" /> Smile Starts Here
          </h1>
          <p className="text-gray-400 ss:w-2/4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer
            aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus
            ipsum malesuada fringilla amet elit.
          </p>
        </div>
        <div className="flex flex-col  lg:flex-row gap-8 mt-[80px] ">
          {howItWorksData.map((item) => (
            <HowItWorksCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
        <button
          className={`bg-secondary p-4 text-white font-poppins flex items-center gap-2 px-8 mt-8 w-[300px]`}
        >
          <span>Make Appointment</span>
          <img src={arrow} alt="arrow-right" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
