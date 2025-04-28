"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function DineIn() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % dineIn.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + dineIn.length) % dineIn.length);
  };

  const dineIn = [
    { id: 1, image: "/hotels/heritage/dining/image1.jpg" },
    { id: 2, image: "/hotels/heritage/dining/image2.jpg" },
    { id: 3, image: "/hotels/heritage/dining/image3.jpg" },
    { id: 4, image: "/hotels/heritage/dining/image4.jpg" },
  ];

  const items = [
    { url: "/icons/dine-in/salad.png", title: "Fresh Ingredients" },
    { url: "/icons/dine-in/armchair.png", title: "Indoor & Outdoor Seating" },
    { url: "/icons/dine-in/guitar.png", title: "Live Music & Entertainment" },
    { url: "/icons/dine-in/washing-machine.png", title: "Washing, drying, and ironing" },
  ];

  const para = [
    {
      desc: "Our menus feature a delightful fusion of Sri Lankan and international cuisines, while our dedicated Wellness menu highlights the richness of Sri Lankan superfoods—offering a wholesome and nourishing dining experience.",
    },
    {
      desc: "We take pride in sourcing many of our fruits, vegetables, and herbs from our own gardens or local markets, ensuring freshness while minimizing food miles.",
    },
    {
      desc: "With prior notice, our chefs are happy to accommodate any dietary preferences, baby food needs, or special meal requests, ensuring a personalized and thoughtful culinary experience for every guest.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full relative group">
        <Image
          src="/hotels/heritage/dining/dining-bg1.jpg"
          alt="background"
          width={1500}
          height={100}
          className="object-cover w-full h-[300px] md:h-[500px]"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4">
          DineIn
        </h1>
      </div>

      <div className="flex flex-col items-center text-center gap-3 mt-10 px-4 md:px-30">
        <h1 className="text-xl md:text-2xl">
          Delicious Dining Experiences | Explore Our Menu & Ambiance
        </h1>
        <p className="font-extralight text-sm md:text-base">
          Savor mouthwatering dishes crafted with the finest ingredients. Discover our diverse menu, cozy atmosphere, and unforgettable dining experiences. Perfect for every occasion — from casual meals to special celebrations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-10 mt-10 items-center gap-6 md:gap-10">
        <Image
          src="/hotels/heritage/dining/dining-bg2.jpg"
          alt="card-image2"
          width={500}
          height={300}
          className="w-full md:w-[500px] h-auto object-cover"
        />
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <Image
                src={item.url}
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h2 className="text-md">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {para.map((item, index) => (
        <div key={index} className="mt-5 px-4 md:px-10 text-sm md:text-base">
          <p className="font-extralight">{item.desc}</p>
        </div>
      ))}

      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden md:px-0">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {dineIn.map((dineImg) => (
            <div key={dineImg.id} className="flex-shrink-0 w-full">
              <Image
                src={dineImg.image}
                alt="dine-in-img"
                className="w-full h-[200px] md:h-[400px] object-cover"
                width={1000}
                height={400}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-20 my-4 px-4">
          <button onClick={prevSlide} className="text-gray-600 hover:text-gray-800">
            <CircleArrowLeft size={30} />
          </button>
          <h5 className="text-sm text-gray-500">
            {index + 1}/{dineIn.length}
          </h5>
          <button onClick={nextSlide} className="text-gray-600 hover:text-gray-800">
            <CircleArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
