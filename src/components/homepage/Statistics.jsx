"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        title: "Years of Excellence",
        number: 10,
        con: "Delivering 10+ years of innovative digital marketing solutions.",
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

const ProgressCircle = ({ percentage, title, con, delay = 0 }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = percentage ? circumference - (circumference * percentage) / 100 : 0;

    return (
        <motion.div
            className="flex flex-col items-center text-center space-y-4 max-w-xs"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Base Circle (Gray) */}
                    <circle
                        stroke="#e5e7eb" // gray-200
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                    />
                    {/* Progress Circle */}
                    {percentage && (
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
                    )}
                    {/* Text in Center */}
                    <text
                        x="50%"
                        y="50%"
                        dy=".3em"
                        textAnchor="middle"
                        fontSize="18"
                        fontWeight="bold"
                        fill="#FFFFFF" // gray-700
                    >
                        {percentage ? `${percentage}%` : `${stats[0].number}+`}
                    </text>
                </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-white">{con}</p>
        </motion.div>
    );
};

const Statistics = () => {
    return (
        <section className="py-10 px-4">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Results That Define Our Digital Excellence
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-10">
                {stats.map((stat, index) => (
                    <ProgressCircle
                        key={index}
                        percentage={stat.percentage}
                        title={stat.title}
                        con={stat.con}
                        delay={index * 0.3}
                    />
                ))}
            </div>
        </section>
    );
};

export default Statistics;