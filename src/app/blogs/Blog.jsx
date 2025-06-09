"use client";
import React, { useEffect, useState } from "react";
import { getBlog } from "@/services/getblog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await getBlog();
        if (Array.isArray(result?.result)) {
          setBlog(result.result);
        } else if (Array.isArray(result)) {
          setBlog(result);
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
    <div className="lg:p-10 overflow-x-clip px-4">
      <div className="pt-5 text-center">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>Latest Blogs</h1>
        <p className="text-lg text-white mt-5">Read our latest blogs.</p>
      </div>

      {blog.length === 0 ? (
        <p className="text-center text-white">No blogs available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blog.map((b) => (
            <div
              key={b.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <Link href={`/blogs/${b.url}`}>
                <Image
                  src={`/blog/${b.image}`}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover"
                  alt={b.title || "blog image"}
                />
              </Link>

              <div className="p-4">
                <Link href={`/blogs/${b.url}`}>
                  <h1 className="text-xl font-bold dark:text-black hover:text-[#084cfc]">{b.title}</h1>
                </Link>
                <div className="flex items-center gap-2 text-sm text-gray-600 my-2">
                  <SlCalender />
                  <span>{b.createdAt ? moment(b.createdAt).format("MMMM DD, YYYY") : "Unknown Date"}</span>
                </div>
                <p className="text-gray-700 line-clamp-3">{b.short_desc}</p>

                <Link href={`/blogs/${b.url}`}>
                  <span className="px-3 py-1.5 mt-3 inline-block cursor-pointer bg-[#084cfc] text-white text-lg rounded-lg text-center transition-all border-2 border-transparent hover:border-[#084cfc] hover:text-black hover:bg-white">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
