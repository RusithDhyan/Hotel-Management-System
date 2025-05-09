"use client";
import Accommodation from "@/app/(components)/(hotels)/(kara-o-mula)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(kara-o-mula)/Experience";
import Gallery from "@/app/(components)/(hotels)/(kara-o-mula)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(kara-o-mula)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function KaraOMula() {
  const [isActive, setIsActive] = useState(false);

  const navLink = "/hotels/kara-o-mula/offers";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/kara-o-mula.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Kara O Mula
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/kara-o-mula/kara-img1.jpeg"
          alt="kara-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            At the Foot of the Giants Your Scenic Escape in Mulanje
          </h1>
          <p className="text-sm sm:text-base text-center md:text-left">
            Kara O Mula by Serendib Hotel & Resorts is nestled in the stunning
            landscapes of Mulanje. The hotel features a variety of amenities
            including an indoor swimming pool, on-site restaurant offering
            diverse dining options, and beautifully maintained gardens. Guests
            can enjoy splendid mountain views and explore nearby attractions
            with assistance from the tour desk.​
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
