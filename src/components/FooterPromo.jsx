import React from "react";

const FooterPromo = () => {
  return (
    <section className="w-full  py-6 justify-between items-center hidden sm:flex">
      <div className="hidden flex-row justify-center items-center md:flex md:text-lg text-sm">
        <h2 className="font-poppins">Copyright 2023 Happy Dental</h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center md:text-lg text-sm">
          <h2 className="font-poppins cursor-pointer hover:underline">Terms of Use</h2>
        </div>
        <div className="bg-black h-[20px] w-[1.8px] md:block hidden" />
        <div className="flex flex-row justify-center items-center md:text-lg text-sm">
          <h2 className="font-poppins cursor-pointer hover:underline">Privacy Policy</h2>
        </div>
      </div>
    </section>
  );
};

export default FooterPromo;
