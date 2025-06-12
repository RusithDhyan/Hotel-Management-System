"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import OurStory from "../(components)/(home)/OurStory";
import OfferSlider from "../(components)/(home)/OfferSlider";
import Link from "next/link";
import HomeSlider from "../(components)/(home)/HomeSlider";
import HotelNav from "../(components)/(home)/HotelNav";
import HotelSlider from "../(components)/(home)/HotelSlider";
import Form from "../Form";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const navLink = "offers";

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);
  const handleTouch = () => setShowNav((prev) => !prev);

  return (
    <div className="w-full">
      <HomeSlider sectionRef={sectionRef} />

      <div className="max-w-screen-2xl mx-auto h-auto mt-10 w-full px-4 sm:px-10 flex flex-col lg:flex-row items-center gap-6 xl:gap-10 2xl:gap-20">
        <Image
          src="/images/home1.jpeg"
          alt="card-image1"
          width={1500}
          height={100}
          className="w-full sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-[30rem] lg:h-[34rem] object-cover"
        />

        <div
          ref={sectionRef}
          className="flex flex-col gap-4 text-sm md:text-base lg:text-lg xl:text-xl px-1 md:px-10 mt-10 max-w-4xl"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Welcome to Serendib Hotels & Resorts
            <br />
          </h1>

          <p className="text-justify">
            From lakeside escapes to vibrant city stays, Serendib Hotels offers
            distinctive hospitality across Malawi. Whether you're seeking
            relaxation, adventure, or business convenience, each of Serendip
            properties are thoughtfully designed to reflect the charm and spirit
            of its location.
          </p>

          <div>
            <Link
              href="/about"
              className="text-sm md:text-base text-gray-500 hover:text-gray-400 duration-300"
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

      <div className="h-auto my-20 w-full max-w-screen-2xl mx-auto">
        <HotelSlider />
      </div>

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center sm:gap-20 xl:gap-60 md:justify-between mt-20 px-5 sm:px-10">
        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg max-w-xl">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            Explore Malawi...
          </h1>
          <p className="leading-relaxed">
            Malawi is a landlocked jewel in southeastern Africa, renowned for
            its warm, welcoming people and breathtaking natural beauty.
            Dominated by the expansive Lake Malawi—Africa’s third-largest
            lake—this vibrant country offers golden beaches, crystal-clear
            waters, and a rich variety of marine life. Beyond the lake, rolling
            highlands, dramatic mountains, and fertile valleys create a diverse
            and stunning landscape.
            <br className="hidden sm:block" />
            Malawi is also home to thriving wildlife reserves, vibrant cultural
            traditions, and a deep sense of community. Whether you're seeking
            adventure, relaxation, or connection, Malawi offers an experience
            that is both authentic and unforgettable.
          </p>
        </div>

        <div
          className="relative flex items-center justify-center overflow-hidden group w-full"
          onTouchStart={handleTouch}
        >
          <Image
            src="/images/map2.png"
            alt="card-image2"
            width={1500}
            height={100}
            className="object-cover w-80 sm:h-150 md:h-200 lg:h-[24rem] xl:h-[60rem]"
          />

          <HotelNav />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-2 sm:px-10 py-10">
        <Image
          src="/images/elephant.jpeg"
          alt="card-image2"
          width={500}
          height={300}
          className="w-full sm:w-[80%] md:w-[50%] h-64 sm:h-85 md:h-125 object-cover"
        />

        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg w-full md:w-[50%]">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            From the Heart of Malawi: Stories, Tips & Travel Inspiration
          </h1>
          <p className="leading-relaxed">
            Sub Content Dive into the Serendib experience through our
            blog—featuring travel guides, hidden gems, local cuisine spotlights,
            hotel highlights, and behind-the-scenes glimpses. Whether you're
            planning your first visit or reliving your favorite memories, our
            stories bring Malawi to life.
          </p>

          <div className="mt-4">
            <Link href="/experiences" className="text-sm lg:text-lg md:text-md">
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
      {/* <Form /> */}
    </div>
  );
}
