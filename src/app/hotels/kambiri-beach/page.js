"use client";
import Accommodation from "@/app/(components)/(hotels)/(kambiri-beach)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(kambiri-beach)/Experience";
import Gallery from "@/app/(components)/(hotels)/(kambiri-beach)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(kambiri-beach)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function KambiriBeach() {
  const [isActive, setIsActive] = useState(false);

  const navLink = "/hotels/kambiri-beach/offers";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/kambiri-beach.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
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
          className="w-full sm:w-1/3 h-80 object-cover"
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
        </div>
      </div>

      <Accommodation />

      <Experience />
      <Gallery />

      <OfferSlider nav={navLink} />
    </div>
  );
}
