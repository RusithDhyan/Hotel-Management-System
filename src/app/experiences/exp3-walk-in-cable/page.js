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
