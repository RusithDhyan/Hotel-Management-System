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
      title: "A Pool with a View Unwind in Malawi's Hidden Oasis",
    },
    {
      url: "/images/bg3.jpg",
      title: "Discovering the Wild Wonders of Malawi",
    },
    {
      url: "/images/bg4.jpg",
      title: "Malawi's Safari Magic Where Nature Comes Alive",
    },
    {
      url: "/images/bg5.jpg",
      title: "Embracing the Warm Heart of Malawi A Cultural Journey",
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


  const smoothScrollTo = (targetY, duration = 2500) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 2);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      const targetY =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY);
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
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center drop-shadow-md leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                  )}
                </div>

                {/* Scroll Down Icon */}
                <div className="absolute inset-0 flex items-end justify-center sm:hidden mb-10">
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
    </div>
  );
}
