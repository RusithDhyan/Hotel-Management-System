"use client"; // Required for Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css/autoplay"; // Import autoplay styles

import Image from "next/image";

export default function HomeSlider() {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Autoplay]} // Enable Autoplay module
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Only show one slide at a time
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        breakpoints={{
          640: { slidesPerView: 1 }, // Show one slide on smaller screens
          768: { slidesPerView: 1 }, // Show one slide on medium screens
          1024: { slidesPerView: 1 }, // Show one slide on larger screens
        }}
      >
        {[1, 2, 3,4].map((num) => (
          <SwiperSlide key={num}>
            <div className="flex flex-col sm:flex-row  items-center justify-center gap-5">
              <div className=" relative">
                <Image
                  src={`/images/bg${num}.jpg`} // Ensure the images exist
                  alt={`Slide ${num}`}
                  width={1500}
                  height={100}
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center sm:pb-10 lg:pb-10 md:pb-10">
                <h1 className=" text-center text-xl lg:text-5xl md:text-3xl text-white">
                  Relax, Unwind & Experience Luxury
                  <br />
                  in the Heart of Malawi{" "}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
