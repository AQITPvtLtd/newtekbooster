import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { data } from "./information";

const Tekservice = () => {
    return (
        <div className="px-4 pb-5 mt-10">
            <h1 className="text-5xl font-semibold text-center mb-12 text-white">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {data.map((d) => (
                    <div
                        key={d.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        style={{ height: "100%" }}
                    >
                        <div className='h-[230px] overflow-hidden'>
                            {/* Ensuring images are the same size */}
                            <Image
                                src={`${d.image}`}
                                alt={d.title}
                                className="w-full h-full object-cover"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h2
                                className="text-lg font-semibold text-black mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
                                title={d.title}
                            >
                                {d.title}
                            </h2>
                            <Link
                                href={`/services/${d.id}`}
                                className="px-4 py-2 bg-[#4883f6] text-white text-lg rounded-lg block transition-all 
                                    border-2 border-transparent hover:border-[#4883f6] hover:text-black hover:bg-white"
                            >
                                {d.btn}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tekservice