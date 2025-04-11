import Image from "next/image";
import React from "react";

export default function Experience3() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/experience/exp-bg3.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          Walk the Skies: Malawi’s Thrilling Cable Walk Adventure
        </h1>
        <h3 className="">15/08/2024</h3>
        <p className="font-light">
          Experience Malawi from an exhilarating new perspective as you take on
          the ultimate challenge — a cable walk suspended high above the forest
          canopy or scenic valleys. This adrenaline-pumping activity offers
          breathtaking views, a rush of adventure, and a chance to test your
          balance and bravery. Whether you’re a thrill-seeker or a nature lover,
          the cable walking experience promises unforgettable moments with
          safety as a top priority. Perfect for individuals, couples, or
          families looking to add a touch of excitement to their stay in Malawi.
        </p>
      </div>
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/experience/exp-bg7.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-10 flex items-end justify-end">
          <div className="relative w-100 h-50  overflow-y-scroll group">
            {/* Front Card (Visible by Default) */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-2xl transition-all duration-500 group-hover:opacity-0">
              Experience the Flavors of Heritage
            </div>

            {/* Hidden Details (Slide In from Left on Hover) */}
            <div className="absolute inset-0 flex flex-col h-80 p-3 items-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <p>
                Step into the wild and walk high above the ground with our
                thrilling cable walking adventure—a unique way to explore
                Malawi’s breathtaking natural beauty from above. Suspended
                safely between tall trees or across scenic gorges, this activity
                offers a heart-pounding perspective of the lush landscape below.
                Whether you're a first-timer or an adrenaline junkie, you'll
                feel the rush as you balance, walk, and take in panoramic views
                of the forest canopy, shimmering rivers, and distant mountains.
                Guided by trained professionals and equipped with safety gear,
                cable walking is a must-try for adventurous souls staying with
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 px-10 gap-5">
        <Image
          src="/experience/exp3.jpeg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-110 h-110"
        />
        <div className="flex flex-col items-left gap-2 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
            The Cable Walk Challenge
          </h1>
          <p className="text-sm">
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
