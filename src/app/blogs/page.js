"use client";
import Image from "next/image";
import React from "react";
import Tabs from "../(components)/(blog)/Tabs";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/images/blog.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Inside the Haven: Discover More{" "}
        </h1>
      </div>
      <Tabs />
    </div>
  );
}
