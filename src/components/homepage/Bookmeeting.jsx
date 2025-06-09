import React from 'react'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Form from '@/app/contact/form/Form';

const Bookmeeting = () => {
    const AddressContent = () => (
        <div className="space-y-6">
            {/* Top Row: Phone and Email */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Phone */}
                <Link href="tel:+919582-930-940" aria-label="Call our phone number">
                    <div className="bg-white rounded-lg shadow-md p-3 text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                        <div className="flex justify-center mb-2">
                            <IoCall className="text-white text-3xl sm:text-4xl p-3 bg-[#084cfc] rounded-full" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Phone Number</h3>
                        <p className="text-gray-700 text-sm sm:text-base mt-1">+91 9582-930-940</p>
                    </div>
                </Link>

                {/* Email */}
                <Link href="mailto:info@tekbooster.com" aria-label="Send us an email">
                    <div className="bg-white rounded-lg shadow-md p-3 text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                        <div className="flex justify-center mb-2">
                            <MdEmail className="text-white text-3xl sm:text-4xl p-3 bg-[#084cfc] rounded-full" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Email Address</h3>
                        <p className="text-gray-700 text-sm sm:text-base mt-1">info@tekbooster.com</p>
                    </div>
                </Link>
            </div>

            {/* Corporate and Branch Addresses */}
            <div className="bg-white rounded-lg shadow-md p-6 ">
                {/* Corporate Address */}
                <div className="text-center mb-6 p-3 rounded-2xl hover:scale-[1.02] transition-transform duration-300" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                    <Link href='https://maps.app.goo.gl/5JndU6hT3avgQBHZ9' target='__blank' >
                        <div className="flex justify-center mb-4">
                            <IoLocationSharp className="text-white text-3xl sm:text-4xl p-3 bg-[#084cfc] rounded-full" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-black">Corporate Office</h3>
                        <p className="text-gray-700 text-sm sm:text-base mt-1">
                            1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I, South Delhi, Delhi 110003
                        </p>
                    </Link>
                </div>

                {/* Branch Addresses */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Branch – Karol Bagh */}
                    <Link href='https://maps.app.goo.gl/SKHJzoxnJVa1VLkW7' className='rounded-2xl p-3 hover:scale-[1.02] transition-transform duration-300' target='__blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <div className="flex justify-center mb-4">
                            <IoLocationSharp className="text-white text-3xl sm:text-4xl p-3 bg-[#084cfc] rounded-full" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-base sm:text-lg font-semibold text-black">Branch Office</h3>
                            <p className="text-gray-700 text-sm sm:text-base mt-1">
                                4th Floor, 2E, 4, Block E 2, Jhandewalan Extension, <br /> Karol Bagh, New Delhi, <br /> Delhi 110055
                            </p>
                        </div>
                    </Link>

                    {/* Branch – Shalimar Bagh */}
                    <Link href='https://maps.app.goo.gl/EPQcdZbHEbQ2GYBR7' className='rounded-2xl p-3 hover:scale-[1.02] transition-transform duration-300' target='__blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                        <div className="flex justify-center mb-4">
                            <IoLocationSharp className="text-white text-3xl sm:text-4xl p-3 bg-[#084cfc] rounded-full" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-base sm:text-lg font-semibold text-black">Branch Office</h3>
                            <p className="text-gray-700 text-sm sm:text-base mt-1">
                                Shop no. 02, 220/3, <br /> Near Hanuman Mandir, <br /> Vill Shalimar Bagh, <br /> New Delhi, Delhi - 110088
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );


    return (
        <section className="py-12 px-4 sm:px-6 lg:px-10">
            <h2 className="text-white text-center text-3xl sm:text-4xl font-bold mb-10" style={{ fontFamily: "Roboto Slab, serif" }}>Contact Us</h2>
            <div className="mx-auto lg:grid grid-cols-12 gap-y-10 items-center">
                <div className="col-start-2 col-span-6 px-10">
                    <AddressContent />
                </div>
                <div className="col-span-4 mt-5 lg:mt-0">
                    <Form />
                </div>
            </div>

        </section>
    );
}

export default Bookmeeting;
