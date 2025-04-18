"use client"; // Required for Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import autoplay styles

import Image from "next/image";
import Link from "next/link";

export default function OfferSlider({ nav }) {
  const slider = [
    {
      image: "/images/offer1.jpeg",
      url:"/hotels/kambiri-beach/offers/early-bird",
      title: "Get 50% Off Your Second Night",
      offerType: "Just One More Night",
      description:
        "Stay 2 nights & get 50% off your second night at selection hotels",
    },
    {
      image: "/images/offer2.jpeg",
      url:"/hotels/kambiri-beach/offers/early-bird",
      title: "Early Bird Discount",
      offerType: "Just One More Night",
      description:
        "Book 30 days in advance and get 15% off your stay,plus a welcome drink",
    },
    {
      image: "/images/offer3.jpeg",
      url:"/hotels/kambiri-beach/offers/early-bird",
      title: "Spa & Stay Retreat",
      offerType: "Just One More Night",
      description:
        "Escape to paradise! Enjoy a 🌿✨  luxurious stay with exclusive spa treatments",
    },
  ];

  return (
    <div className="w-full mt-5">
      <h1 className="text-4xl text-center">Offer</h1>
      <div>
        <Link
          href={`/${nav}`}
          className="items-center justify-center flex text-sm lg:text-lg md:text-md"
        >
          <button className="relative group text-gray-400 py-1 px-2 border-b-2 border-transparent">
            View more
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Link>
      </div>
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
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row  items-center justify-center gap-5 mt-10 px-5">
              <div className="w-80 h-80 relative">
                <Image
                  src={slide.image}
                  alt="slide-image"
                  layout="fill" // Ensures the image fills the parent container
                  objectFit="cover" // Keeps the aspect ratio intact
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-sm md:text-md lg:text-lg ">
                <h1>{slide.title}</h1>
                <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-400">
                  {slide.offerType}
                </h1>
                <h2>{slide.description}</h2>
                <Link href={slide.url}>
                  <button className="relative group text-black py-1 px-2 border-b-2 border-transparent">
                    Explore
                    <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
