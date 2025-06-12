import Image from "next/image";
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
        <div className="absolute inset-0 flex items-start sm:items-center px-10">
          <div className="mt-5 max-w-2xl">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-2">
              Iconic Elegance & Luxury
            </h1>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              From the glistening shores of Lake Malawi to the lush highlands of
              Mulanje, our carefully curated destinations reflect the beauty,
              tranquility, and vibrant culture of this breathtaking country.
              Whether you're unwinding on the lakeside at Blue Waters Lake
              Resort, enjoying the colonial charm of Heritage Hotel in Limbe, or
              embracing mountain serenity at Kara O’Mula in Mulanje, each
              Serendib property is a gateway to authentic Malawian hospitality
              and adventure.
            </p>
            {/* <div>
              <Link
                href="/about"
                className="text-white text-xs sm:text-sm md:text-base"
              >
                View more
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
