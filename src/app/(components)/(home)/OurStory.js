import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurStory() {
  return (
    <div className="mt-10">
      <div className="relative w-full">
        <Image
          src="/images/our-story.jpg"
          alt="our-story-image"
          width={1500}
          height={500}
          className="w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-start sm:items-center px-2">
          <div className="mt-5 max-w-2xl">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-2">
              Iconic Elegance & Luxury
            </h1>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Create unforgettable memories with the perfect father-and-son
              getaway at Lake Malawi. Enjoy thrilling water sports, scenic boat
              rides, and fishing adventures on the crystal-clear waters.
              Explore the rich wildlife, unwind on pristine beaches, and share
              stories around a cozy lakeside campfire.
            </p>
            <div>
              <Link
                href="/about"
                className="text-white text-xs sm:text-sm md:text-base"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
