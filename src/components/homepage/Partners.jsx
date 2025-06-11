"use client";
import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const [colors, setColors] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const thief = new ColorThief();
        const loadColors = async () => {
            const newColors = await Promise.all(
                logos.map((src) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.crossOrigin = "Anonymous";
                        img.src = src;
                        img.onload = () => {
                            try {
                                const palette = thief.getPalette(img, 5);
                                const vibrant = getMostVibrantColor(palette);
                                resolve(vibrant);
                            } catch {
                                resolve("rgb(0,255,255)");
                            }
                        };
                        img.onerror = () => resolve("rgb(0,255,255)");
                    })
                )
            );
            setColors(newColors);
        };

        loadColors();
    }, []);

    useEffect(() => {
        const boxes = gsap.utils.toArray(".partner-box");
        gsap.fromTo(
            boxes,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "expo.out",
                stagger: 0.25,
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


    const getMostVibrantColor = (palette) => {
        if (!palette || !palette.length) return "rgb(0,255,255)";
        const brightColor = palette.reduce((brightest, curr) => {
            const brightness = curr[0] * 0.3 + curr[1] * 0.59 + curr[2] * 0.11;
            const best = brightest[1];
            return brightness > best ? [curr, brightness] : brightest;
        }, [palette[0], 0]);
        const [r, g, b] = brightColor[0];
        return `rgb(${r},${g},${b})`;
    };

    const getBrightness = ([r, g, b]) => r * 0.299 + g * 0.587 + b * 0.114;

    const getNeonColor = (logoRGB, bgRGB = [8, 4, 20]) => {
        const logoBrightness = getBrightness(logoRGB);
        const bgBrightness = getBrightness(bgRGB);

        if (logoBrightness < 128 && bgBrightness < 100) return "rgb(0,255,255)";
        if (logoBrightness > 180 && bgBrightness < 100) return "rgb(255,105,180)";
        if (logoBrightness < 100 && bgBrightness > 180) return "rgb(0,255,180)";

        return `rgb(${logoRGB[0]},${logoRGB[1]},${logoRGB[2]})`;
    };

    return (
        <div className="py-10 text-center">
            <h2 className="text-white font-bold mb-6 px-3" style={{ fontFamily: "'Roboto Slab', serif", fontSize: "2rem" }}>
                Trusted by Corporate Partners
            </h2>
            <p className="text-white mb-10 mx-auto px-3" style={{ maxWidth: "720px" }}>
                We are proud to have collaborated with leading brands across various industries. Here are some of our valuable partners:
            </p>

            <div className="container mx-auto lg:px-10 px-2">
                <div
                    ref={containerRef}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {logos.map((logo, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className="partner-box bg-white p-4 rounded shadow-sm flex items-center justify-center h-24 group transition duration-500 border border-transparent hover:border-yellow-400 hover:shadow-[0_0_15px_#FFD700] hover:bg-transparent"
                                style={{
                                    transition: "border 0.4s ease, box-shadow 0.4s ease",
                                    filter: `drop-shadow(0 0 0px transparent)`
                                }}
                                onMouseEnter={(e) => {
                                    const color = colors[index] || "rgb(0,255,255)";
                                    const match = color.match(/\d+/g)?.map(Number);
                                    const neon = match ? getNeonColor(match) : color;
                                    e.currentTarget.style.filter = `drop-shadow(0 0 10px ${neon})`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = `drop-shadow(0 0 0px transparent)`;
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    className="max-h-12 object-contain transition duration-300"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Partners;