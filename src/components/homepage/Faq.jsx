"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How long does it take to see results?",
    answer:
      "Digital marketing is a gradual process. SEO might take 3–6 months for visible results, while paid ads and social media campaigns can show quicker outcomes.",
  },
  {
    question: "Is digital marketing suitable for small businesses?",
    answer:
      "Absolutely! Digital marketing helps small businesses reach a targeted audience, build brand awareness, and compete with larger brands in a cost-effective way.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "We offer a free initial consultation to understand your goals and suggest the best digital marketing strategy tailored to your needs.",
  },
  {
    question: "Can I track the performance of my campaigns?",
    answer:
      "Yes, we provide detailed performance reports and regular updates so you can see how your campaigns are doing and where improvements are made.",
  },
  {
    question: "Do you offer customized digital marketing packages?",
    answer:
      "Yes, we understand that each business is unique. That’s why we offer customizable packages that fit your budget and objectives.",
  },
  {
    question: "How can I get started with TekBooster?",
    answer:
      "Just reach out to us through our contact form or give us a call. We'll schedule a free consultation and get your digital journey started!",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqContainerRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const faqBoxes = gsap.utils.toArray(".faq-box");

    gsap.fromTo(
      faqBoxes,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
          once: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-4 mt-5">
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          className="text-center font-semibold text-4xl mb-6 text-white"
          style={{ fontFamily: "Roboto Slab, serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div ref={faqContainerRef}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-box shadow-slate-400 shadow-md mb-4 rounded-lg overflow-hidden"
            >
              <button
                id={`faq-btn-${index}`}
                aria-controls={`faq-panel-${index}`}
                aria-expanded={activeIndex === index}
                className="flex justify-between cursor-pointer items-center w-full px-5 py-3 font-medium dark:text-black border-black bg-white hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleAccordion(index);
                  }
                }}
              >
                <span className="font-semibold text-lg text-left w-full">
                  {item.question}
                </span>
                <IoMdAdd
                  className={`w-8 bg-black text-white rounded-full h-8 transition-transform ${activeIndex === index ? "rotate-45" : ""
                    }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="overflow-hidden border-t border-black bg-white dark:text-black"
                    initial={{ maxHeight: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    animate={{ maxHeight: 500, opacity: 1, paddingTop: 20, paddingBottom: 20 }}
                    exit={{ maxHeight: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p className="mb-2 text-left px-5">{item.answer}</p>
                    {item.list && (
                      <ul className="list-disc list-outside text-left px-7">
                        {item.list.map((point, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                        ))}
                      </ul>
                    )}
                  </motion.div>

                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
