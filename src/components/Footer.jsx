import React from "react";
import social from "../assets/social.png";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start mr-10 gap-2">
          <h2 className="font-poppins text-white font-semibold text-2xl">
            HAPPY<span className="text-primary font-extralight">DENTAL</span>
          </h2>
          <p className="font-poppins text-gray-400 w-[367px]">
            Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor blandit eget nibh ac
            lacus vitae purus. Sagittis tortor fermentum.
          </p>
          <img src={social} alt="" className="w-[152px]" />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-semibold text-[20px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.title}
                    className={`font-poppins text-[16px] leading-[24px] text-gray-400 hover:text-white cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
