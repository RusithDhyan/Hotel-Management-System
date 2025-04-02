import Image from "next/image";
import React from "react";

export default function KambiriBeach() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/hotels/kambiri-beach.jpg"
          alt=""
          width={1500}
          height={100}
          className="object-cover"
        />

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-white pb-4">
          Kambiri Beach
        </h1>
      </div>

      <div className="h-50"></div>
    </div>
  );
}
