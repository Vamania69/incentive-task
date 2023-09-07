import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar flex  p-8 justify-between">
      {
        // for mobile view
        <h2 className="md:hidden">
          Incentive<span className="text-[#5CCEF5]">.</span>
        </h2>
      }
      <div className="hidden md:block ">
        <p className="text-[#ACACAC] text-sm border-b-2 border-transparent  hover:border-[#5CCEF5]">
          Hi John
        </p>
        <h3 className=" border-b-4 font-semibold  border-transparent hover:border-[#5CCEF5]">
          Welcome to Incentive<span className="text-[#5CCEF5]">.</span>
        </h3>
      </div>
      <div className="profile-dropdown hidden   bg-[#141414] md:flex items-center justify-between border border-[#4A6AE3] rounded-xl min-w-[200px]">
        <div className="flex items-center">
          <img src="/assets/Profile.png" alt="profile-picture" />
          <p>John</p>
        </div>
        <span className=" justify-end  text-3xl ">
          <RiArrowDropDownLine></RiArrowDropDownLine>{" "}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
