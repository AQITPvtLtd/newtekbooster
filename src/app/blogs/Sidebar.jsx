"use client";

import React from "react";
import { getBlog } from "@/services/getblog";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Sidebar = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function getResult() {
            try {
                const result = await getBlog();
                if (Array.isArray(result?.result)) {
                    setBlog(result.result);
                } else if (Array.isArray(result)) {
                    setBlog(result); // if backend directly returns array
                } else {
                    console.error("Invalid API response format:", result);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error.message);
            }
        }

        getResult();
    }, []);

    return (
        <div>
            <div className="lg:mt-8 mt-3 px-4 sm:px-2 lg:px-8 p-6 border-2 rounded-2xl mb-3">
                <ul className="">
                    <div className="">
                        <p className="text-[#084cfc] font-semibold text-2xl py-2 ">
                            More Blogs
                        </p>
                    </div>
                    <table>
                        <tbody>
                            {blog.map((b) => (
                                <tr
                                    key={b.url}
                                    className="hover:translate-x-2 transition duration-300 ease-in-out"
                                >
                                    <td className="align-top">
                                        <div className="mt-2 hover:text-[#084cfc]">
                                            <AiOutlineDoubleRight />
                                        </div>
                                    </td>
                                    <td>
                                        <Link href={`/blogs/${b.url}`}>
                                            <div className="flex gap-1 items-center hover:text-[#084cfc]">
                                                <h2 className="text-lg font-medium">{b.title}</h2>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;