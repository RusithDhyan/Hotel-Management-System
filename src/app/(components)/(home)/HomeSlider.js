"use client"; // Required for Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css/autoplay"; // Import autoplay styles

import Image from "next/image";

export default function HomeSlider() {
  const homeSlider = [
    {
      url: "/images/bg1.jpg",
      title: "Relax,Unwind & Expreience Luxury in the Heart of Malawi...",
    },
    {
      url: "/images/bg2.jpg",
      title: "A Pool with a View Unwind in Malawi's Hidden Oasis",
    },
    {
      url: "/images/bg3.jpg",
      title: "Malawi's Safari Magic:Where Nature Comes Alive",
    },
  ];
  return (
    <div className="w-full">
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
        {homeSlider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
  <Image
    src={slide.url}
    alt="slide-img"
    fill
    className="object-cover w-full h-full"
    priority
  />

  {/* Title container with responsive position */}
  <div className="absolute inset-0 flex justify-center items-center sm:items-end pb-5">
    <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold px-4 text-center drop-shadow-md">
      {slide.title}
    </h1>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
