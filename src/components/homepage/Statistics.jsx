"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        title: "Years of Excellence",
        number: 4,
        con: "Delivering 4+ years of innovative digital marketing solutions.",
    },
    {
        title: "Client Satisfaction",
        percentage: 97,
        con: "97% of our clients report significant ROI through our tailored campaigns.",
    },
    {
        title: "Campaign Success Rate",
        percentage: 92,
        con: "Proven 92% success rate across SEO, SMM, and paid ad campaigns.",
    },
];

const ProgressCircle = ({ percentage, number, title, con }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const progress = percentage ?? 100;
    const offset = circumference - (circumference * progress) / 100;

    return (
        <div className="stat-box flex flex-col items-center text-center space-y-4 max-w-xs opacity-0 translate-y-10">
            <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                    />
                    <circle
                        stroke="#084cfc"
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                    <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        fontSize="18"
                        fontWeight="bold"
                        fill="#FFFFFF"
                    >
                        {percentage !== undefined ? `${percentage}%` : `${number}+`}
                    </text>
                </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-white">{con}</p>
        </div>
    );
};

const Statistics = () => {
    const statsRef = useRef(null);

    useEffect(() => {
        const statBoxes = gsap.utils.toArray(".stat-box");

        gsap.to(statBoxes, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.3,
            ease: "expo.out",
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
                toggleActions: "play none none reset",
                once: false,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="py-10 px-4" ref={statsRef}>
            <h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Results That Define Our Digital Excellence
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
                {stats.map((stat, index) => (
                    <ProgressCircle
                        key={index}
                        percentage={stat.percentage}
                        number={stat.number}
                        title={stat.title}
                        con={stat.con}
                    />
                ))}
            </div>
        </section>
    );
};

export default Statistics;
