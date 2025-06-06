"use client";

import Image from "next/image";
import Link from "next/link";
import BlogForm from "../BlogForm";
import { useData } from "../context/DataContext";

export default function BlogPage() {
  const {blogs} = useData();

  return (
    <div className="min-h-screen">
      {/* Top Cover */}
      <div className="w-full relative">
        <Image
          src="/images/blogs.JPG"
          alt="Blog Cover"
          width={1500}
          height={100}
          className="object-cover w-full h-100"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Serendib Stories
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Explore Malawi with Us
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Travel stories, local insights, and unforgettable moments from Serendib Hotels & Resorts.
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10 text-gray-500">
          <p>No blogs available at the moment.</p>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-6 pt-10">
        {/* Blog Cards Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 md:h-60 w-full group">
                <Link href={`/blogs/${blog._id}`}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                </Link>
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm md:text-base">{blog.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* <BlogForm/> */}
    </div>
  );
}
