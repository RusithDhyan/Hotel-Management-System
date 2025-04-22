import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-5 p-2">
          <Image
            src="/hotels/heritage/heritage-img2.jpeg"
            alt="heritage-img2"
            width={1000}
            height={100}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <p className="text-center text-sm sm:text-base">
            From the moment you arrive at Heritage Hotel, you are welcomed with
            warm hospitality and a refreshing welcome drink, setting the tone
            for an unforgettable stay. The hotel’s charming blend of traditional
            elegance and modern luxury offers a unique experience in a tranquil
            setting.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-2 relative overflow-hidden group">
          <h1 className="text-2xl sm:text-3xl text-center">Experience in Heritage</h1>
          <div className="relative w-full">
            <Image
              src="/hotels/heritage/heritage-img3.jpeg"
              alt="heritage-img3"
              width={1000}
              height={100}
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 group-hover:bg-opacity-60"
            />
            <div className="absolute inset-0 flex items-end px-4 sm:px-10 pb-5">
              <p className="w-full text-center text-sm opacity-0 bg-white/60 transition-opacity duration-300 group-hover:opacity-100 p-2">
                For those seeking extra space and comfort, the Executive Suite
                offers a separate living area and bedroom, creating a private
                and sophisticated ambiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
