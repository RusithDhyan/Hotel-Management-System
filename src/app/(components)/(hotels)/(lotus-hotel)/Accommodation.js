"use client";
import { useEffect, useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    image: "/hotels/lotus-hotel/accommodations/executive.jpeg",
    title: "Executive Suite",
    url: "/hotels/lotus-hotel/accommodations/executive-suite",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom, creating a private and sophisticated ambiance.",
  },
  {
    id: 2,
    image: "/hotels/lotus-hotel/accommodations/family.jpeg",
    title: "Family Twin Room",
    url: "/hotels/lotus-hotel/accommodations/family-twin",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom, creating a private and sophisticated ambiance.",
  },
  {
    id: 3,
    image: "/hotels/lotus-hotel/accommodations/deluxe.jpeg",
    title: "Deluxe King Room",
    url: "/hotels/lotus-hotel/accommodations/deluxe-king",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom, creating a private and sophisticated ambiance.",
  },
  {
    id: 4,
    image: "/hotels/lotus-hotel/accommodations/premier.jpeg",
    title: "Premier Heritage Suite",
    url: "/hotels/lotus-hotel/accommodations/premier",
    description:
      "Experience the perfect blend of timeless elegance and modern comfort in our Premier Heritage Suite. This spacious suite features a king-size bed with premium linens, a separate living area.",
  },
];

export default function Accommodation() {
  const [isActive, setIsActive] = useState(false);
      
        const activateHover = () => setIsActive(true);
        const deactivateHover = () => setIsActive(false);
        
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(3);
        }
      };
  
      handleResize(); // Run initially
      window.addEventListener("resize", handleResize); // Update on resize
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  return (
    <div>
      <h1 className="text-center text-xl lg:text-4xl md:text-3xl">
        Accommodations
      </h1>
      <div>
        <Link
          href="/hotels/lotus-hotel/accommodations"
          className="items-center justify-center flex text-sm lg:text-lg md:text-md"
        >
          <button
            className="relative text-black py-1 px-2 border-b-2 border-transparent text-gray-500"
            onMouseEnter={activateHover}
            onMouseLeave={deactivateHover}
            onTouchStart={activateHover}
            onTouchEnd={deactivateHover}
          >
            View All
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-gray-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-10"
              }`}
            ></span>
          </button>
        </Link>
      </div>
      <div className="relative w-full max-w-7xl mx-auto mt-10 overflow-hidden">
        {/* Carousel */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / cardsPerView)}%)` }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              <div className="bg-white h-full flex flex-col shadow-md overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-64 object-cover"
                  width={1000}
                  height={100}
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold text-center">
                    {hotel.title}
                  </h3>
                  <p className="text-sm mt-2 text-justify">
                    {hotel.description}
                  </p>
                  <div className="flex justify-start mt-4">
                    <Link href={hotel.url}>
                    <button
                        className="relative text-black py-1 px-2 border-b-2 border-transparent"
                        onMouseEnter={activateHover}
                        onMouseLeave={deactivateHover}
                        onTouchStart={activateHover}
                        onTouchEnd={deactivateHover}
                      >
                        Explore
                        <span
                          className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                            isActive ? "w-full" : "w-10"
                          }`}
                        ></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between sm:justify-end gap-20 mt-4 px-4">
          <button onClick={prevSlide} className="text-gray-500">
            <CircleArrowLeft size={30} />
          </button>
          <h5 className="text-sm md:hidden text-gray-500">
            {index + 1}/{hotels.length}
          </h5>
          <button onClick={nextSlide} className="text-gray-500">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
