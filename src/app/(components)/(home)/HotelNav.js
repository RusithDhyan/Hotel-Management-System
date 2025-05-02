import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
  const hotels = [
    {
      name: "Heritage Hotel",
      href: "/hotels/heritage-hotel",
      position: "top-[28%] left-[35%]",
    },
    {
      name: "Blue Waters Lake Resort",
      href: "/hotels/blue-waters",
      position: "top-[10%] left-[38%]",
    },
    {
      name: "Kambri Beach",
      href: "/hotels/kambiri-beach",
      position: "top-[52%] left-[28%]",
    },
    {
      name: "Le Croissant",
      href: "/hotels/le-croissant",
      position: "top-[75%] left-[67%]",
    },
    {
      name: "Kara O Mula",
      href: "/hotels/kara-o-mula",
      position: "top-[20%] left-[42%]",
    },
    {
      name: "Waters Edge",
      href: "/hotels/waters-edge",
      position: "top-[42%] left-[45%]",
    },
    {
      name: "Lotus Hotel",
      href: "/hotels/lotus-hotel",
      position: "top-[63%] left-[68%]",
    },
    {
      name: "Bamboo Boutique",
      href: "/hotels/bamboo-boutique",
      position: "top-[82%] left-[55%]",
    },
    {
      name: "Zaburi Lake Resort ",
      href: "/hotels/zaburi-lake-resort",
      position: "top-[58%] left-[40%]",
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
                <MapPin color="red" size={20} />
                <h4 className="hover:text-orange-600 transition duration-300 text-[12px]">
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
