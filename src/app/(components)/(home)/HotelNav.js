"use client";

import { useData } from "@/app/context/DataContext";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
  const { hotels } = useData();
  // Position styles based on index (0-based)
  const positions = [
    "top-[32%] left-[30%]",
  ];

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        {hotels.map((hotel, index) => {
          const position = positions[index];
          if (!position) return null;

          return (
            <Link key={hotel._id} href={`/our-collections/${hotel._id}`}>
              <div className={`${position}`}>
                <div className={`absolute flex items-center gap-1 group`}>
                  <MapPin color="red" size={18} />
                  <h4 className="text-[10px] sm:text-[12px] lg:text-[15px] font-semibold group-hover:text-orange-600 transition duration-300">
                    {hotel.title}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
