"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "How long does it take to see results?",
        answer: "Digital marketing is a gradual process. SEO might take 3–6 months for visible results, while paid ads and social media campaigns can show quicker outcomes.",
    },
    {
        question: "Is digital marketing suitable for small businesses?",
        answer: "Absolutely! Digital marketing helps small businesses reach a targeted audience, build brand awareness, and compete with larger brands in a cost-effective way.",
    },
    {
        question: "How do I know which service is right for my business?",
        answer: "We offer a free initial consultation to understand your goals and suggest the best digital marketing strategy tailored to your needs.",
    },
    {
        question: "Can I track the performance of my campaigns?",
        answer: "Yes, we provide detailed performance reports and regular updates so you can see how your campaigns are doing and where improvements are made."
    },
    {
        question: "Do you offer customized digital marketing packages?",
        answer: "Yes, we understand that each business is unique. That’s why we offer customizable packages that fit your budget and objectives."
    },
    {
        question: "How can I get started with TekBooster?",
        answer: "Just reach out to us through our contact form or give us a call. We'll schedule a free consultation and get your digital journey started!"
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-4 mt-5">
            <div className="max-w-6xl mx-auto px-5">

                <motion.h2
                    className="text-center font-semibold text-4xl mb-6 text-white"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }} // amount: how much of the element must be in view
                >
                    Frequently Asked Questions
                </motion.h2>

                <div>
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="shadow-slate-400 shadow-md mb-4 rounded-lg overflow-hidden"
                        >
                            <button
                                className="flex justify-between items-center w-full px-5 py-3 font-medium dark:text-black border-black bg-white hover:bg-gray-200"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-semibold text-lg text-left w-full">{item.question}</span>
                                <IoMdAdd
                                    className={`w-8 bg-black text-white rounded-full h-8 transition-transform ${activeIndex === index ? "rotate-45" : ""}`}
                                />
                            </button>
                            {activeIndex === index && (
                                <div className="p-5 border-t border-black bg-white dark:text-black">
                                    <p className="mb-2 text-left">{item.answer}</p>
                                    {item.list && (
                                        <ul className="list-disc list-outside text-left px-2">
                                            {item.list.map((point, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
