"use client";
import Accommodation from "@/app/(components)/(hotels)/(serendib-travels)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(serendib-travels)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/(serendib-travels)/FoodFlavor";
import OfferSlider from "@/app/(components)/(hotels)/(serendib-travels)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BambooBoutique() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const navLink = "hotels/serendib-travels/offers";

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
          src="/hotels/serendib-travels.jpg"
          alt="serendib"
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Serendib Travels
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-10 gap-5">
        <Image
          src="/hotels/serendib-travels/serendib-img1.jpg"
          alt="serendib-img1"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-64 md:h-96 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl text-center">
            Urban Comfort in Blantyre: A Peaceful Retreat in Namiwawa
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            Located in the serene neighborhood of Namiwawa, Blantyre, Serendib
            Suites & Conference Center offers a blend of comfort, convenience,
            and quiet charm. The hotel features modern, spacious suites, a
            refreshing outdoor pool, and the acclaimed Bay Leaf Restaurant. With
            amenities like complimentary Wi-Fi, conference facilities, and
            airport transfers, Serendib provides the perfect setting for both
            business and leisure travelers seeking a peaceful yet connected
            stay.
          </p>
         
        </div>
      </div>

      <Accommodation />

      <div className="flex flex-col md:flex-row items-center justify-around mt-10 gap-10">
        <div>
          <h1 className="text-center text-2xl md:text-3xl mt-10 text-gray-500">
            Included With Your Stay
          </h1>
          <h1 className="text-center text-sm md:text-md text-gray-500">
            Enjoy These Perks On Us
          </h1>
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
      {/* <FoodFlavor /> */}
      <OfferSlider nav={navLink} />
    </div>
  );
}
