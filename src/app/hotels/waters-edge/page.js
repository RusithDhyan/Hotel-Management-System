"use client";
import Accommodation from "@/app/(components)/(hotels)/(waters-edge)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(waters-edge)/Experience";
import Gallery from "@/app/(components)/(hotels)/(waters-edge)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(waters-edge)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function WatersEdge() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const navLink = "hotels/waters-edge/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/waters-edge.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Waters Edge
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/waters-edge/waters-img1.jpeg"
          alt="waters-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            By the Wild and the Water Where Liwonde’s Beauty Meets Serenity
          </h1>
          <p className="text-sm sm:text-base text-center md:text-left">
            Situated along the N265 in Liwonde, Waters Edge Hotel offers guests
            a serene environment with picturesque views. The hotel provides
            comfortable accommodations and is an ideal base for exploring the
            nearby Liwonde National Park and other local attractions.
          </p>
        </div>
      </div>

      {/* Accommodation Component */}
      <Accommodation />

      {/* Perks Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl mt-6 text-gray-500">
            Included With Your Stay
          </h1>
          <h2 className="text-md text-gray-500">Enjoy These Perks On Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col items-center px-4 md:border-r last:border-r-0"
            >
              <Image
                src={item.url}
                alt="icon"
                width={40}
                height={40}
                className="w-10"
              />
              <h2 className="text-sm text-center mt-2">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Experience, Food, Offers */}
      <Experience />
      <Gallery />
      <OfferSlider nav={navLink} />
    </div>
  );
}
