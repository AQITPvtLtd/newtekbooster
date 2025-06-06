"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "./information";

const Tekservice = () => {
    return (
        <div className="px-4 pb-5 mt-10">
            <h1
                className="text-5xl font-semibold text-center mb-12 text-white"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {data.map((d) => (
                    <div
                        key={d.id}
                        className="bg-white rounded-tl-[30%] rounded-br-[30%] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        style={{ height: "100%" }}
                    >
                        <div className="h-[230px] overflow-hidden">
                            <Image
                                src={d.image}
                                alt={d.title}
                                className="w-full h-full object-cover"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-4">
                            <h2
                                className="text-lg font-semibold text-black mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
                                title={d.title}
                            >
                                {d.title}
                            </h2>
                            <Link
                                href={`/services/${d.id}`}
                                className="inline-block mt-auto px-5 py-2 w-fit bg-[#084cfc] text-white text-base md:text-lg rounded-lg border-2 border-[#084cfc] hover:bg-transparent hover:text-black transition-all"
                            >
                                {d.btn}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tekservice;
