"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useData } from "@/app/context/DataContext";

export default function OfferSlider({ nav }) {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const { offers } = useData();

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };
  if (offers.length === 0) return null; // <-- Add this line


  return (
    <div className="w-full mt-5 px-4 sm:px-10 xl:px-20 2xl:px-40">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-center font-semibold">
        Special Offers
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer._id}>
            <div className="flex flex-col items-center sm:flex-row gap-5 sm:gap-20 mt-10 xl:gap-32 2xl:gap-40">
              <div className="relative ">
                <Image
                  src={offer.image}
                  alt="offer-image"
                  width={1500}
                  height={100}
                  className="w-80 h-80 sm:h-125 sm:w-125 xl:w-[450px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[600px] object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-3 text-sm md:text-md lg:text-lg text-center sm:text-left max-w-xl xl:max-w-2xl 2xl:max-w-3xl ">
                <h1 className="xl:text-2xl font-semibold">
                  {offer.offer_type}
                </h1>
                <h2 className=" xl:text-xl  text-gray-600">{offer.title}</h2>
                <p className="text-center my-3 xl:my-12 2xl:my-16">
                  {offer.description}
                </p>
                <Link href={`/offers/${offer._id}`}>
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

      <div className="flex flex-row items-center justify-between sm:justify-end gap-10 sm:gap-20 px-2 sm:px-4 mt-4 xl:gap-20 2xl:gap-25">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Previous Slide"
        >
          <ArrowLeft size={20} />
        </button>

        <Link
          href="/offers"
          className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-500"
        >
          View all
        </Link>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Next Slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
