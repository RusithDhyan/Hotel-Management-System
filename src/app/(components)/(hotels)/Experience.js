import PageExpForm from "@/app/PageExpForm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Experience({hotelId}) {
  const [isActive, setIsActive] = useState(false);
  const [experiences, setExperience]  = useState([]);
  
    useEffect(() => {
      fetchExperience();
    },[]);

    const fetchExperience = async () => {
      const res = await fetch(`/api/page-exp?hotelId=${hotelId}`);
      const data = await res.json();
      console.log("Fetched experience:", data.data); // <- add this
  
      if (data.success) setExperience(data.data);
    };

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  return (
    <div className="px-4 sm:px-6 md:px-10">
      

      {experiences.map((experience) => (
      <div key={experience._id} className="flex flex-col pt-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-1/2">
            <Image
              src={experience.image_left}
              alt="heritage-img2"
              width={1000}
              height={600}
              className="w-full h-64 sm:h-80 md:h-100 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-2">
            <p className="text-sm sm:text-base mb-4">
              {experience.description_right}
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
              {experience.description_left}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={experience.image_right}
              alt="heritage-img3"
              width={1000}
              height={600}
              className="w-full h-64 sm:h-80 md:h-100 object-cover"
            />
          </div>
        </div>
      </div>
))}
      <PageExpForm hotelId={hotelId}/>
    </div>
  );
}
