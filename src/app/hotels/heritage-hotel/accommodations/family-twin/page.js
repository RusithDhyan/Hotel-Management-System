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
      image: "/hotels/heritage/accommodations/feature1.jpg",
    },
    {
      id: 2,
      image: "/hotels/heritage/accommodations/feature2.jpg",
    },
    {
      id: 3,
      image: "/hotels/heritage/accommodations/feature3.jpg",
    },
    {
      id: 4,
      image: "/hotels/heritage/accommodations/feature4.jpg",
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
      <div className="w-full h-auto relative group">
        <Image
          src="/hotels/heritage/accommodations/family-bg3.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Family Twin Room
        </h1>
      </div>
      <div className="flex flex-col md:flex-row px-2 px-10 mt-10">
        <div className="flex flex-row gap-2 w-full ">
          <Image
            src="/hotels/heritage/accommodations/div4.jpeg"
            alt="card-image2"
            width={500}
            height={100}
            className="w-100 h-102 object-cover"
          />
          <div className="flex flex-col gap-2">
            <Image
              src="/hotels/heritage/accommodations/div5.jpeg"
              alt="card-image2"
              width={500}
              height={100}
              className="w-50 h-50 object-cover"
            />
            <Image
              src="/hotels/heritage/accommodations/div3.jpeg"
              alt="card-image2"
              width={500}
              height={100}
              className="w-50 h-50"
            />
          </div>
        </div>
        <div className="flex flex-col items-left justify-center gap-2 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-3xl md:text-3xl">
            Interconnecting family rooms to settle in with your closest
          </h1>
          <p>
            Your stay includes breakfast, USD 25 spa credit, afternoon tea,
            complimentary wine, beer, and spirits from 5-6pm, and daily guided
            meditation.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-around">
        <div><h1 className="text-center text-3xl mt-10 text-gray-500">
          Room Features
        </h1>
        <h1 className="text-center text-md text-gray-500">
          Comfortably sleeps up to 4 adults and 1 child
        </h1></div>
        <div className="flex flex-row items-center justify-center gap-5 w-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center border-r px-10">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-10"
                />
              </div>
              <h2 className="text-sm">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {hotels.map((hotel, i) => (
            <div
              key={hotel.id}
              className="flex-shrink-0 w-[100%] p-1 transition-all duration-500"
            >
              <div>
                <Image
                  src={hotel.image}
                  alt={hotel.title}
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

      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/hotels/heritage/accommodations/room.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-250 h-100 object-cover"
        />
        <div className="absolute inset-0 px-10 flex items-end justify-end pr-30">
          <div className="relative w-80 h-70 overflow-hidden group">
            {/* Front Card (Visible by Default) */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-200  text-black text-2xl transition-all duration-500 group-hover:opacity-0">
              <h1>In-Room Facilities</h1>
            </div>

            {/* Hidden Details (Slide In from Left on Hover) */}
            <div className="absolute inset-0 flex flex-col p-3 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0 bg-white/5 backdrop-blur-sm">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start justify-between mt-2"
                >
                  <h2 className="text-sm">{spec.title}</h2>
                  <Image
                    src={spec.url}
                    alt=""
                    width={1500}
                    height={100}
                    className="w-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
