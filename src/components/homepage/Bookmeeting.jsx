import React from 'react'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Form from '@/app/contact/form/Form';
import Addresses from './Addresses';

const Bookmeeting = () => {
    const AddressContent = () => (
        <div className="space-x-16">
            <Link href="tel:+919711400908" aria-label="Call our phone number">
                <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                    <IoCall className="text-white text-3xl sm:text-4xl p-2 bg-[#084cfc] rounded-full" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Phone Number</h3>
                        <p className="text-gray-300 text-sm sm:text-base">+91 9582-930-940</p>
                    </div>
                </div>
            </Link>

            <Link href="mailto:drdevavratarya@gmail.com" aria-label="Send us an email">
                <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                    <MdEmail className="text-white text-3xl sm:text-4xl p-2 bg-[#084cfc] rounded-full" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Email Address</h3>
                        <p className="text-gray-300 text-sm sm:text-base">info@tekbooster.com</p>
                    </div>
                </div>
            </Link>

            {/* <Link href="" aria-label="View our location on Google Maps">
                <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300">
                    <IoLocationSharp className="text-white text-3xl sm:text-4xl p-2 bg-[#084cfc] rounded-full" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Office Address</h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-xs">
                            Fourth floor, 2E, 4, Jhandewalan Extension, Delhi, 110055
                        </p>
                    </div>
                </div>
            </Link>

            <Link href="" aria-label="View our location on Google Maps">
                <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300">
                    <IoLocationSharp className="text-white text-3xl sm:text-4xl p-2 bg-[#084cfc] rounded-full" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Branch Address</h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-xs">
                            1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I, South Delhi, Delhi 110003
                        </p>
                    </div>
                </div>
            </Link> */}


        </div>
    );

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-10">
            <h2 className="text-white text-center text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: "Roboto Slab, serif" }}>Contact</h2>
            <div className="mx-auto lg:grid grid-cols-12 gap-y-10 items-start">
                <div className="col-start-3 col-span-4">
                    <AddressContent />
                </div>
                <div className="col-span-4 mt-5 lg:mt-0">
                    <Form />
                </div>
            </div>
            <Addresses />
        </section>
    );
}

export default Bookmeeting;
