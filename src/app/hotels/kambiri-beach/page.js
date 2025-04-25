"use client"
import Accommodation from "@/app/(components)/(hotels)/(kambiri-beach)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(kambiri-beach)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/(kambiri-beach)/FoodFlavor";
import OfferSlider from "@/app/(components)/(hotels)/(kambiri-beach)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function KambiriBeach() {
  const [isActive, setIsActive] = useState(false);
    
      const activateHover = () => setIsActive(true);
      const deactivateHover = () => setIsActive(false);

  const navLink = "hotels/kambiri-beach/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/kambiri-beach.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />
         <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Kambiri Beach
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/kambiri-beach/kambiri-img1.jpeg"
          alt="kambiri-img1"
          width={1500}
          height={100}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            Timeless Charm Meets the Lake Your Iconic Getaway in Senga Bay
          </h1>
          <p className="text-sm sm:text-base text-center md:text-left">
            As one of the most iconic beach resorts in Senga Bay, Kambiri Beach
            Resort offers guests a blend of comfort and natural beauty. The
            resort features 51 spacious rooms with breathtaking views of Lake
            Malawi, a relaxing swimming pool, and dining options like the Long
            Beach Restaurant. Guests can also enjoy activities such as boat
            cruises, tours of Namalenje Lizard Island, and vibrant beachside
            entertainment.
          </p>
          <Link href="/hotels/kambiri-beach/location" className="text-sm lg:text-lg md:text-md">
          <button
                className="relative text-black py-1 px-2 border-b-2 border-transparent"
                onMouseEnter={activateHover}
                onMouseLeave={deactivateHover}
                onTouchStart={activateHover}
                onTouchEnd={deactivateHover}
              >
                Discover Place
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-10"
                  }`}
                ></span>
              </button>
          </Link>
        </div>
      </div>

      <Accommodation />

      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl mt-10 text-gray-500">
            Included With Your Stay
          </h1>
          <h2 className="text-sm sm:text-md text-gray-500">
            Enjoy These Perks On Us
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-4 md:border-r last:border-r-0"
            >
              <div className="flex items-center justify-center mb-2">
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-10"
                />
              </div>
              <h2 className="text-sm text-center">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <Experience />
      <FoodFlavor />
      <OfferSlider nav={navLink} />
    </div>
  );
}
