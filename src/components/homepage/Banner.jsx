import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 items-center gap-10 px-6 py-12">
            {/* Left Image */}
            <div className="flex justify-center">
                <img src="/banner/airobo2.gif" alt="AI Robo Banner" className="w-full max-w-[700px] rounded-lg shadow-lg" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="space-y-4" style={{ fontFamily: "Roboto Slab, serif" }}>
                    <p className="text-4xl font-bold text-white">Work fast from anywhere</p>
                    <p className="text-2xl text-gray-300">Your trusted Digital Marketing Platform</p>
                    <p className="text-3xl font-bold text-white">Providing the best user experience</p>
                    <p className="text-xl text-gray-400">Guaranteed delivery of the best service</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 mt-8">
                    <Link href="/contact">
                        <button className="bg-[#084cfc] hover:bg-[#0639c9] cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition-all">
                            Know More
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-transparent border-2 border-[#084cfc] cursor-pointer hover:bg-[#084cfc] text-white font-semibold px-6 py-3 rounded-lg transition-all">
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
