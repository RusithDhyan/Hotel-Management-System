"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HotelForm from "../HotelForm";
import { useData } from "../context/DataContext";

export default function OurCollection() {

  const {hotels} = useData();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-auto">
        <Image
          src="/images/our-collection.jpg"
          alt=""
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Our Collection
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-5 text-center">
        <h1 className="text-xl md:text-2xl">
          Discover Our Exclusive Hotel Collection
        </h1>
        <p className="font-extralight">
          Experience a seamless blend of luxury, nature, and Malawian
          hospitality in our carefully curated boutique hotels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5 mt-10 px-5">
      {Array.isArray(hotels) ? (
      hotels.map(hotel => (
          <div
            key={hotel._id}
            className="relative overflow-hidden shadow-md group transition transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-[200px] sm:h-[300px]">
              <Link href={`/our-collections/${hotel._id}`}>
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:brightness-75"
                />
              </Link>
            </div>
            <div className="p-1 bg-white">
              <h2 className="text-md sm:text-lg font-semibold">
                {hotel.title}
              </h2>
              <h3 className="text-gray-600 text-sm">{hotel.location}</h3>
              <p className="text-sm mt-2">{hotel.description}</p>
            </div>
          </div>
            ))
          ) : (
            <p>Loading or invalid data</p>
          )}
      </div>
      <HotelForm/>
    </div>
  );
}
