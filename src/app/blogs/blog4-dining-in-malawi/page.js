import Image from "next/image";
import React from "react";

export default function Blog4() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto">
        <Image
          src="/blogs/blog1.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          A Taste of Elegance: Dining Delights at Heritage Hotel
        </h1>
        <h3 className="">15/08/2024</h3>
        <p className="font-extralight">
          Discover a world of flavor at Heritage Hotel’s signature restaurants,
          where every meal is a celebration. From gourmet international cuisine
          to authentic local dishes, our chefs craft unforgettable dining
          experiences in elegant settings. Whether you're enjoying a romantic
          dinner, a family feast, or a business lunch, every bite tells a story
          of passion and quality.
        </p>
      </div>
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/blogs/blog-bg.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-10 flex items-end justify-end">
          <div className="relative w-100 h-1/2 overflow-y-scroll group">
            {/* Front Card (Visible by Default) */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-2xl transition-all duration-500 group-hover:opacity-0">
              Experience the Flavors of Heritage
            </div>

            {/* Hidden Details (Slide In from Left on Hover) */}
            <div className="absolute inset-0 flex flex-col p-3 items-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              <p>
                At Heritage Hotels, dining is more than a meal—it's a journey
                through taste and tradition. Our curated menu features a
                harmonious blend of local Sri Lankan flavors and international
                favorites, crafted with the finest ingredients by our expert
                chefs. Whether you're indulging in a rich curry, savoring a
                perfectly grilled steak, or enjoying a light tropical dessert,
                every dish is served with elegance and care. Join us for a
                memorable culinary experience in a setting that’s as refined as
                the flavors on your plate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto flex flex-col md:flex-row items-center w-full px-2 lg:px-10 gap-5">
        <Image
          src="/blogs/blog4.jpg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-150 h-120"
        />
        <div className="flex flex-col items-left gap-2 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
            Chef’s Special Creations
          </h1>
          <p>
            Explore our chef’s signature dishes that blend tradition with
            innovation. These culinary masterpieces showcase the finest
            ingredients and are crafted to provide an unforgettable dining
            experience. Don’t miss out on these mouthwatering creations on your
            next visit!
          </p>
        </div>
      </div>

      <div className=" h-auto flex flex-col md:flex-row items-center w-full px-2 lg:px-10 gap-5">
        <div className="flex flex-col items-left gap-2 text-xs lg:text-lg md:text-md">
          <h1 className="text-xl lg:text-4xl md:text-3xl">
            Fresh, Local, and Sustainable
          </h1>
          <p>
            At Heritage Hotels, we believe in using only the freshest local
            produce and sustainable ingredients in our dishes. From farm to
            table, we take pride in supporting local farmers and ensuring that
            every meal is as fresh and eco-friendly as possible.
          </p>
        </div>
        <Image
          src="/blogs/blog5.jpg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-150 h-120"
        />
      </div>
    </div>
  );
}
