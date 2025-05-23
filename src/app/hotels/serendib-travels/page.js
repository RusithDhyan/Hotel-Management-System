"use client";
import Accommodation from "@/app/(components)/(hotels)/(serendib-travels)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(serendib-travels)/Experience";
import Gallery from "@/app/(components)/(hotels)/(serendib-travels)/Gallery";
import InquiryForm from "@/app/(components)/(hotels)/(serendib-travels)/InquiryForm";
import OfferSlider from "@/app/(components)/(hotels)/(serendib-travels)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
  { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
  { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
  { url: "/icons/hotels/wine.png", title: "Mini Bar" },
];

export default function BambooBoutique() {
  const [isActive, setIsActive] = useState(false);

  const navLink = "/hotels/serendib-travels/offers";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/serendib-travels.jpg"
          alt="serendib"
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Serendib Travels
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/serendib-travels/serendib-img1.jpg"
          alt="serendib-img1"
          width={1500}
          height={100}
          className="w-full h-80 md:h-96 object-cover"
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
      <InquiryForm/>
    </div>
  );
}
