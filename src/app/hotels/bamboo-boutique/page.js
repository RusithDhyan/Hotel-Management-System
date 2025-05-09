"use client";
import Accommodation from "@/app/(components)/(hotels)/(bamboo-boutique)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(bamboo-boutique)/Experience";
import Gallery from "@/app/(components)/(hotels)/(bamboo-boutique)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(bamboo-boutique)/OfferSlider";
import Image from "next/image";
import React from "react";

export default function BambooBoutique() {
  const navLink = "/hotels/bamboo-boutique/offers";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full relative">
        <Image
          src="/hotels/bamboo-boutique.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Bamboo Boutique
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-5 gap-5">
        <Image
          src="/hotels/bamboo-boutique/bamboo-img1.jpeg"
          alt="bamboo-img1"
          width={1500}
          height={100}
          className="w-full sm:w-500 h-80 md:h-96 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl text-center">
            Urban Elegance Redefined: A Tranquil Oasis in Lilongwe's Elite
            Suburbs
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            Located in the exclusive suburb of Area 12, Lilongwe, Bamboo
            Boutique Hotel provides a personalized and luxurious experience. The
            hotel boasts 19 beautifully appointed suite rooms with trendy décor,
            a stylish restaurant and bar, and a serene garden setting. Guests
            can enjoy amenities such as complimentary Wi-Fi, airport transfers,
            and a cozy atmosphere ideal for both business and leisure travelers.
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
