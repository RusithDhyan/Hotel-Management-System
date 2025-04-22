"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Gym() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const locations = [
    { id: 1, image: "/services/gym/feature1.jpg" },
    { id: 2, image: "/services/gym/feature2.jpg" },
    { id: 3, image: "/services/gym/feature3.jpg" },
    { id: 4, image: "/services/gym/feature4.jpg" },
  ];

  const items = [
    {
      url: "/icons/services/gym/activity.png",
      title: "Monitor your gains with smart fitness tracking",
    },
    {
      url: "/icons/services/gym/dumbbell.png",
      title: "Lift, tone, and grow with top-tier equipment",
    },
    {
      url: "/icons/services/gym/flame.png",
      title: "Intense workouts to melt away fat",
    },
    { url: "/icons/services/gym/watch.png", title: "Flexible Hours" },
    {
      url: "/icons/services/gym/medal.png",
      title: "Smash milestones and celebrate every win",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="w-full relative group">
        <Image
          src="/services/gym/service-bg1.jpg"
          alt=""
          width={1500}
          height={500}
          className="object-cover w-full h-[200px] md:h-[300px] lg:h-[400px]"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4">
          Fitness Center
        </h1>
      </div>

      {/* Introduction */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 md:px-16 text-center">
        <p className="font-extralight text-sm md:text-base max-w-5xl">
          Step into a space built for transformation. Our fitness center
          combines cutting-edge equipment, certified personal trainers, and a
          variety of group classes to help you stay motivated and inspired.
          Whether you're a beginner or a seasoned athlete, we offer customized
          programs and expert guidance to match your goals. From strength
          training to yoga, HIIT to recovery lounges — everything you need is
          under one roof.
        </p>
      </div>

      {/* Wellness Icons */}
      <div className="flex flex-col items-center gap-5 mt-10">
        <h1 className="text-2xl md:text-3xl text-gray-500">Wellness Spotlight</h1>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center max-w-[180px]">
              <Image
                src={item.url}
                alt="icon"
                width={150}
                height={150}
                className="w-10"
              />
              <h2 className="text-center text-sm mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Image + Description */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-6 px-4 md:px-10">
        <Image
          src="/services/gym/service-bg2.jpeg"
          alt=""
          width={600}
          height={400}
          className="w-full lg:w-1/2 h-[200px] md:h-[300px] object-cover"
        />
        <Image
          src="/services/gym/service-bg3.jpeg"
          alt=""
          width={600}
          height={400}
          className="w-full lg:w-1/2 h-[200px] md:h-[300px] object-cover"
        />
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start justify-center gap-4 max-w-xl p-4">
          <h1 className="text-2xl md:text-3xl">Fitness for Body & Mind</h1>
          <p className="text-sm md:text-base">
            More than just a gym — we’re a wellness destination. Our center
            offers a holistic approach to health, combining physical training
            with mindfulness and recovery options. Think functional workouts,
            stress-relieving yoga sessions, and expert nutrition support. Here,
            fitness is a lifestyle, and your well-being is always the priority.
          </p>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex-shrink-0 w-full p-1"
            >
              <Image
                src={location.image}
                alt="location-img"
                className="w-full h-[200px] md:h-[350px] object-cover"
                width={1000}
                height={400}
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
