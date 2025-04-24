import Accommodation from "@/app/(components)/(hotels)/(heritage)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(heritage)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/(heritage)/FoodFlavor";
import OfferSlider from "@/app/(components)/(hotels)/(heritage)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Heritage() {
  const navLink = "hotels/heritage-hotel/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/heritage/heritage-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen w-full"
        />
         <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Heritage Hotel
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-10 gap-5">
        <Image
          src="/hotels/heritage/heritage-img1.jpg"
          alt="heritage-img1"
          width={1500}
          height={100}
          className="w-full md:w-1/2 object-cover h-64 sm:h-80 md:h-96"
        />
        <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            A Secret Haven of Luxury, Right Outside the Heart of Limbe
          </h1>
          <p className="text-center text-sm sm:text-base">
            Heritage by Serendib, established in 2018, is a distinguished hotel
            located in the heart of Limbe, Blantyre, Malawi. This hotel
            masterfully combines historical charm with modern amenities,
            offering guests a unique and comfortable stay. Nestled just outside
            the bustling city center, Heritage by Serendib provides a serene
            escape while remaining conveniently close to key attractions and
            business hubs. With elegantly designed rooms, world-class dining,
            and personalized services, the hotel ensures an unforgettable
            experience for both leisure and business travelers.
          </p>
          <Link
            href="/hotels/heritage-hotel/location"
            className="text-sm lg:text-lg md:text-md"
          >
            <button className="relative group text-black py-1 px-2 border-b-2 border-transparent">
              Discover Place
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>

      <Accommodation />

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl mt-6 text-gray-500">
            Included With Your Stay
          </h1>
          <h2 className="text-md text-gray-500">Enjoy These Perks On Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col items-center px-4 md:border-r last:border-r-0"
            >
              <Image
                src={item.url}
                alt="icon"
                width={40}
                height={40}
                className="w-10"
              />
              <h2 className="text-sm text-center mt-2">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <Experience />
      <FoodFlavor />
      <OfferSlider nav={navLink} />
    </div>
  );
}
