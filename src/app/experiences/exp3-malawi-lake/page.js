import Image from "next/image";
import React from "react";

export default function Experience3() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp3-malawi-lake/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Explore the Islands of Lake Malawi
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-light text-sm sm:text-base text-justify">
          Hop on a boat and journey to the serene islands of Lake Malawi, where
          untouched beaches and lush vegetation await. Spend the day exploring
          these hidden gems, swimming in crystal-clear waters, or simply
          relaxing on the shore, away from the crowds.
        </p>
      </div>

      {/* Slide Card Section */}
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/experience/exp3-malawi-lake/exp-bg2.jpg"
          alt="exp-img"
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
                Lake Malawi Sunset Cruise
              </div>

              {/* Slide-In Card */}
              <div className="absolute inset-0 flex flex-col p-2 items-center justify-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <p className="text-sm">
                  Experience the magic of Lake Malawi with a captivating sunset
                  cruise, where the tranquil waters reflect the golden and pink
                  hues of the setting sun. As you glide across the lake, you'll
                  be surrounded by the stunning landscapes of lush hills, sandy
                  shores, and the occasional sighting of wildlife along the
                  coastline.
                </p>
              </div>
            </div>

            {/* Mobile View (Static Stacked View) */}
            <div className="flex flex-col sm:hidden bg-white bg-opacity-90 p-4 text-sm">
              <div className="text-black font-semibold mb-2">
                Lake Malawi Sunset Cruise
              </div>
              <p>
                Experience the magic of Lake Malawi with a captivating sunset
                cruise, where the tranquil waters reflect the golden and pink
                hues of the setting sun. As you glide across the lake, you'll be
                surrounded by the stunning landscapes of lush hills, sandy
                shores, and the occasional sighting of wildlife along the
                coastline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card Section */}
      <div className="flex flex-col md:flex-row items-center mt-10 px-4 sm:px-10 gap-5">
        <Image
          src="/experience/exp3-malawi-lake/exp.jpeg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-auto"
        />
        <div className="flex flex-col items-start gap-2 text-sm md:text-base">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            Cultural Experience at Lake Malawi Villages
          </h1>
          <p>
            Immerse yourself in the local culture of Lake Malawi’s surrounding
            villages. Visit vibrant communities, interact with friendly locals,
            and learn about traditional fishing methods, crafts, and daily life.
            This cultural experience will deepen your connection with the region
            while offering an authentic insight into Malawian life.
          </p>
        </div>
      </div>
    </div>
  );
}
