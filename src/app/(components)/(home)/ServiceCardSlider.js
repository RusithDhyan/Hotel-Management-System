"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/slider/slider1.jpeg",
  "/slider/slider2.jpeg",
  "/slider/slider3.jpeg",
  "/slider/slider4.jpeg",
  "/slider/slider5.jpeg",
  "/slider/slider6.jpeg",
];

export default function ServiceCardSlider() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-10 mt-10">
        <h1 className="text-xl lg:text-4xl md:text-3xl">Premium Hospitality Service</h1>
        <Link href="/about">View More</Link>
      </div>
      <div className="w-full mx-auto px-10 mt-10">
        <Swiper
          modules={[Pagination, Autoplay,Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-1 flex justify-between">
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  width={300}
                  height={400}
                  className=" object-cover w-100 h-80"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
