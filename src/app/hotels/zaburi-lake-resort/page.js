"use client"
import Accommodation from "@/app/(components)/(hotels)/(zaburi-lake-resort)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(zaburi-lake-resort)/Experience";
import Gallery from "@/app/(components)/(hotels)/(zaburi-lake-resort)/Gallery";
import OfferSlider from "@/app/(components)/(hotels)/(zaburi-lake-resort)/OfferSlider";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ZaburiLakeResort() {
  const [isActive, setIsActive] = useState(false);
    
      const activateHover = () => setIsActive(true);
      const deactivateHover = () => setIsActive(false);

  const navLink = "hotels/zaburi-lake-resort/offers";
  const items = [
    { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
    { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
    { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
    { url: "/icons/hotels/wine.png", title: "Mini Bar" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/zaburi-lake-resort.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          Zaburi Lake Resort
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center p-5 sm:p-10 gap-5">
        <Image
          src="/hotels/zaburi-lake/zaburi-img1.jpeg"
          alt="zaburi-img1"
          width={1500}
          height={100}
          className="w-full sm:w-1/3 h-80 object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            Nature’s Calm Retreat Embrace the Magic of Mangochi’s Waters
          </h1>
          <p className="text-sm sm:text-base text-center md:text-left">
            Situated in Bolera Village, Mangochi, Zaburi Lake Resort offers a
            peaceful retreat along the shores of Lake Malawi. The resort
            provides comfortable accommodations, a variety of recreational
            activities, and the natural beauty of the surrounding area, making
            it a perfect destination for relaxation and exploration.
          </p>
          
        </div>
      </div>

      {/* Accommodation */}
      <Accommodation />

      {/* Perks Section */}
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
      <Gallery/>
      <OfferSlider nav={navLink} />
    </div>
  );
}
