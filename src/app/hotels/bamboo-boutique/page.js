"use client"
import Accommodation from "@/app/(components)/(hotels)/(bamboo-boutique)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(bamboo-boutique)/Experience";
import Gallery from "@/app/(components)/(hotels)/(bamboo-boutique)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(bamboo-boutique)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BambooBoutique() {
  const navLink = "hotels/bamboo-boutique/offers";

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
          src="/hotels/bamboo-boutique.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Bamboo Boutique
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-10 gap-5">
        <Image
          src="/hotels/bamboo-boutique/bamboo-img1.jpeg"
          alt="bamboo-img1"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-64 md:h-96 object-cover"
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

      <Experience />
      <Gallery/>
      <OfferSlider nav={navLink} />
    </div>
  );
}
