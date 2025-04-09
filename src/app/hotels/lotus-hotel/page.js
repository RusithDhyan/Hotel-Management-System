import Image from "next/image";
import React from "react";

export default function LotusHotel() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/lotus-hotel.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover max-h-screen"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Lotus Hotel
        </h1>
      </div>

      <div className="h-50"></div>
    </div>
  );
}
