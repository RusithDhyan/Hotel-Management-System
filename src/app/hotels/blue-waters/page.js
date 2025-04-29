"use client"
import Accommodation from "@/app/(components)/(hotels)/(blue-waters)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(blue-waters)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/(blue-waters)/FoodFlavor";
import OfferSlider from "@/app/(components)/(hotels)/(blue-waters)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BlueWatersEdge() {
  const [isActive, setIsActive] = useState(false);
    
      const activateHover = () => setIsActive(true);
      const deactivateHover = () => setIsActive(false);

  const navLink = "hotels/blue-waters/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/blue-resort.jpg"
          alt="blue waters banner"
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />
         <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Blue Waters Edge
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-4 md:p-10 gap-6">
        <Image
          src="/hotels/blue-waters/blue-img1.jpeg"
          alt="blue-waters-img1"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-100 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Where Lake Dreams Begin Serenity by the Shoreline of Salima
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Nestled along the serene shores of Lake Malawi, Blue Waters Lake Resort offers a tranquil escape with rustic luxury. Guests can enjoy lakeview accommodations, a tranquil waterside pool, and exceptional event spaces accommodating up to 300 guests. The resort's "Pier Deck" and "Rain Tree" restaurants are renowned for their culinary delights, enhancing every occasion.
          </p>
          
        </div>
      </div>

      {/* Accommodations */}
      <Accommodation />

      {/* Included with Stay */}
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <h1 className="text-2xl md:text-3xl text-center text-gray-600 font-semibold">
          Included With Your Stay
        </h1>
        <h2 className="text-md md:text-lg text-gray-500 text-center mb-6">
          Enjoy These Perks On Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.url}
                alt={item.title}
                width={40}
                height={40}
                className="mb-2"
              />
              <h2 className="text-sm md:text-base">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* More Sections */}
      <Experience />
      {/* <FoodFlavor /> */}
      <OfferSlider nav={navLink} />
    </div>
  );
}
