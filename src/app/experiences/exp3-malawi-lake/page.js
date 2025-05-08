"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/experience/exp3-malawi-lake/exp1.jpeg",
  "/experience/exp3-malawi-lake/exp2.jpg",
  "/experience/exp3-malawi-lake/exp3.jpg",
  "/experience/exp3-malawi-lake/exp4.jpg",
];
export default function Experience3() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp3-malawi-lake/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Explore the Islands of Lake Malawi
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          Hop on a boat and journey to the serene islands of Lake Malawi, where
          untouched beaches and lush vegetation await. Spend the day exploring
          these hidden gems, swimming in crystal-clear waters, or simply
          relaxing on the shore, away from the crowds.
        </p>
      </div>

      {/* Info Card Section */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src={images[current]}
            alt="Exp"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Unwind by the Shores of Lake Malawi
          </h1>
          <p>
            Experience the serene beauty of Lake Malawi, where crystal-clear
            waters meet golden sands. Whether you're kayaking across the calm
            surface, snorkeling with vibrant cichlid fish, or simply relaxing
            under the shade of a baobab tree, Lake Malawi offers the perfect
            escape into nature. Discover charming lakeside villages, enjoy fresh
            fish by the water, and witness breathtaking sunsets that paint the
            sky in hues of orange and pink.
          </p>
        </div>
      </div>
    </div>
  );
}
