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
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/heritage/heritage-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Heritage Hotel
        </h1>
      </div>

      <div className="flex flex-row items-center p-10 gap-5 ">
        <Image
          src="/hotels/heritage/heritage-img1.jpg"
          alt="heritage-img1"
          width={1500}
          height={100}
          className="h-100 w-200 object-cover"
        />

        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-3xl">
            A Secret Haven of Luxury,Right Outside the Heart of Limbe
          </h1>
          <p className="text-center">
            Heritage by Serendib, established in 2018, is a distinguished hotel
            located in the heart of Limbe, Blantyre, Malawi. This hotel
            masterfully combines historical charm with modern amenities,
            offering guests a unique and comfortable stay.. Nestled just outside
            the bustling city center, Heritage by Serendib provides a serene
            escape while remaining conveniently close to key attractions and
            business hubs. With elegantly designed rooms, world-class dining,
            and personalized services, the hotel ensures an unforgettable
            experience for both leisure and business travelers.
          </p>
          <Link href="/" className="text-sm lg:text-lg md:text-md">
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
      <OfferSlider nav={navLink} />
    </div>
  );
}
