import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Statistics from './Statistics'
import Adds from './Adds'

const About = () => {
    return (
        <div className="px-5">
            <div className="pb-8">
                    <div className="items-center justify-center w-full h-full p-8 text-center flex flex-col-reverse">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-center text-white font-semibold text-4xl" style={{ fontFamily: "Roboto Slab, serif" }}>
                                About us
                            </h1>
                            <p className="text-white mt-5 text-lg md:text-xl leading-relaxed">
                                At TekBooster, we are passionate about helping businesses thrive in the digital world.
                                Our mission is to empower brands with innovative digital marketing solutions that drive growth, engagement, and success. With a team of
                                dedicated professionals staying at the forefront of trends and technologies, we tailor strategies to meet each client’s unique goals.
                                Our commitment to excellence and measurable results makes us a trusted partner in digital transformation.
                            </p>
                            <div className="mt-5">
                                <Link
                                    href={"/about"}
                                    className="px-6 py-2 bg-[#084cfc] text-white rounded-full shadow-md hover:bg-[#0639c9] transition duration-300"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
            <Statistics />
            <Adds />
        </div>

    )
}

export default About