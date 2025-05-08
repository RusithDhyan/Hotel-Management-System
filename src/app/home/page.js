"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import OurStory from "../(components)/(home)/OurStory";
import ServiceCardSlider from "../(components)/(home)/ServiceCardSlider";
import OfferSlider from "../(components)/(home)/OfferSlider";
import Link from "next/link";
import HomeSlider from "../(components)/(home)/HomeSlider";
import HotelNav from "../(components)/(home)/HotelNav";
import HotelSlider from "../(components)/(home)/HotelSlider";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const handleTouch = () => {
    setShowNav((prev) => !prev);
  };

  const sectionRef = useRef(null);

  const navLink = "offers";

  return (
    <div>
      <HomeSlider sectionRef={sectionRef} />

      <div className="h-auto mt-10 w-full px-2 sm:px-10 flex flex-col lg:flex-row items-center gap-4">
        <Image
          src="/images/home1.jpeg"
          alt="card-image1"
          width={700}
          height={1000}
          className="sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-120 lg:h-130 object-cover "
        />
        <div
          ref={sectionRef}
          className="flex flex-col gap-4 text-sm md:text-base lg:text-lg px-1 md:px-8"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Eco Luxury Escapes <br /> in Malawi
          </h1>

          <p className="text-justify">
            We are a renowned collection of charming boutique hotels and serene
            tea bungalows, offering a blend of sophisticated yet laid-back
            luxury experiences across Malawi. Each of our 7 hotels boasts its
            own unique character and narrative, while sharing a common
            dedication to preserving historic landmarks, protecting the
            environment, celebrating the rich local culture, and showcasing
            Malawi’s extraordinary natural beauty and vibrant local cuisine.
          </p>

          <div>
            <Link
              href="/about"
              className=" text-sm md:text-base text-gray-500 hover:text-gray-400 duration-300"
            >
              Read more
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/images/home2.jpeg"
              alt="card-image1"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <Image
              src="/images/home3.jpeg"
              alt="card-image2"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <Image
              src="/images/home4.jpeg"
              alt="card-image3"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" h-auto mt-10 w-full">
        <HotelSlider />
      </div>
      <div className="h-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-between my-10 px-5 sm:px-10">
        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg max-w-3xl">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            Explore Malawi...
          </h1>
          <p className="leading-relaxed">
            Malawi is a landlocked country in southeastern Africa, bordered by
            Tanzania, Mozambique, and Zambia. It is known as the "Warm Heart of
            Africa" due to the friendliness of its people. The country features
            stunning landscapes,
            <br className="hidden sm:block" />
            including Lake Malawi, one of Africa’s largest and most biodiverse
            lakes, which offers pristine beaches, water activities, and
            wildlife.
          </p>
        </div>

        <div
          className="relative flex items-center justify-center overflow-hidden group w-full sm:w-[90%] md:w-[50%] max-w-xl"
          onTouchStart={handleTouch}
        >
          <Image
            src="/images/map2.png"
            alt="card-image2"
            width={800}
            height={500}
            className="object-cover w-65 sm:h-100 h-80"
          />

          <HotelNav />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-2 sm:px-10 py-10">
        <Image
          src="/images/elephant.jpeg"
          alt="card-image2"
          width={500}
          height={300}
          className="w-full sm:w-[80%] md:w-[50%] h-64 sm:h-85 md:h-125 object-cover"
        />

        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg w-full md:w-[50%]">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            Lakeside Adventure
          </h1>
          <p className="leading-relaxed">
            Handpicked adventures nestled in the heart of Lake Malawi, the
            islands of Likoma and Chizumulu offer a secluded paradise filled
            with crystal-clear waters, sandy beaches, and vibrant marine life.
            Unlike the bustling mainland, these islands provide an intimate and
            laid-back experience, perfect for relaxation and adventure. As you
            arrive, whether by boat or a small charter plane, you’ll be greeted
            by warm Malawian hospitality and breathtaking views of the
            shimmering lake stretching to the horizon. The gentle lapping of
            waves against the shore sets the tone for a peaceful escape.
          </p>

          <div className="mt-4">
            <Link href="/blogs" className="text-sm lg:text-lg md:text-md">
              <button
                className="relative text-black py-1 border-b-2 border-transparent"
                onMouseEnter={activateHover}
                onMouseLeave={deactivateHover}
                onTouchStart={activateHover}
                onTouchEnd={deactivateHover}
              >
                Discover
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-8"
                  }`}
                ></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <ServiceCardSlider /> */}
      <OfferSlider nav={navLink} />
      <OurStory />
    </div>
  );
}
