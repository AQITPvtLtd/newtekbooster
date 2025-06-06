"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const branches = [
  {
    name: "Branch 1",
    address: "2E, 4, Jhandewalan Extension, Delhi, 110055",
  },
  {
    name: "Branch 2",
    address: "Plot 23, Noida Sector 16, Uttar Pradesh 201301",
  },
  {
    name: "Branch 3",
    address: "G-45, Bhandarkar Road, Pune, Maharashtra 411004",
  },
  {
    name: "Branch 4",
    address: "Unit 6, HSR Layout, Bengaluru, Karnataka 560102",
  },
];

const Addresses = () => {
  return (
    <div className="relative bg-black text-white py-16 px-4 md:px-16">
      {/* Headquarters */}
      <div className="text-center mb-20">
        <div className="flex justify-center mb-4">
          <IoLocationSharp className="text-4xl p-2 bg-[#084cfc] rounded-full" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Headquarters</h2>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I,
          South Delhi, Delhi 110003
        </p>
      </div>

      {/* Branches Timeline */}
      <div className="relative mt-10">
        {/* SVG Curved Line */}
       
        {/* Branch Points */}
        <div className="flex justify-between mt-28 md:mt-32 relative z-10 px-2 md:px-10">
          {branches.map((branch, index) => (
            <div key={index} className="text-center w-[20%] min-w-[120px]">
              <div className="flex justify-center mb-2">
                <IoLocationSharp className="text-3xl p-2 bg-[#084cfc] rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">{branch.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
