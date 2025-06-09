"use client";
import React, { useState } from 'react';
import { form } from '@/services/user';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        servicename: "",
        location: "",
        message: "",
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("servicename", formData.servicename);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("message", formData.message);


        try {
            const response = await form(formDataToSend)
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    servicename: "",
                    location: "",
                    message: "",
                })
                router.push("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            })
        }
        finally {
            setLoading(false)
        }
    };
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-xl shadow-[#3c82f6]/40 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
                Connect With Us
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                        placeholder="Your Name"
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlechange}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                        placeholder="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />
                    <select
                        id="servicename"
                        name="servicename"
                        className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                        value={formData.servicename}
                        onChange={handlechange}
                        required
                    >
                        <option value="">I Am Looking For</option>
                        <option>Website Development</option>
                        <option>Search Engine Optimization</option>
                        <option>Content Marketing</option>
                        <option>Email Marketing</option>
                        <option>Social Marketing</option>
                        <option>Video Marketing</option>
                        <option>Branding</option>
                        <option>Graphic Design</option>
                        <option>Market-Place Management</option>
                        <option>E-Commerce Management</option>
                        <option>Online Reputation Management</option>
                        <option>Performance Marketing</option>
                    </select>
                </div>

                <input className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                    placeholder="Enter Your Location..." type="location" name="location" id="location" value={formData.location}
                    onChange={handlechange} required />

                <textarea
                    className="bg-gray-100 p-3 w-full rounded-md border border-gray-300 focus:border-[#084cfc] focus:ring-1 focus:ring-[#084cfc] outline-none text-sm sm:text-base"
                    placeholder="Message..."
                    rows="3"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handlechange}
                ></textarea>

                <div className="text-center mt-4">
                    {
                        loading ? (<div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 rounded-md" style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}>
                            <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                        </div>) : (<button className="bg-[#084cfc] text-white font-semibold px-6 py-3 cursor-pointer rounded-xl hover:bg-[#0639c9] transition duration-300">
                            Submit
                        </button>)
                    }
                </div>
            </form>
        </div>
    );
};

export default Form;
