import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurStory() {
  return (
    <div className="mt-10">
      <h1 className="text-xl lg:text-4xl md:text-3xl my-5 ml-2">
        Iconic Elegance & Luxury
      </h1>
      <div className="flex w-full relative">
        <Image
          src="/images/spl5.jpg"
          alt="our-story-image"
          width={1500}
          height={50}
        />
        <div className="flex absolute inset-0 items-center px-5">
          <div className="flex flex-col justify-between gap-2 lg:mt-60 md:mt-45 sm:mt-30">
            <p className="text-white text-xs lg:text-lg ">
              Create unforgettable memories with the perfect father-and-son
              getaway at Lake Malawi. Enjoy thrilling water sports, <br />{" "}
              scenic boat rides, and fishing adventures on the crystal-clear
              waters. Explore the rich wildlife, unwind on pristine beaches,
              <br /> and share stories around a cozy lakeside campfire.
            </p>
            <Link
              className="text-white text-xs lg:text-lg md:text-md"
              href="/about"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
