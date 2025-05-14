"use client";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/blogs/blog1/blog4.jpg",
  "/blogs/blog1/blog2.jpg",
  "/blogs/blog1/blog3.jpg",
  "/blogs/blog1/blog5.jpg",
  "/blogs/blog1/blog6.jpg",
];

export default function Blog4() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/blogs/blog1/blog1.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Blog Text Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          A Taste of Elegance: Dining Delights at Heritage Hotel
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-extralight text-sm sm:text-base text-justify">
          Discover a world of flavor at Heritage Hotel’s signature
          restaurants...
        </p>
      </div>

      {/* First Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src={images[index]}
            alt="Chef Special"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between gap-5 px-2">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full hover:bg-black/50"
            >
              <CircleChevronLeft size={30} color="white"/>
            </button>
            <button onClick={nextSlide} className="p-1 rounded-full hover:bg-black/50">
              <CircleChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Chef’s Special Creations
          </h1>
          <p>
            Explore our chef’s signature dishes that blend tradition with
            innovation. These culinary masterpieces showcase the finest
            ingredients and are crafted to provide an unforgettable dining
            experience. Don’t miss out on these mouthwatering creations on your
            next visit!
          </p>
        </div>
      </div>
    </div>
  );
}
