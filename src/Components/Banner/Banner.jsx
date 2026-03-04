import React from "react";
import vectorImg from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="md:flex *:mb-9  justify-center md:justify-between gap-[24px] px-5 md:px-10 pt-20  items-center">
      {/* left side */}
      <div className="relative w-full md:w-1/2 h-[250px] border border-gray-400 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden flex items-center justify-center">
        <div className="relative z-10 text-center text-white">
          <h3 className="text-2xl font-medium">In progress</h3>
          <h1 className="text-7xl font-bold">0</h1>
        </div>

        {/* Background Images Container */}
        <div className="absolute inset-0 flex justify-between items-center">
          <img src={vectorImg} alt="" className="h-full object-cover" />
          <img
            src={vectorImg}
            alt=""
            className="h-full object-cover scale-x-[-1]"
          />
        </div>
      </div>
      {/* right side */}
       <div className="relative w-full md:w-1/2 h-[250px] border border-gray-400 rounded-lg bg-gradient-to-r from-green-500 to-green-700 overflow-hidden flex items-center justify-center">
        <div className="relative z-10 text-center text-white">
          <h3 className="text-2xl font-medium">Resolved</h3>
          <h1 className="text-7xl font-bold">0</h1>
        </div>

        {/* Background Images Container */}
        <div className="absolute inset-0 flex justify-between items-center">
          <img src={vectorImg} alt="" className="h-full object-cover" />
          <img
            src={vectorImg}
            alt=""
            className="h-full object-cover scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
