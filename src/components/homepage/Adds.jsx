"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const Adds = () => {
    const reviews = [
        "/ads/img1.png",
        "/ads/img2.png",
        "/ads/img3.png",
        "/ads/img4.png",
        "/ads/img5.png",
        "/ads/img6.png",
    ];

    return (
        <div className="py-10 px-4">
            {/* Heading and Description */}
         

            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
               Platform Affiliation
            </motion.h2>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {reviews.map((src, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={src}
                            width={150}
                            height={80}
                            className="object-contain h-16"
                            alt={`Client logo ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Adds;
