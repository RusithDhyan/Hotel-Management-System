import Image from "next/image";
import React from "react";

export default function Experience3() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp-bg3.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Walk the Skies: Malawi’s Thrilling Cable Walk Adventure
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-light text-sm sm:text-base text-justify">
          Experience Malawi from an exhilarating new perspective as you take on
          the ultimate challenge — a cable walk suspended high above the forest
          canopy or scenic valleys...
        </p>
      </div>

      {/* Slide Card Section */}
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/experience/exp-bg7.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-4 sm:px-10 flex items-end justify-end">
          <div className="relative w-full sm:w-100 h-80 overflow-hidden group">
            {/* Desktop View (Hover Effect) */}
            <div className="hidden sm:flex">
              {/* Front Card */}
              <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-xl transition-all duration-500 group-hover:opacity-0">
                Experience the Flavors of Heritage
              </div>

              {/* Slide-In Card */}
              <div className="absolute inset-0 flex flex-col p-2 items-center justify-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <p className="text-sm">
                  Take adventure to new heights with Malawi’s breathtaking cable
                  walking experience. Suspended high above scenic valleys and
                  forest canopies, this thrilling activity combines stunning
                  views with heart-pounding excitement. Perfect for adventurers
                  and nature lovers, the cable walk offers a safe, guided
                  journey across the skies — where every step brings a rush of
                  adrenaline and awe.
                </p>
              </div>
            </div>

            {/* Mobile View (Static Stacked View) */}
            <div className="flex flex-col sm:hidden bg-white bg-opacity-90 rounded-lg p-4 text-sm">
              <div className="text-black font-semibold mb-2">
                Experience the Flavors of Heritage
              </div>
              <p>
                Take adventure to new heights with Malawi’s breathtaking cable
                walking experience. Suspended high above scenic valleys and
                forest canopies, this thrilling activity combines stunning views
                with heart-pounding excitement. Perfect for adventurers and
                nature lovers, the cable walk offers a safe, guided journey
                across the skies — where every step brings a rush of adrenaline
                and awe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card Section */}
      <div className="flex flex-col md:flex-row items-center mt-10 px-4 sm:px-10 gap-5">
        <Image
          src="/experience/exp3.jpeg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-auto rounded-lg"
        />
        <div className="flex flex-col items-start gap-2 text-sm md:text-base">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
            The Cable Walk Challenge
          </h1>
          <p>
            Step into the thrill of walking high above the forest floor with our
            exhilarating cable walking experience. Suspended between towering
            trees or across scenic valleys, this adventure offers a heart-racing
            blend of balance, bravery, and breathtaking views. As you carefully
            make your way along the cable, surrounded by birdsong and sweeping
            natural beauty, you'll feel a unique mix of adrenaline and awe.
          </p>
        </div>
      </div>
    </div>
  );
}
