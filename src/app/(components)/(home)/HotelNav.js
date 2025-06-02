"use client";
import { useData } from "@/app/context/DataContext";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
  const { hotels } = useData();
  // Position styles based on index (0-based)
  const positions = [
    "top-[30] left-[-100]",
    "top-[-150] left-[-180]",
    "top-[100] left-[-80]",
    "top-[-220] left-[-200]",
    "top-[-200] left-[-180]",
    "top-[10] left-[-180]",
    "top-[40] left-[-160]",
  ];

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center">
        {hotels.map((hotel, index) => {
          const position = positions[index];
          if (!position) return null;

          return (
            <Link key={hotel._id} href={`/our-collections/${hotel._id}`}>
              <div
                className={`absolute flex items-center gap-1 group ${position}`}
              >
                <MapPin color="red" size={18} />
                <h4 className="text-[10px] sm:text-[12px] lg:text-[15px] font-semibold hover:text-orange-600 transition duration-300">
                  {hotel.hotel_name}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
