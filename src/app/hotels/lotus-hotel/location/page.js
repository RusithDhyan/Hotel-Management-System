"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Location() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const locations = [
    {
      id: 1,
      image: "/hotels/heritage/location/feature1.jpg",
    },
    {
      id: 2,
      image: "/hotels/heritage/location/feature2.jpg",
    },
    {
      id: 3,
      image: "/hotels/heritage/location/feature3.jpg",
    },
    {
      id: 4,
      image: "/hotels/heritage/location/feature4.jpg",
    },
  ];

  const items = [
    { url: "/icons/location/plane-takeoff.png", title: "Under 2-hours’ drive from the airport" },
    { url: "/icons/location/landmark.png", title: " 5 km from the Museum of Malawi " },
    { url: "/icons/location/trees.png", title: "Set amidst peaceful gardens" },
    { url: "/icons/location/shrimp.png", title:"Boating and water sports" }

  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative group">
        <Image
          src="/hotels/heritage/location/location-bg1.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Location
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <p className="font-extralight">
          Heritage by Serendib is a distinguished hotel located in the heart of
          Limbe, a vibrant district within Blantyre, Malawi. Positioned on
          Milward Road, it lies just 500 meters from the Limbe Auction Floors,
          offering guests convenient access to local commerce and cultural sites
          .​
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-center text-3xl mt-10 text-gray-500">
            Location Highlights
          </h1>      
        </div>
        <div className="flex flex-row items-center justify-center gap-5 w-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-10"
            >
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-10"
                />
              </div>
              <h2 className="text-sm mt-5">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row item-center justify-between mt-10 gap-2 px-10">
        <Image
          src="/hotels/heritage/location/image1.jpeg"
          alt=""
          width={1000}
          height={100}
          className="h-100 w-100"
        />
        <Image
          src="/hotels/heritage/location/image2.jpeg"
          alt=""
          width={1000}
          height={100}
          className="h-100 w-100"
        />

        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl">Style & Character</h1>
          <p>
            Heritage by Serendib beautifully combines colonial-era elegance with
            modern comfort, offering guests a charming and tranquil retreat in
            the heart of Limbe. The hotel’s architecture reflects British
            colonial influence, with arched windows, polished wooden accents,
            and lush garden surroundings that create a serene atmosphere.
            Inside, the spaces are tastefully decorated with locally inspired
            art, traditional Malawian fabrics, and cozy furnishings that evoke a
            sense of cultural warmth.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {locations.map((location, i) => (
            <div
              key={location.id}
              className="flex-shrink-0 w-[100%] p-1 transition-all duration-500"
            >
              <div>
                <Image
                  src={location.image}
                  alt="location-img"
                  className="w-full h-120 object-cover"
                  width={1000}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-end gap-10 my-2">
          <button onClick={prevSlide} className="text-gray-500">
            <CircleArrowLeft size={30} />
          </button>
          <h5></h5>
          <button onClick={nextSlide} className="text-gray-500">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
