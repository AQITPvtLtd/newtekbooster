"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080414] py-1" style={{ boxShadow: '0px 0px 12px 3px rgba(0, 255, 255, 0.4)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Logo & Branding */}
                    <div className="flex items-center space-x-3">
                        <Link href="/">
                            <Image src="/logo/logowhite.png" alt="Tek Booster Logo" width={200} height={200} />
                        </Link>
                    </div>

                    {/* Toggle Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div
                        className="hidden md:flex space-x-8 font-semibold text-white text-lg"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        <Link
                            href="/"
                            className="relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            HOME
                        </Link>
                        <Link
                            href="/about"
                            className="relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/services"
                            className="relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            SERVICES
                        </Link>
                        <Link
                            href="/blogs"
                            className="relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            BLOGS
                        </Link>
                        <Link
                            href="/contact"
                            className="relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            CONTACT US
                        </Link>
                    </div>

                </div>

                {/* Navigation Links - Mobile */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 space-y-3 font-semibold text-white text-base">
                        <Link
                            href="/"
                            className="relative block transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            HOME
                        </Link>
                        <Link
                            href="/about"
                            className="relative block transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/services"
                            className="relative block transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            SERVICES
                        </Link>
                        <Link
                            href="/blogs"
                            className="relative block transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            BLOG
                        </Link>
                        <Link
                            href="/contact"
                            className="relative block transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            CONTACT US
                        </Link>
                    </div>

                )}
            </nav>

            {/* Add padding to avoid content being hidden under navbar */}
            <div className="h-20 md:h-20" />
        </div>
    );
}

export default Header;