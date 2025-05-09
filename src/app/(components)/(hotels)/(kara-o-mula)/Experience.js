import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Experience() {
  const [isActive, setIsActive] = useState(false);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  return (
    <div className="px-4 sm:px-6 md:px-10">
      <h1 className="text-2xl sm:text-3xl text-center mt-10">
        Experience in Kara O Mula
      </h1>

      <div className="flex flex-col pt-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2">
            <Image
              src="/hotels/kara-o-mula/kara-o-mula-img2.jpeg"
              alt="heritage-img2"
              width={1000}
              height={600}
              className="w-full h-64 sm:h-80 md:h-100 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-2">
            <p className="text-sm sm:text-base mb-4">
              From the moment you arrive at Heritage Hotel, you are welcomed
              with warm hospitality and a refreshing welcome drink, setting the
              tone for an unforgettable stay. The hotel’s charming blend of
              traditional elegance and modern luxury offers a unique experience
              in a tranquil setting.
            </p>
            <Link href="/experiences">
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
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row items-center gap-5">         
          <div className="w-full md:w-1/2 text-center md:text-left px-2">
            <p className="text-sm sm:text-base">
              For those seeking extra space and comfort, the Executive Suite
              offers a separate living area and bedroom, creating a private and
              sophisticated ambiance.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/hotels/kara-o-mula/kara-o-mula-img3.jpeg"
              alt="heritage-img3"
              width={1000}
              height={600}
              className="w-full h-64 sm:h-80 md:h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
