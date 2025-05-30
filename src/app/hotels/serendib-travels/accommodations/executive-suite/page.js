"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function ExecutiveSuite() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const hotels = [
    { id: 1, image: "/hotels/heritage/accommodations/executive/feature1.jpg" },
    { id: 2, image: "/hotels/heritage/accommodations/executive/feature2.jpg" },
    { id: 3, image: "/hotels/heritage/accommodations/executive/feature3.jpg" },
    { id: 4, image: "/hotels/heritage/accommodations/executive/feature4.jpg" },
  ];

  const items = [
    { url: "/icons/rooms/area.png", title: "100 sqm Room Size" },
    { url: "/icons/rooms/users.png", title: "5 Guests" },
    { url: "/icons/rooms/bed.png", title: "Twin Sharing Bed" },
  ];

  const specs = [
    { url: "/icons/rooms/item1.png", title: "Bath Tub" },
    { url: "/icons/rooms/item2.png", title: "Air Condition" },
    { url: "/icons/rooms/item3.png", title: "Kitchen" },
    { url: "/icons/rooms/item4.png", title: "Refrigerator" },
    { url: "/icons/rooms/item5.png", title: "TV" },
    { url: "/icons/rooms/item7.png", title: "WiFi" },
    { url: "/icons/rooms/item8.png", title: "Tea & Coffee" },
    { url: "/icons/rooms/item9.png", title: "Four Beds" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-100">
        <Image
          src="/hotels/heritage/accommodations/executive/executive-bg1.jpg"
          alt="Executive Suite Background"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-4xl md:text-5xl text-white pb-4">
          Executive Suite
        </h1>
      </div>

      {/* Room Details Section */}
      <div className="flex flex-col md:flex-row md:px-10 mt-10 gap-5">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          <Image
            src="/hotels/heritage/accommodations/div4.jpeg"
            alt="main"
            width={500}
            height={300}
            className="w-full md:h-[315px] h-[200px] object-cover"
          />
          <div className="flex flex-col gap-4">
            <Image
              src="/hotels/heritage/accommodations/div5.jpeg"
              alt="sub1"
              width={300}
              height={100}
              className="w-full h-[200px] md:h-[150px] object-cover"
            />
            <Image
              src="/hotels/heritage/accommodations/div3.jpeg"
              alt="sub2"
              width={300}
              height={100}
              className="w-full h-[200px] md:h-[150px] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full text-sm md:text-base lg:text-lg flex flex-col justify-center gap-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Interconnecting family rooms to settle in with your closest
          </h1>
          <p>
            Your stay includes breakfast, USD 25 spa credit, afternoon tea,
            complimentary wine, beer, and spirits from 5-6pm, and daily guided
            meditation.
          </p>
        </div>
      </div>

      {/* Room Features Section */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-center text-3xl text-gray-500">Room Features</h1>
        <h2 className="text-center text-md text-gray-500 mt-2">
          Comfortably sleeps up to 4 adults and 1 child
        </h2>
        <div className="flex flex-wrap justify-center gap-5 w-full px-5 mt-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-4 md:px-10">
              <div className="flex justify-center">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-12 md:w-14"
                />
              </div>
              <h2 className="text-sm mt-2">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-full p-1 transition-all duration-500"
            >
              <div>
                <Image
                  src={hotel.image}
                  alt="Hotel Image"
                  className="w-full h-[60vh] md:h-[400px] object-cover"
                  width={1000}
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-20 mt-4 px-4">
          <button onClick={prevSlide} className="text-gray-600">
            <CircleArrowLeft size={30} />
          </button>
          <h5 className="text-sm text-gray-500">
            {index + 1}/{hotels.length}
          </h5>
          <button onClick={nextSlide} className="text-gray-600">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>

      {/* In-Room Facilities Section */}
      <div className="relative mt-10 w-full px-4">
  <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
    <Image
      src="/hotels/heritage/accommodations/family/room.jpg"
      alt="room"
      width={1500}
      height={400}
      className="w-full h-full object-cover"
    />

    {/* Desktop view facilities box */}
    <div className="hidden md:block absolute bottom-0 right-0 m-6 w-[350px] h-[180px] bg-white/70 backdrop-blur-lg overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex justify-center items-center text-xl font-semibold text-black group-hover:opacity-0 transition duration-500">
        In-Room Facilities
      </div>
      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-500">
        <div className="grid grid-cols-2 gap-2 border-r last:border-none">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span>{spec.title}</span>
              <Image
                src={spec.url}
                alt={spec.title}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Mobile view facilities list */}
  <div className="block md:hidden mt-4">
    <h2 className="text-lg font-semibold mb-2">In-Room Facilities</h2>
    <div className="grid grid-cols-2 gap-2">
      {specs.map((spec, i) => (
        <div key={i} className="flex justify-between text-sm">
          <span>{spec.title}</span>
          <Image
            src={spec.url}
            alt={spec.title}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
