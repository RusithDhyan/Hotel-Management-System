"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/app/context/DataContext";

export default function HotelSlider() {
  const { hotels } = useData();

  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // swipe left
      } else {
        prevSlide(); // swipe right
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl md:text-3xl">
        Find Your Place
      </h1>

      <div className="sm:px-10 px-2 mt-10">
        <div className="relative mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 33.33)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {hotels.map((h, i) => (
              <div
                key={h._id}
                className={`flex-shrink-0 ${
                  isMobile ? "w-full" : "w-[33.33%]"
                }  transition-all duration-500 ${
                  !isMobile &&
                  (i === index ? "scale-110 w-[50%]" : "scale-90 w-[25%]")
                }`}
                style={{
                  opacity: isMobile && i !== index ? 0 : 1,
                }}
              >
                <div className="bg-white p-2 items-center justify-between">
                  <Image
                    src={h.thumbnail}
                    alt={h.title}
                    className="w-full h-50 sm:h-80 object-cover"
                    width={1000}
                    height={100}
                  />
                  <div className={`lg:p-4 ${i === index ? "h-40" : "h-auto"}`}>
                    <h3 className="sm:text-sm md:text-md lg:text-lg font-semibold px-2">
                      {h.title}
                    </h3>
                    <h4 className="text-gray-400 sm:text-sm md:text-md lg:text-lg px-2">
                      {h.location}
                    </h4>
                    {i === index && (
                      <p className="sm:text-sm md:text-md lg:text-lg px-2 ">
                        {h.description}
                      </p>
                    )}
                    <div className="flex flex-row justify-start px-2 mt-5">
                      {i === index && (
                        <Link
                          href={`/our-collections/${h._id}`}
                          className="text-sm lg:text-lg md:text-md"
                        >
                          <button
                            className="relative text-black pb-2 border-b-2 border-transparent"
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            onTouchStart={() => setIsActive(true)}
                            onTouchEnd={() => setIsActive(false)}
                          >
                            Explore
                            <span
                              className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                                isActive ? "w-full" : "w-7"
                              }`}
                            ></span>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row items-center justify-between sm:justify-end gap-10 sm:gap-20 px-2 sm:px-4 mt-10 xl:gap-20 2xl:gap-25 mt-20">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 2xl:p-4"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={20} />
            </button>

            <Link
              href="/our-collections"
              className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-500"
            >
              View all
            </Link>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 2xl:p-4"
              aria-label="Next Slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
