"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomeSlider({ sectionRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationType, setAnimationType] = useState(0);

  const homeSlider = [
    {
      url: "/images/bg1.jpg",
      title: "Relax, Unwind & Experience Luxury in the Heart of Malawi...",
    },
    {
      url: "/images/bg2.jpg",
      title: "A Pool with a View — Unwind in Malawi's Hidden Oasis",
    },
    {
      url: "/images/bg3.jpg",
      title: "Discovering the Wild Wonders of Malawi",
    },
    {
      url: "/images/bg4.jpg",
      title: "Malawi's Safari Magic: Where Nature Comes Alive",
    },
    {
      url: "/images/bg5.jpg",
      title: "Embracing the Warm Heart of Malawi: A Cultural Journey",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = () => {
    if (sectionRef?.current) {
      const targetY =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {homeSlider.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <Image
                  src={slide.url}
                  alt={`slide-${index}`}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />

                {/* Title Area */}
                <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8">
                  {animationType === 0 && (
                    <motion.h1
                      variants={containerVariant}
                      initial="hidden"
                      animate={index === activeIndex ? "visible" : "hidden"}
                      className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center drop-shadow-md flex flex-wrap justify-center leading-tight"
                    >
                      {slide.title.split("").map((char, i) => (
                        <motion.span key={i} variants={letterVariant}>
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.h1>
                  )}

                  {animationType === 1 && (
                    <motion.h1
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        index === activeIndex ? { scale: 1, opacity: 1 } : {}
                      }
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center drop-shadow-md px-2 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                  )}

                  {animationType === 2 && (
                    <motion.h1
                      initial={{ opacity: 0, y: 50, scale: 1.1 }}
                      animate={
                        index === activeIndex
                          ? { opacity: 1, y: 0, scale: 1 }
                          : {}
                      }
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center drop-shadow-md px-2 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                  )}
                </div>

                {/* Scroll Down Icon */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center sm:hidden">
                  <a onClick={handleScroll} className="cursor-pointer">
                    <ChevronsDown
                      size={36}
                      color="white"
                      className="animate-pulse"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Animation Buttons */}
      {/* <div className="absolute z-20 top-40 right-4 space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row items-end">
        <button
          onClick={() => setAnimationType(0)}
          className="bg-white/90 text-black px-3 py-1 text-sm sm:text-base rounded shadow"
        >
          Letter
        </button>
        <button
          onClick={() => setAnimationType(1)}
          className="bg-white/90 text-black px-3 py-1 text-sm sm:text-base rounded shadow"
        >
          Zoom
        </button>
        <button
          onClick={() => setAnimationType(2)}
          className="bg-white/90 text-black px-3 py-1 text-sm sm:text-base rounded shadow"
        >
          Parallax
        </button>
      </div> */}
    </div>
  );
}
