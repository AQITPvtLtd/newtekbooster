import React from "react";
import Image from "next/image";
import dataservice from "@/data/servicedata";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Link from "next/link";

const Servicedata = ({ id }) => {
  const obj = dataservice.find((item) => item.id == id);

  if (!obj) {
    return <div>Service data not found.</div>;
  }

  return (
    <div className="relative mt-15">
      {/* Fullscreen Background Image */}
      {/* Half-Screen Background Image with Horizontal Padding */}
      <div className="w-full h-[50vh] px-5 sm:px-8">
        {obj.image && (
          <Image
            src={obj.image}
            alt={obj.name}
            width={1000} // adjust width as needed
            height={500}
            className="w-full h-full object-cover rounded-xl"
            priority
          />
        )}
      </div>



      {/* Floating Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Card */}
          <div className="w-full lg:w-3/4 bg-white p-8 rounded-2xl shadow-2xl">
            <h1
              className="text-4xl font-bold underline text-center mb-6"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              {obj.title}
            </h1>
            <p
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{ __html: obj.description }}
            ></p>
          </div>

          {/* Sidebar Card */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-2xl h-fit">
            <h2
              className="text-xl font-semibold mb-4 dark:text-black"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Know More Services
            </h2>
            <ul className="space-y-2">
              {dataservice.map((item, index) => (
                <li key={index}>
                  <Link href={`/services/${item.id}`}>
                    <span className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                      <FaArrowRightFromBracket />
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicedata;
