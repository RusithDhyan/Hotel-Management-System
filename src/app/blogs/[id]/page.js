"use client";
import InquiryForm from "@/app/(components)/(experience)/InquiryForm";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp1-cable-walk/exp1.jpeg",
  "/experience/exp1-cable-walk/exp2.jpg",
  "/experience/exp1-cable-walk/exp3.jpeg",
  "/experience/exp1-cable-walk/exp4.jpeg",
  "/experience/exp1-cable-walk/exp5.jpeg",
];

export default function BlogInnerPage() {
  const [index, setIndex] = useState(0);

  const [blog, setBlogs] = useState({});
  const { id } = useParams();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % blog.image_slider.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + blog.image_slider.length) % blog.image_slider.length
    );
  };

  useEffect(() => {
    const images = blog?.image_slider || [];

    if (images.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [blog]);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      setBlogs(data.blog);
    };
    if (id) fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        {blog.image ? (
          <Image
            src={blog.image}
            alt="contact-img"
            width={1500}
            height={800}
            className="w-full h-100 object-cover"
          />
        ) : null}
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">{blog.main_title}</h1>
        <p className="font-light text-sm sm:text-base text-justify">
          {blog.main_description}
        </p>
      </div>

      {/* Image Slider and Description */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          {blog?.image_slider?.length > 0 && (
            <img
              src={blog.image_slider[index]}
              alt={`room-${index}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-between gap-5 px-2">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full hover:bg-black/50"
            >
              <CircleChevronLeft size={30} color="white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded-full hover:bg-black/50"
            >
              <CircleChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {blog.body_title}
          </h1>
          <p>{blog.body_description}</p>
        </div>
      </div>

      <InquiryForm />
    </div>
  );
}
