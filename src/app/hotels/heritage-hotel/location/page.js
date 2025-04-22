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
    { id: 1, image: "/hotels/heritage/location/feature1.jpg" },
    { id: 2, image: "/hotels/heritage/location/feature2.jpg" },
    { id: 3, image: "/hotels/heritage/location/feature3.jpg" },
    { id: 4, image: "/hotels/heritage/location/feature4.jpg" },
  ];

  const items = [
    { url: "/icons/location/plane-takeoff.png", title: "Under 2-hours’ drive from the airport" },
    { url: "/icons/location/landmark.png", title: "5 km from the Museum of Malawi" },
    { url: "/icons/location/trees.png", title: "Set amidst peaceful gardens" },
    { url: "/icons/location/shrimp.png", title: "Boating and water sports" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="w-full relative">
        <Image
          src="/hotels/heritage/location/location-bg1.jpg"
          alt=""
          width={1500}
          height={100}
          className="w-full h-[200px] md:h-[400px] object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4">
          Location
        </h1>
      </div>

      {/* Paragraph */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 md:px-20 text-center">
        <p className="font-extralight text-sm md:text-base">
          Heritage by Serendib is a distinguished hotel located in the heart of
          Limbe, a vibrant district within Blantyre, Malawi. Positioned on
          Milward Road, it lies just 500 meters from the Limbe Auction Floors,
          offering guests convenient access to local commerce and cultural sites.
        </p>
      </div>

      {/* Highlights */}
      <div className="flex flex-col items-center gap-5 mt-10 px-4">
        <h1 className="text-xl md:text-3xl text-gray-500">Location Highlights</h1>
        <div className="flex flex-wrap items-center justify-center gap-5 w-full max-w-6xl">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-4 w-36 md:w-48 text-center">
              <Image src={item.url} alt="images" width={50} height={50} className="w-10 md:w-12" />
              <h2 className="text-xs md:text-sm mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Style & Character Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-5 px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-2 w-full lg:w-2/3">
          <Image
            src="/hotels/heritage/location/image1.jpeg"
            alt=""
            width={1000}
            height={100}
            className="w-full md:w-1/2 h-52 object-cover"
          />
          <Image
            src="/hotels/heritage/location/image2.jpeg"
            alt=""
            width={1000}
            height={100}
            className="w-full md:w-1/2 h-52 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 w-full lg:w-1/3 text-sm md:text-base">
          <h1 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
            Style & Character
          </h1>
          <p className="text-justify">
            Heritage by Serendib beautifully combines colonial-era elegance with
            modern comfort, offering guests a charming and tranquil retreat in
            the heart of Limbe. The hotel’s architecture reflects British colonial
            influence, with arched windows, polished wooden accents, and lush
            garden surroundings that create a serene atmosphere.
          </p>
          <p className="text-justify">
            Inside, the spaces are tastefully decorated with locally inspired art,
            traditional Malawian fabrics, and cozy furnishings that evoke a sense
            of cultural warmth.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full mt-10 overflow-hidden px-1">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex-shrink-0 w-full p-1 transition-all duration-500"
            >
              <Image
                src={location.image}
                alt="location-img"
                className="w-full h-60 md:h-96 object-cover"
                width={1000}
                height={100}
              />
            </div>
          ))}
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-10 mt-4 px-4">
          <button onClick={prevSlide} className="text-gray-500">
            <CircleArrowLeft size={30} />
          </button>
          <button onClick={nextSlide} className="text-gray-500">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
