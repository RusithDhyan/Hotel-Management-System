"use client";
import InquiryForm from "@/app/(components)/(offer)/InquiryForm";
import { Disc, Goal, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function EarlyBird() {

  const offers = [
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/blue-waters/offers/early-bird/bg.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-2xl sm:text-5xl text-white pb-4 text-center">
          Early Bird Offer
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10 text-center">
        <h1 className="text-xl sm:text-2xl">Early Bird Offer at Kambiri Beach</h1>
        <p className="font-extralight text-sm sm:text-base">
          Plan ahead and enjoy more for less. Book 3 months or more in advance
          and enjoy up to 20% off your stay. This offer is valid for stays until
          30th April 2026 across all our properties.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 px-4 sm:px-10">
        <Image
          src="/hotels/blue-waters/offers/early-bird/bg-img.jpg"
          alt="early-bird-img"
          width={1000}
          height={100}
          className="w-full lg:w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1 text-left">
          <h1 className="text-xl sm:text-2xl py-2">Offer Inclusions</h1>
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-2">
              <Goal size={15} />
              <h3 className="text-sm font-light">{offer.name}</h3>
            </div>
          ))}
          <Link href="/">
            <button className="relative group text-black py-2 px-4 mt-2 rounded-md hover:bg-orange-100">
              Book
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
      <InquiryForm/>

    </div>
  );
}
