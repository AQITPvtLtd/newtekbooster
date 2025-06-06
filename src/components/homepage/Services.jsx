"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Custom Arrows
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 right-2 cursor-pointer md:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrNext size={24} />
        </button>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 left-2 cursor-pointer md:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
            onClick={onClick}
        >
            <GrPrevious size={24} />
        </button>
    );
};

const Services = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = async () => {
            const mod = await import("@/data/services");
            setItems(mod.items);
        };
        loadItems();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true },
            },
        ],
    };

    return (
        <div className="relative">
            <motion.h1
                className="text-center font-semibold text-3xl md:text-4xl text-white py-5"
                style={{ fontFamily: "Roboto Slab, serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Services
            </motion.h1>

            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
                <Slider {...settings}>
                    {items.map((item) => (
                        <div key={item.id} className="px-5">
                            <div className="bg-white rounded-tl-[30%] rounded-br-[30%] rounded-lg shadow-xl flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <div className="h-[220px] md:h-[240px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt="service icon"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between p-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>
                                        {item.title}
                                    </h3>
                                    <Link
                                        href={`services/${item.id}`}
                                        className="inline-block mt-auto px-5 py-2 w-fit bg-[#084cfc] text-white text-base md:text-lg rounded-lg border-2 border-[#084cfc] hover:bg-transparent hover:text-black transition-all"
                                    >
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="text-center mt-8">
                    <Link href="/services">
                        <button className="px-6 py-2 bg-[#084cfc] text-white rounded-full shadow-md hover:bg-[#0639c9] transition duration-300">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
