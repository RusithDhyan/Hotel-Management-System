"use client";
import Accommodation from "@/app/(components)/(hotels)/(heritage)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(heritage)/Experience";
import Gallery from "@/app/(components)/(hotels)/(heritage)/Gallery";
import FoodFlavor from "@/app/(components)/(hotels)/(heritage)/Gallery";
import InquiryForm from "@/app/(components)/(hotels)/(heritage)/InquiryForm";
import OfferSlider from "@/app/(components)/(hotels)/(heritage)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Heritage() {
  const [isActive, setIsActive] = useState(false);

  const navLink = "/hotels/heritage-hotel/offers";
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
          src="/hotels/heritage/heritage-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Heritage Hotel
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-10 gap-5">
        <Image
          src="/hotels/heritage/heritage-img1.jpg"
          alt="heritage-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover h-64 sm:h-80 md:h-96"
        />
        <div className="flex flex-col items-center justify-center gap-4 md:w-200 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            A Secret Haven of Luxury, Right Outside the Heart of Limbe
          </h1>
          <p className="text-sm sm:text-base">
            Heritage by Serendib, established in 2018, is a distinguished hotel
            located in the heart of Limbe, Blantyre, Malawi. This hotel
            masterfully combines historical charm with modern amenities,
            offering guests a unique and comfortable stay. Nestled just outside
            the bustling city center, Heritage by Serendib provides a serene
            escape while remaining conveniently close to key attractions and
            business hubs. With elegantly designed rooms, world-class dining,
            and personalized services, the hotel ensures an unforgettable
            experience for both leisure and business travelers.
          </p>
        </div>
      </div>

      <Accommodation />

      <Experience />
      <div className="flex flex-col items-center gap-5 mt-20 px-4">
        <h1 className="text-xl md:text-3xl text-gray-500">
          Services & Facilities
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5 w-full max-w-6xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-10 w-36 md:w-auto text-center border-r-2 last:border-0"
            >
              <Image
                src={item.url}
                alt="images"
                width={50}
                height={50}
                className="w-10 md:w-12"
              />
              <h2 className="text-xs md:text-sm mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Gallery />
      <OfferSlider nav={navLink} />
      <InquiryForm />
    </div>
  );
}
