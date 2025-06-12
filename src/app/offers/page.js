"use client";
import Image from "next/image";
import React from "react";
import OfferGrid from "../(components)/(offer)/OfferGrid";
import { useData } from "../context/DataContext";

export default function Offers() {
  const { offers } = useData();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/images/offer.jpg"
          alt=""
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Offers
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10 md:px-20 lg:px-30">
        <h1 className="text-xl sm:text-2xl text-center">
          Exclusive Deals & Luxurious Offers
        </h1>
        <p className="font-extralight text-center text-sm sm:text-base">
          Indulge in the finest experiences at unbeatable value. From special
          rates to exclusive perks, our curated offers bring you luxury,
          comfort, and unforgettable moments, all for less.
        </p>
      </div>

      {offers.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-10 text-gray-500">
          <p>Hang tight! Great offers are on the way</p>
        </div>
      ) : (
        <OfferGrid offers={offers} />
      )}
    </div>
  );
}
