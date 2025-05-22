"use client";
import InquiryForm from "@/app/(components)/(experience)/InquiryForm";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp1-cable-walk/exp1.jpeg",
  "/experience/exp1-cable-walk/exp2.jpg",
  "/experience/exp1-cable-walk/exp3.jpeg",
  "/experience/exp1-cable-walk/exp4.jpeg",
  "/experience/exp1-cable-walk/exp5.jpeg",
];

export default function ExperienceInnerPage() {
  const [index, setIndex] = useState(0);

  const [experience, setExperience] = useState(null);
  const { id } = useParams();

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

  useEffect(() => {
    const fetchExperience = async () => {
      const res = await fetch(`/api/experience/${id}`);
      const data = await res.json();
      setExperience(data);
    };
    if (id) fetchExperience();
  }, [id]);

  if (!experience) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src={experience.image}
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          {experience.main_title}
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          {experience.main_description}
        </p>
      </div>

      {/* Image Slider and Description */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          {experience.image_slider?.map((img, i) => (
            <Image
              key={i}
              src={img[i]}
              alt="Exp"
              fill
              className="object-cover transition-opacity duration-500"
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-between gap-5 px-2">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full hover:bg-black/50"
            >
              <CircleChevronLeft size={30} color="white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded-full hover:bg-black/50"
            >
              <CircleChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {experience.body_title}
          </h1>
          <p>{experience.body_description}</p>
        </div>
      </div>

      <InquiryForm />
    </div>
  );
}
