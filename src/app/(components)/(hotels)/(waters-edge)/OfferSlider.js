"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slider = [
  {
    image: "/hotels/waters-edge/offers/slider/offer1.jpeg",
    url:"/hotels/waters-edge/offers/early-bird",
    title: "Get 50% Off Your Second Night",
    offerType: "Just One More Night",
    description:
      "Stay 2 nights & get 50% off your second night at selection hotels",
  },
  {
    image: "/hotels/waters-edge/offers/slider/offer2.jpeg",
    url:"/hotels/waters-edge/offers/early-bird",
    title: "Early Bird Discount",
    offerType: "Just One More Night",
    description:
      "Book 30 days in advance and get 15% off your stay,plus a welcome drink",
  },
  {
    image: "/hotels/waters-edge/offers/slider/offer3.jpeg",
    url:"/hotels/waters-edge/offers/early-bird",
    title: "Spa & Stay Retreat",
    offerType: "Just One More Night",
    description:
      "Escape to paradise! Enjoy a 🌿✨  luxurious stay with exclusive spa treatments",
  },
];

export default function OfferSlider({ nav }) {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);

  const swiperRef = useRef(null);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full mt-5 px-4 sm:px-10">
      <h1 className="text-3xl sm:text-4xl text-center font-semibold">Special Offers</h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slider.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <div className="relative w-80 h-80 sm:h-125 sm:w-125">
                <Image
                  src={slide.image}
                  alt="slide-image"
                  layout="fill"
                  objectFit="cover"
                  className="w-100 h-100"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-sm md:text-md lg:text-lg text-center sm:text-left px-2">
                <h1 className="text-xl sm:text-2xl font-semibold">{slide.title}</h1>
                <p>{slide.offerType}</p>
                <p className="text-center">{slide.description}</p>
                <Link href={slide.url}>
                  <button
                    className="relative text-black py-1 border-b-2 border-transparent"
                    onMouseEnter={activateHover}
                    onMouseLeave={deactivateHover}
                    onTouchStart={activateHover}
                    onTouchEnd={deactivateHover}
                  >
                    Explore
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-7"
                      }`}
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-row items-center justify-center sm:justify-end gap-20 sm:gap-20 px-2 sm:px-4 mt-4">
        <div className="flex gap-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center mt-2">
          <Link href={`${nav}`} className="text-sm text-gray-500">
            View all
          </Link>
        </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
