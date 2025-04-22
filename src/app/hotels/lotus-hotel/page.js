import Accommodation from "@/app/(components)/(hotels)/(lotus-hotel)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(lotus-hotel)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/(lotus-hotel)/FoodFlavor";
import OfferSlider from "@/app/(components)/(hotels)/(lotus-hotel)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LotusHotel() {
  const navLink = "hotels/lotus-hotel/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/lotus-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Lotus Hotel
        </h1>
      </div>
      <div className="flex flex-row items-center p-10 gap-5 ">
        <Image
          src="/hotels/lotus-hotel/lotus-img1.jpeg"
          alt="lotus-img1"
          width={1500}
          height={100}
          className="h-100 w-200 object-cover "
        />

        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-3xl">
            Chic Comfort Awaits The City’s Quiet Corner of Style and Simplicity
          </h1>
          <p className="text-center">
            Located on Glyn Jones Road, Blantyre, Lotus Hotel offers comfortable
            accommodations with easy access to the city's attractions. The hotel
            provides a range of amenities catering to both business and leisure
            travelers, ensuring a pleasant stay in the vibrant city of Blantyre.
          </p>
          <Link href="/hotels/lotus-hotel/location" className="text-sm lg:text-lg md:text-md">
            <button className="relative group text-black py-1 px-2 border-b-2 border-transparent">
              Discover Place
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
      <Accommodation />
      <div className="flex flex-row items-center justify-around mt-10">
        <div>
          <h1 className="text-center text-3xl mt-10 text-gray-500">
            Included With Your Stay
          </h1>
          <h1 className="text-center text-md text-gray-500">
            Enjoy These Perks On Us
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 w-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-r px-5"
            >
              <div className="flex flex-row  items-center justify-center">
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
      <Experience />
      <FoodFlavor />
      <OfferSlider nav={navLink} />{" "}
    </div>
  );
}
