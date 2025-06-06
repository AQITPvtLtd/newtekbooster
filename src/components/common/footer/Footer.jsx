import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";
// import NewsLetter from "../NewLetter";
const Footer = () => {
  return (
    <div className="mt-20 mx-auto w-full p-4 lg:py-8 bg-gradient-to-t bg-blue">
      {/* <NewsLetter /> */}
      <div className="px-10 text-white">
        <div className="lg:grid grid-cols-4">
          {/* logo */}
          <div>
            <Link href="/">
              <Image
                src="/logo/logowhite.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[250px] mb-4"
              />
            </Link>
            <p className=" leading-normal">
              At TekBooster, we are passionate about helping businesses thrive
              in the digital world.
            </p>
          </div>
          <div className="lg:flex justify-center mt-6">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

              <ul className="mb-0 leading-loose">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    About Us
                  </Link>
                </li><li>
                  <Link
                    href="/services"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-center mt-6">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">What We Do</h5>

              <ul className="mb-0 leading-loose list-none">
                <li>
                  <Link
                    href="/services/4"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/1"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Website development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/7"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/2"
                    className="hover:text-orange-200 hover:scale-105"
                  >
                    Content Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* address */}
          <div className="lg:flex justify-center mt-6 lg:ml-5">
            <div className="mb-6">
              <h5 className="mb-4 font-bold uppercase">Connect with us</h5>
              <ul className="space-y-4">
                {/* Phone */}
                <li>
                  <Link href="tel:9582-930-940" className="flex items-center gap-2 hover:text-orange-200 hover:scale-105 transition">
                    <FaPhone className="text-lg" />
                    <span>+91 9582-930-940</span>
                  </Link>
                </li>

                {/* WhatsApp */}
                <li>
                  <Link href="https://wa.link/1dzd8t" target="_blank" className="flex items-center gap-2 hover:text-orange-200 hover:scale-105 transition">
                    <RiWhatsappFill className="text-xl" />
                    <span>Connect on WhatsApp</span>
                  </Link>
                </li>

                {/* Address */}
                <li>
                  <Link
                    href="https://www.google.com/maps/search/Fourth+floor,+2E,+4,+Jhandewalan+Extension,+Delhi,+110055/@28.7667911,77.0054189,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="flex items-start gap-3 hover:text-orange-200 hover:scale-105 transition"
                  >
                    <FaLocationDot className="text-xl mt-1" />
                    <span>
                      Fourth floor, 2E, 4, Jhandewalan Extension, Delhi, 110055
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
      <div className="flex justify-center space-x-4 pb-4">
        <Link href="https://www.facebook.com/profile.php?id=61557224162661&is_tour_dismissed=true" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com/tek_booster/" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/tek-booster-7739092b8/" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaLinkedinIn />
        </Link>
        <Link href="https://twitter.com/Tek_booster" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaXTwitter />
        </Link>
        <Link href="https://www.youtube.com/channel/UCdI4zxcUrKryZd__uQysiNg" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaYoutube />
        </Link>

        <Link href="https://in.pinterest.com/tekbooster/" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaPinterest />
        </Link>

        <Link href="https://www.quora.com/profile/Tekbooster" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaQuora />
        </Link>
        <Link href="https://wa.link/1dzd8t" target="__blank" className="text-white text-2xl transition-transform duration-300 hover:scale-110">
          <FaWhatsapp />
        </Link>

      </div>

      <div className="flex justify-center items-center text-white">
        <span className="text-sm sm:text-center ">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Tek Booster
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
