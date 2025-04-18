"use client";
import { useState } from "react";
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
    url: "/hotels/lotus-hotel/accommodations/deluxe",
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
  const [index, setIndex] = useState(0);

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
          <button className="relative group text-gray-400 py-1 px-2 border-b-2 border-transparent">
            View All
            <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
          </button>
        </Link>
      </div>
      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 33.33}%)` }}
        >
          {hotels.map((hotel, i) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-[33.33%] p-4 transition-all duration-500"
            >
              <div className="bg-white ">
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
                  <p className="text-sm">{hotel.description}</p>
                  <div className="flex flex-row justify-start py-3">
                    <Link
                      href={`${hotel.url}`}
                      className="text-sm lg:text-lg md:text-md"
                    >
                      <button className="relative group text-black py-1 px-2">
                        Explore
                        <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-10 my-2">
          <button onClick={prevSlide} className="text-gray-500">
            <CircleArrowLeft size={30} />
          </button>
          <h5></h5>
          <button onClick={nextSlide} className="text-gray-500">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
