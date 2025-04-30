import Image from "next/image";
import React from "react";

export default function Blog4() {
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

      {/* Slide Card Section */}
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/blogs/blog1/blog-bg.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-4 sm:px-10 flex items-end justify-end">
          <div className="relative w-full sm:w-100 h-50 overflow-hidden group">
            {/* Desktop View (Hover Effect) */}
            <div className="hidden sm:flex">
              {/* Front Card */}
              <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-xl transition-all duration-500 group-hover:opacity-0">
                Experience the Flavors of Heritage
              </div>

              {/* Slide-In Card */}
              <div className="absolute inset-0 flex flex-col p-2 items-center justify-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <p className="text-sm">
                At Heritage Hotels, dining is more than a meal—it's a journey
                through taste and tradition. Our curated menu features a
                harmonious blend of local Sri Lankan flavors and international
                favorites, crafted with the finest ingredients by our expert
                chefs.
                </p>
              </div>
            </div>

            {/* Mobile View (Always Visible Content) */}
            <div className="flex flex-col sm:hidden bg-white bg-opacity-90 p-4 text-sm">
              <div className="text-black font-semibold mb-2">
                Experience the Flavors of Heritage
              </div>
              <p>
                At Heritage Hotels, dining is more than a meal—it's a journey
                through taste and tradition. Our curated menu features a
                harmonious blend of local Sri Lankan flavors and international
                favorites, crafted with the finest ingredients by our expert
                chefs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* First Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <Image
          src="/blogs/blog1/blog4.jpg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-auto"
        />
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

      {/* Second Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Fresh, Local, and Sustainable
          </h1>
          <p>
            At Heritage Hotels, we believe in using only the freshest local
            produce and sustainable ingredients in our dishes. From farm to
            table, we take pride in supporting local farmers and ensuring that
            every meal is as fresh and eco-friendly as possible.
          </p>
        </div>
        <Image
          src="/blogs/blog1/blog5.jpg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-auto"
        />
      </div>
    </div>
  );
}
