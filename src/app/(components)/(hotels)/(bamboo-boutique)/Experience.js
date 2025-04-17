import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-10 pt-10">
        <div className="flex flex-col w-100 items-center justify-center gap-5 p-2">
          <Image
            src="/hotels/bamboo-boutique/bamboo-img2.jpeg"
            alt="bamboo-img2"
            width={1000}
            height={100}
            className="w-100 h-100 object-cover"
          />
          <p className="text-center">
            From the moment you arrive at Heritage Hotel, you are welcomed with
            warm hospitality and a refreshing welcome drink, setting the tone
            for an unforgettable stay. The hotel’s charming blend of traditional
            elegance and modern luxury offers a unique experience in a tranquil
            setting.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-30 gap-2 relative overflow-hidden group">
          <h1 className="text-3xl">Experience in Heritage</h1>
          <div className="relative overflow-hidden group">
            <Image
              src="/hotels/bamboo-boutique/bamboo-img3.jpeg"
              alt="bamboo-img3"
              width={1000}
              height={100}
              className="w-100 h-100 object-cover transition-transform duration-300 group-hover:bg-opacity-60"
            />
            <div className="absolute inset-0 flex items-end px-10 pb-5 ">
              <p className=" flex items-center justify-center bg-white/50 mt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
