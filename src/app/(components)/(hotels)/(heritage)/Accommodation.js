"use client";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    image: "/hotels/heritage/accommodations/executive.jpg",
    title: "Executive Suite",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/executive-suite",
    description:
      "For those seeking extra space and comfort, the Executive Suite offers a separate living area and bedroom",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
  },
  {
    id: 2,
    image: "/hotels/heritage/accommodations/family.jpg",
    title: "Family Twin Room",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/family-twin",
    description:
      "Ideal for families, offering two cozy beds and modern amenities for a comfortable stay together.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
  },
  {
    id: 3,
    image: "/hotels/heritage/accommodations/deluxe.jpg",
    title: "Deluxe King Room",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/deluxe-king",
    description:
      "Unwind in the Deluxe King Room, boasting stylish decor, a plush king bed, and relaxing ambiance.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
  },
  {
    id: 4,
    image: "/hotels/heritage/accommodations/premier.jpeg",
    title: "Premier Heritage Suite",
    size: "45 sqm",
    url: "/hotels/heritage-hotel/accommodations/premier",
    description:
      "Experience elegance and space in the Premier Heritage Suite, complete with a king bed and private lounge.",
      features: [
        "/icons/rooms/item1.png",
        "/icons/rooms/item2.png",
        "/icons/rooms/item3.png",
        "/icons/rooms/item4.png",
        "/icons/rooms/item5.png",
      ],
  },
];


export default function Accommodation() {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);

  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false); // NEW: to track swipe separately

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const nextSlide = () => {
    if (!isSwiping.current) { // Only move if not swiping
      setIndex((prev) => (prev + 1 + hotels.length) % hotels.length);
    }
  };

  const prevSlide = () => {
    if (!isSwiping.current) { // Only move if not swiping
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
    }
  };

  const handleTouchStart = (e) => {
    isSwiping.current = true; // user is trying to swipe
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      setIndex((prev) => (prev + 1) % hotels.length);
    }
    if (distance < -50) {
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
    }
    isSwiping.current = false; // reset after swipe finished
  };

  return (
    <div>
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl">
        Accommodations
      </h1>
      {/* <div>
        <Link href="/hotels/bamboo-boutique/accommodations" className="items-center justify-center flex text-sm md:text-md lg:text-lg">
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
      </div> */}

      <div
        className="relative w-full max-w-6xl mx-auto mt-5 overflow-hidden"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-full md:w-[50%] lg:w-[33.33%] p-4 transition-all duration-500"
            >
              <div className="bg-white">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-80 object-cover"
                  width={1000}
                  height={100}
                />
                <div className="p-2 shadow-md">
                  <h3 className="text-lg font-semibold text-center">
                    {hotel.title}
                  </h3>
                  <p className="text-sm text-gray-600">Room Size: {hotel.size}</p>
                                                  <div className="flex flex-wrap gap-2 mt-2">
                                                    {hotel.features.map((icon, idx) => (
                                                      <Image
                                                        key={idx}
                                                        src={icon}
                                                        alt="feature"
                                                        width={20}
                                                        height={20}
                                                        className="w-5 h-5"
                                                      />
                                                    ))}
                                                  </div>
                  <p className="text-sm mt-2">{hotel.description}</p>
                  <div className="flex flex-row justify-start py-3">
                    <Link href={hotel.url} className="text-sm md:text-md lg:text-lg">
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

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-20 my-2 px-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowLeft size={20} />
          </button>

          {/* Mobile card number display */}
          <h5 className="text-sm md:hidden text-gray-500">
            {index + 1}/{hotels.length}
          </h5>

          <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

