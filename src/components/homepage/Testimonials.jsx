"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

const videos = [
    '77IVkqOhmWo',
    'azvUODBINvs',
    'm23WGp-Vs34'
];

// Dummy wrappers, actual arrow logic is handled by slick manually
const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
    >
        <GrPrevious size={20} />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition"
    >
        <GrNext size={20} />
    </button>
);

const Testimonial = () => {
    const sliderRef = React.useRef(null);

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, // disable default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="py-10">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Clients Testimonials
            </motion.h2>

            <div className="relative px-4 max-w-7xl mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {videos.map((id, index) => (
                        <div key={index} className="px-3">
                            <div className="transition-transform duration-500 ease-in-out transform scale-90 slick-center:scale-105 rounded-xl overflow-hidden shadow-md bg-white">
                                <iframe
                                    width="100%"
                                    height="300"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Arrows centered below slider */}
                <div className="flex justify-center gap-4 mt-6">
                    <CustomPrevArrow onClick={goToPrev} />
                    <CustomNextArrow onClick={goToNext} />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;