"use client"; // Required for Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import autoplay styles

import Image from "next/image";
import Link from "next/link";

export default function PhotoSlider() {
  return (
    <div className="w-full mt-5">
      <h1 className="text-4xl text-center">Offer</h1>
      <Link href="/offers" className="items-center justify-center flex text-gray-400 text-sm lg:text-lg md:text-md">View more</Link>
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
        {[1, 2, 3].map((num) => (
          <SwiperSlide key={num} >
            <div className="flex flex-col sm:flex-row  items-center justify-center gap-5 mt-10 px-5">
                <div className="w-1/2 h-50 md:h-100 lg:h-150 relative">
              <Image
                src={`/images/offer${num}.jpeg`} // Ensure the images exist
                alt={`Slide ${num}`}
                layout="fill" // Ensures the image fills the parent container
                objectFit="cover" // Keeps the aspect ratio intact
           
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-sm md:text-md lg:text-lg ">
              <h1>Get 50% Off Your Second Night</h1>
              <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-400">Just One More Night</h1>
              <h2 >Stay 2 nights & get 50% off your second night at selection hotels</h2>
              <button href="/" className=" mt-5">Explore</button>
            </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
