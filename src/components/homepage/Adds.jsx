"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Adds = () => {
    const reviews = [
        "/ads/img1.png",
        "/ads/img2.png",
        "/ads/img3.png",
        "/ads/img4.png",
        "/ads/img5.png",
        "/ads/img6.png",
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const boxes = gsap.utils.toArray(".logo-box");

        gsap.fromTo(
            boxes,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9, // slower for smoothness
                ease: "expo.out", // smoother easing
                stagger: 0.2, // slightly more delay between items
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reset",
                    once: false,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="py-10 px-4">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Platform Affiliation
            </motion.h2>

            {/* Parent wrapper with ref */}
            <div
                ref={containerRef}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-10"
            >
                {reviews.map((src, index) => (
                    <div
                        key={index}
                        className="logo-box bg-white rounded-md shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
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
