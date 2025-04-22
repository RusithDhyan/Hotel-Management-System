"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const images = [
  { url: "/slider/slider6.jpeg", title: "Gym" },
  { url: "/slider/slider2.jpeg", title: "Pool Side" },
  { url: "/slider/slider3.jpeg", title: "Restuarant Hub" },
  { url: "/slider/slider4.jpeg", title: "Pickup & Drop" },
  { url: "/slider/slider1.jpeg", title: "Packing Space" },
  { url: "/slider/slider6.jpeg", title: "Other1" },
  { url: "/slider/slider6.jpeg", title: "Other2" },
];

export default function ServiceCardSlider() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 mt-10 gap-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
          Premium Hospitality Service
        </h1>
        <div className="flex flex-row items-center">
          <Link href="/services">View more</Link>
          <ChevronRight />
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-10 mt-6">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src={slide.url}
                  alt={`Photo ${index + 1}`}
                  width={300}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <h1 className="absolute bottom-2 left-2 text-white text-lg font-semibold  px-2 py-1">
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
