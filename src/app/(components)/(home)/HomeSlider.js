"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

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
      title: "Embracing the Warm Heart of Malawi: A Cultural Journey",
    },
  ];

  // Fancy animation variant options
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      const targetY =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active slide
      >
        {homeSlider.map((slide, index) => {
          const controls = useAnimation();

          useEffect(() => {
            if (index === activeIndex) {
              controls.start({
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 1, ease: "easeOut" },
              });
            }
          }, [activeIndex]);

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

                <div className="absolute inset-0 flex justify-center items-center sm:px-10">
                  {animationType === 0 && (
                    <motion.h1
                      variants={containerVariant}
                      initial="hidden"
                      animate={index === activeIndex ? "visible" : "hidden"}
                      className="text-2xl md:text-3xl lg:text-6xl text-white font-bold px-2 text-center drop-shadow-md mb-2 flex flex-wrap justify-center"
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
                      animate={index === activeIndex ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-2xl md:text-3xl lg:text-6xl text-white font-bold px-10 text-center drop-shadow-md mb-2"
                    >
                      {slide.title}
                    </motion.h1>
                  )}

                  {animationType === 2 && (
                    <motion.h1
                      initial={{ opacity: 0, y: 100, scale: 1.2 }}
                      animate={index === activeIndex ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="text-2xl md:text-3xl lg:text-6xl text-white font-bold px-2 text-center drop-shadow-md mb-2"
                    >
                      {slide.title}
                    </motion.h1>
                  )}
                </div>

                <div className="sm:hidden absolute inset-0 flex justify-center items-center mt-25">
                  <a onClick={handleScroll} className="cursor-pointer">
                    <ChevronsDown
                      size={40}
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

      {/* Add buttons to toggle between animations */}
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={() => setAnimationType(0)}
          className="bg-white text-black p-2 rounded mb-2"
        >
          Letter-by-Letter
        </button>
        <button
          onClick={() => setAnimationType(1)}
          className="bg-white text-black p-2 rounded mb-2"
        >
          Zoom-in
        </button>
       
      </div>
    </div>
  );
}
