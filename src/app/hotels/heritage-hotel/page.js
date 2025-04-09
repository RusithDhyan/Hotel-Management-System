import OfferSlider from "@/app/(components)/(home)/OfferSlider";
import Accommodation from "@/app/(components)/(hotels)/Accommodation";
import Experience from "@/app/(components)/(hotels)/Experience";
import FoodFlavor from "@/app/(components)/(hotels)/FoodFlavor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Heritage() {
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
          className="w-100 object-cover "
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
            <button className="relative group text-black py-2 px-4 border-b-2 border-transparent">
              Discover Place
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
      <Accommodation />
      <Experience />
      <FoodFlavor />
      <OfferSlider />
    </div>
  );
}
