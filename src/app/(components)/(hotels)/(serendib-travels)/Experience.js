import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Experience() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-5 p-2">
          <Image
            src="/hotels/serendib-travels/serendib-img2.jpeg"
            alt="serendib-img2"
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
          <Link
            href="/experiences"
            className="text-sm lg:text-lg md:text-md"
          >
            <button
              className="relative text-black py-1 border-b-2 border-transparent"
              onMouseEnter={activateHover}
              onMouseLeave={deactivateHover}
              onTouchStart={activateHover}
              onTouchEnd={deactivateHover}
            >
              Discover
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-8"
                }`}
              ></span>
            </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-2 relative overflow-hidden group">
          <h1 className="text-2xl sm:text-3xl text-center">
            Experience in Serendib Travels
          </h1>
          <div className="relative w-full">
            <Image
              src="/hotels/serendib-travels/serendib-img3.jpeg"
              alt="serendib-img3"
              width={1000}
              height={100}
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 group-hover:bg-opacity-60"
            />
            <div className="absolute inset-0 flex items-end px-4 sm:px-10 pb-5">
              <p className="w-full text-center text-sm opacity-0 bg-white/60 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100 p-2">
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
