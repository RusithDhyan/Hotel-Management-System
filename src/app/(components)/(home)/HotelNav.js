import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
  const hotels = [
    {
      name: "Heritage Hotel",
      href: "/hotels/heritage-hotel",
      position: "top-[32%] left-[38%]",
    },
    {
      name: "Blue Waters Lake Resort",
      href: "/hotels/blue-waters",
      position: "top-[20%] left-[40%]",
    },
    {
      name: "Kambri Beach",
      href: "/hotels/kambiri-beach",
      position: "top-[52%] left-[35%]",
    },
    {
      name: "Kara O Mula",
      href: "/hotels/kara-o-mula",
      position: "top-[25%] left-[44%]",
    },
    {
      name: "Waters Edge",
      href: "/hotels/waters-edge",
      position: "top-[42%] left-[45%]",
    },
    {
      name: "Lotus Hotel",
      href: "/hotels/lotus-hotel",
      position: "top-[63%] left-[54%]",
    },
    {
      name: "Bamboo Boutique",
      href: "/hotels/bamboo-boutique",
      position: "top-[74%] left-[55%]",
    },
    {
      name: "Serendib Suite",
      href: "/hotels/serendib-travels",
      position: "top-[55%] left-[62%]",
    },
    
  ];
  return (
    <div>
      <div className="flex absolute inset-0">
        {hotels.map((hotel, index) => {
          const hotelName = hotel.name;
          return (
            <Link key={index} href={hotel.href}>
              <div
                className={`flex flex-row absolute right-0 gap-1 ${hotel.position}`}
              >
                <MapPin color="red" size={15}/>
                <h4 className="hover:text-orange-600 transition duration-300 text-[8px] sm:text-[12px] font-semibold">
                  {hotelName}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
