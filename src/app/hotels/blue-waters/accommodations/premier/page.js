"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function FamilyTwin() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const hotels = [
    {
      id: 1,
      image: "/hotels/heritage/accommodations/premier/feature1.jpg",
    },
    {
      id: 2,
      image: "/hotels/heritage/accommodations/premier/feature2.jpg",
    },
    {
      id: 3,
      image: "/hotels/heritage/accommodations/premier/feature3.jpg",
    },
    {
      id: 4,
      image: "/hotels/heritage/accommodations/premier/feature4.jpg",
    },
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
      <div className="w-full relative">
        <Image
          src="/hotels/heritage/accommodations/premier/premier-bg1.jpg"
          alt=""
          width={1500}
          height={500}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Premier Suite
        </h1>
      </div>

      {/* Room Info Section */}
      <div className="flex flex-col md:flex-row md:px-10 mt-10 gap-5">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-1/2 md:items-center">
                  <Image
                    src="/hotels/heritage/accommodations/div4.jpeg"
                    alt="main"
                    width={500}
                    height={300}
                    className=" md:h-[308px] h-[200px] object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <Image
                      src="/hotels/heritage/accommodations/div5.jpeg"
                      alt="sub1"
                      width={500}
                      height={300}
                      className=" h-[150px] md:h-[150px] object-cover"
                    />
                    <Image
                      src="/hotels/heritage/accommodations/div3.jpeg"
                      alt="sub2"
                      width={500}
                      height={300}
                      className=" h-[200px] md:h-[150px] object-cover"
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

      {/* Features */}
      <div className="mt-10 px-4 text-center">
        <h1 className="text-2xl md:text-3xl text-gray-600">Room Features</h1>
        <h2 className="text-md md:text-lg text-gray-500">
          Comfortably sleeps up to 4 adults and 1 child
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-4 border-r last:border-none"
            >
              <Image
                src={item.url}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-sm mt-2">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
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
              <Image
                src={hotel.image}
                alt={`Slide ${hotel.id}`}
                className="w-full h-[250px] md:h-[400px] object-cover"
                width={1000}
                height={400}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
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

      {/* Facilities Flip Box */}
      <div className="relative mt-10 w-full px-4">
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
          <Image
            src="/hotels/heritage/accommodations/family/room.jpg"
            alt="room"
            width={1500}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 m-6 w-[280px] md:w-[350px] h-[180px] bg-white/70 backdrop-blur-lg overflow-hidden group cursor-pointer">
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
      </div>
    </div>
  );
}
