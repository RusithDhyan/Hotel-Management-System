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
    {
      id: 1,
      image: "/hotels/heritage/dining/image1.jpg",
    },
    {
      id: 2,
      image: "/hotels/heritage/dining/image2.jpg",
    },
    {
      id: 3,
      image: "/hotels/heritage/dining/image3.jpg",
    },
    {
      id: 4,
      image: "/hotels/heritage/dining/image4.jpg",
    },
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
      <div className="w-full h-auto relative group">
        <Image
          src="/hotels/heritage/dining/dining-bg1.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          DineIn
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl ">
          Delicious Dining Experiences | Explore Our Menu & Ambiance
        </h1>
        <p className="font-extralight">
          Savor mouthwatering dishes crafted with the finest ingredients.
          Discover our diverse menu, cozy atmosphere, and unforgettable dining
          experiences. Perfect for every occasion — from casual meals to special
          celebrations.
        </p>
      </div>
      <div className="flex md:flex-row px-10 mt-10 items-center gap-10">
        <Image
          src="/hotels/heritage/dining/dining-bg2.jpg"
          alt="card-image2"
          width={500}
          height={100}
          className="w-200 h-100 object-cover"
        />

        <div className="flex flex-col items-left justify-between gap-5 w-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-left gap-2"
            >
              <div>
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-13"
                />
              </div>
              <h2 className="text-md">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      {para.map((para, index) => (
        <div
          key={index}
          className="flex flex-col items-left justify-between mt-5 px-10"
        >
          <p className="font-extralight">{para.desc}</p>
        </div>
      ))}

      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {dineIn.map((dineImg, i) => (
            <div
              key={dineImg.id}
              className="flex-shrink-0 w-[100%] p-1 transition-all duration-500"
            >
              <div>
                <Image
                  src={dineImg.image}
                  alt="dine-in-img"
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
