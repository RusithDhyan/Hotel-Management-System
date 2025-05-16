"use client";
import Accommodation from "@/app/(components)/(hotels)/(blue-waters)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(blue-waters)/Experience";
import Gallery from "@/app/(components)/(hotels)/(blue-waters)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(blue-waters)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
  { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
  { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
  { url: "/icons/hotels/wine.png", title: "Mini Bar" },
];

export default function BlueWatersEdge() {
  const [isActive, setIsActive] = useState(false);

  const navLink = "/hotels/blue-waters/offers";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/blue-resort.jpg"
          alt="blue waters banner"
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Blue Waters Edge
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-5 md:p-10 gap-6">
        <Image
          src="/hotels/blue-waters/blue-img1.jpeg"
          alt="blue-waters-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Where Lake Dreams Begin Serenity by the Shoreline of Salima
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Nestled along the serene shores of Lake Malawi, Blue Waters Lake
            Resort offers a tranquil escape with rustic luxury. Guests can enjoy
            lakeview accommodations, a tranquil waterside pool, and exceptional
            event spaces accommodating up to 300 guests. The resort's "Pier
            Deck" and "Rain Tree" restaurants are renowned for their culinary
            delights, enhancing every occasion.
          </p>
        </div>
      </div>

      {/* Accommodations */}
      <Accommodation />

      {/* More Sections */}
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
    </div>
  );
}
