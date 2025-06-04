import React from 'react'

const Partners = () => {
    const logos = [
        "/logos/caaq.webp",
        "/logos/canceronco.webp",
        "/logos/delhimri.webp",
        "/logos/framilys.webp",
        "/logos/hvd1.webp",
        "/logos/medicamen.webp",
        "/logos/ramkinkarjha.webp",
        "/logos/safegate.webp",
        "/logos/smithways.webp",
        "/logos/springHope.webp",
        "/logos/ssb.webp",
        "/logos/treatglobe.webp",
    ];
    return (
        <div className="py-10 text-center">
            <h2
                className="text-white font-bold mb-6"
                style={{ fontFamily: "'Roboto Slab', serif", fontSize: "2rem" }}
            >
                Trusted by Corporate Partners
            </h2>
            <p
                className="text-white mb-10 mx-auto"
                style={{ maxWidth: "720px" }}
            >
                We are proud to have collaborated with leading brands across various
                industries. Here are some of our valuable partners:
            </p>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded shadow-sm flex items-center justify-center h-24 transition duration-300 hover:bg-black group"
                        >
                            <img
                                src={logo}
                                alt={`Logo ${index}`}
                                className="max-h-12 object-contain transition duration-300 group-hover:drop-shadow-[0_0_10px_#00ffff]"
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners