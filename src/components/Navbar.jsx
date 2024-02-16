import { navlinks } from "../constants";
import Button from "./Button";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  //
  return (
    <nav className="w-full flex py-6 justify-between items-center h-[100px]">
      <div className="font-poppins text-3xl flex items-center gap-8">
        <h1 className="font-extralight">
          <span className="font-semibold">HAPPY</span>DENTAL
        </h1>
        <div className="bg-gray-300 h-[30px] w-[1.8px]" />
      </div>
      <div className="-ml-[200px]">
        <ul className="list-none sm:flex hidden justify-end items-center ">
          {navlinks.map((link, index) => (
            <li
              key={link.id}
              className={`font-poppins font-medium cursor-pointer text-[14px] sm:text-[16px] text-black ${
                index === navlinks.length - 1 ? "mr-0" : "mr-5"
              } `}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:block hidden">
        <Button label="Get Started" color="primary" />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain fill-primary"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-[80px] right-0 mx-4 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navlinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                  index === navlinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
