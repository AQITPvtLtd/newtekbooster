import React from 'react'
import Image from 'next/image'

const MissionVision = () => {
    return (
        <div>
            <section className="py-16 px-4 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 relative">
                    {/* Vertical Divider */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-400"></div>

                    {/* Vision Block */}
                    <div className="flex flex-col items-center text-center md:w-1/2 px-4">
                        <div className="w-24 h-24 mb-4">
                            <Image src="/about/vision.png" alt="Vision Icon" width={96} height={96} />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#084cfc] mb-3">VISION</h3>
                        <p className="text-white max-w-md">
                            Our vision at TekBooster is to revolutionize the digital marketing landscape by empowering businesses of all sizes to thrive and succeed in the ever-evolving digital world. As a revolutionary web development agency in Delhi, we envision a future where innovation drives success, brands are empowered with tools and expertise, lasting relationships are built on trust and transparency, and positive change is driven in the industry.
                        </p>
                    </div>

                    {/* Mission Block */}
                    <div className="flex flex-col items-center text-center md:w-1/2 px-4 mt-10 md:mt-0">
                        <div className="w-24 h-24 mb-4">
                            <Image src="/about/mission.png" alt="Mission Icon" width={96} height={96} />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#084cfc] mb-3">MISSION</h3>
                        <p className="text-white max-w-md">
                            Our mission is to become the best digital marketing company in Delhi, driving innovation, setting new standards, and inspiring positive change for businesses worldwide. We envision a future where every brand has the tools, strategies, and expertise needed to thrive and succeed in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MissionVision