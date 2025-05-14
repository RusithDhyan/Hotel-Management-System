"use client";
import InquiryForm from "@/app/(components)/(experience)/InquiryForm";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp1-cable-walk/exp1.jpeg",
  "/experience/exp1-cable-walk/exp2.jpg",
  "/experience/exp1-cable-walk/exp3.jpeg",
  "/experience/exp1-cable-walk/exp4.jpeg",
  "/experience/exp1-cable-walk/exp5.jpeg",
];

export default function Experience1() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp1-cable-walk/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Walk the Skies: Malawi’s Thrilling Cable Walk Adventure
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          Experience Malawi from an exhilarating new perspective as you take on
          the ultimate challenge — a cable walk suspended high above the forest
          canopy or scenic valleys...
        </p>
      </div>

      {/* Image Slider and Description */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src={images[index]}
            alt="Exp"
            fill
            className="object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-between gap-5 px-2">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full hover:bg-black"
            >
              <CircleChevronLeft size={30} color="white"/>
            </button>
            <button onClick={nextSlide} className="p-1 rounded-full hover:bg-black">
              <CircleChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Experience the Flavors of Heritage
          </h1>
          <p>
            Take adventure to new heights with Malawi’s breathtaking cable
            walking experience. Suspended high above scenic valleys and forest
            canopies, this thrilling activity combines stunning views with
            heart-pounding excitement. Perfect for adventurers and nature
            lovers, the cable walk offers a safe, guided journey across the
            skies — where every step brings a rush of adrenaline and awe.
          </p>
        </div>
      </div>

      <InquiryForm />
    </div>
  );
}
