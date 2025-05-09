"use client";
import Accommodation from "@/app/(components)/(hotels)/(lotus-hotel)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(lotus-hotel)/Experience";
import Gallery from "@/app/(components)/(hotels)/(lotus-hotel)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(lotus-hotel)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function LotusHotel() {
  const [isActive, setIsActive] = useState(false);
  const navLink = "/hotels/lotus-hotel/offers";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Image Section */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/lotus-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Lotus Hotel
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/lotus-hotel/lotus-img1.jpeg"
          alt="lotus-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            Chic Comfort Awaits The City’s Quiet Corner of Style and Simplicity
          </h1>
          <p className="text-sm sm:text-base text-center md:text-left">
            Located on Glyn Jones Road, Blantyre, Lotus Hotel offers comfortable
            accommodations with easy access to the city's attractions. The hotel
            provides a range of amenities catering to both business and leisure
            travelers, ensuring a pleasant stay in the vibrant city of Blantyre.
          </p>
        </div>
      </div>

      {/* Accommodation Section */}
      <Accommodation />

      <Experience />
      <Gallery />
      <OfferSlider nav={navLink} />
    </div>
  );
}
