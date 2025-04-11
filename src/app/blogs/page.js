"use client"
import Image from "next/image";
import React from "react";
import Accordion from "../(components)/(blog)/BlogAccordion";
import Tabs from "../(components)/(blog)/Tabs";

export default function Blogs() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/blog.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="w-full h-100 object-cover"
        />

        <div className="absolute inset-0 bottom-0 flex items-end justify-center text-white text-5xl pb-4">
          Inside the Haven: Discover More
        </div>
      </div>
      <Tabs/>
    </div>
  );
}
