"use client";

import { getBlog } from '@/services/getblog';
import React, { useEffect, useState } from 'react';
import moment from "moment";
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Sidebar from '../Sidebar';

const DetailedBlog = ({ url }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const result = await getBlog();
                const blogs = result.result || result;
                const found = blogs.find((b) => b.url === url);
                setBlog(found);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [url]);

    if (loading) {
        return <section className="pt-10 text-center text-black dark:text-white">Loading blog...</section>;
    }

    if (!blog) {
        return <section className="pt-10 text-center text-black dark:text-white">Blog not found.</section>;
    }

    return (
        <section className="overflow-hidden pt-10 lg:px-14 px-3 bg-white">
            <div className="container dark:text-black">
                <div className="flex flex-wrap lg:flex-nowrap -mx-4">

                    {/* Blog Content */}
                    <div className="w-full lg:w-3/4 px-4">
                        <article>
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                                {blog.title}
                            </h1>

                            {/* Author and Date */}
                            <div className="flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                                <div className="flex flex-wrap items-center">
                                    <div className="mb-5 mr-10 flex items-center">
                                        <FaUser className="mr-2 text-[#084cfc]" />
                                        <span className="mb-1 text-base font-medium text-body-color">
                                            By <span>Tekbooster</span>
                                        </span>
                                    </div>
                                    <div className="mb-5 flex items-center">
                                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                                            <span className=" mr-1" aria-hidden="true">
                                                <SlCalender className='text-[#084cfc] mr-2' />
                                            </span>
                                            {blog.createdAt ? moment(blog.createdAt).format("MMMM DD, YYYY") : "Unknown Date"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Image & Description */}
                            <div>
                                <div className="w-full overflow-hidden rounded">
                                    <Image
                                        src={blog.image.startsWith('http') ? blog.image : `/blog/${blog.image}`}
                                        alt={blog.title || "Blog image"}
                                        height={500}
                                        width={800}
                                        className="h-full w-full object-cover object-center"
                                        priority
                                    />
                                </div>
                                <div
                                    className="p-5"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 px-4 mt-10 lg:mt-0">
                        <Sidebar />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DetailedBlog;
