"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const images = [
  { url: "/slider/slider1.jpeg", title: "Gym" },
  { url: "/slider/slider2.jpeg", title: "Pool Side" },
  { url: "/slider/slider3.jpeg", title: "Restuarant Hub" },
  { url: "/slider/slider4.jpeg", title: "Pickup & Drop" },
  { url: "/slider/slider5.jpeg", title: "Packing Space" },
  { url: "/slider/slider6.jpeg", title: "Ohter1" },
  { url: "/slider/slider6.jpeg", title: "Ohter2" },
];

export default function ServiceCardSlider() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-10 mt-10">
        <h1 className="text-xl lg:text-4xl md:text-3xl">
          Premium Hospitality Service
        </h1>
        <div className="flex flex-row items-center">
          <Link href="/about">View More</Link>
          <ChevronRight />
        </div>
      </div>
      <div className="w-full mx-auto px-10 mt-10">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={5}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-1 flex justify-between relative">
                <Image
                  src={slide.url}
                  alt={`Photo ${index + 1}`}
                  width={300}
                  height={400}
                  className=" object-cover w-100 h-80"
                />
                <h1 className="absolute bottom-0 inset-0 flex items-end p-3 text-lg text-white rotate-[-90] font-semibold">
                  {slide.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
