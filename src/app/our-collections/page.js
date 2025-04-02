import Image from "next/image";
import React from "react";

export default function OurCollection() {
  const items = [
    { url: "/icons/item1.png", title: "Deals You'll Love" },
    { url: "/icons/item2.png", title: "24/7 Call Suport" },
    { url: "/icons/item3.png", title: "Top Hotel Selection" },
    { url: "/icons/item4.png", title: "Easy & Secure" },
    { url: "/icons/item5.png", title: "Travel Sentiments" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/our-collection.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Our Collection
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">Discover Our Exclusive Hotel Collection</h1>
        <p className="font-extralight">
          Experience a seamless blend of luxury, nature, and Malawian
          hospitality in our carefully curated boutique hotels.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">Your Ideal Choice for Comfort & Luxury</h1>
        <div className="border-y flex flex-row items-center justify-center gap-5 p-2 w-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-300 rounded-full w-20 h-20 flex flex-row items-center justify-center">
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-15"
                />
              </div>
              <h2 className="text-sm">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
