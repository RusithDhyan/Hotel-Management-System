import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav({ show }) {
  const hotels = [
    { name: "Heritage Hotel", href: "/hotels/heritage-hotel", position: "top-[38%] left-[42%]" },
    { name: "Blue Waters Lake Resort", href: "/hotels/blue-waters", position: "top-[16%] left-[28%]" },
    { name: "Kambri Beach", href: "/hotels/kambiri-beach", position: "top-[50%] left-[18%]" },
    { name: "Le Oroissant", href: "/hotels/le-oroissant", position: "top-[70%] left-[75%]" },
    { name: "Kara O Mula", href: "/hotels/kara-o-mula", position: "top-[25%] left-[45%]" },
    { name: "Waters Edge", href: "/hotels/waters-edge", position: "top-[3%] left-[38%]" },
    { name: "Lotus Hotel", href: "/hotels/lotus-hotel", position: "top-[60%] left-[72%]" },
    { name: "Bamboo Boutique", href: "/hotels/bamboo-boutique", position: "top-[80%] left-[70%]" },
    { name: "Zaburi Lake Resort ", href: "/hotels/zaburi-lake-resort", position: "top-[63%] left-[30%]" },
  ];

  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      {hotels.map((hotel, index) => (
        <Link key={index} href={hotel.href}>
          <div className={`flex flex-row absolute gap-1 ${hotel.position}`}>
            <MapPin color="red" />
            <h4 className="hover:text-orange-600 transition duration-300 text-[14px]">
              {hotel.name}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
