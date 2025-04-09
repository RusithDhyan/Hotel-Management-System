import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
    const hotels = [
        { name: "Heritage Hotel", href: "/hotels/heritage-hotel", position: "top-[35%] left-[40%]" },
        { name: "Blue Waters Lake Resort", href: "/hotels/blue-waters", position: "top-[16%] left-[25%]" },
        { name: "Kambri Beach", href: "/hotels/kambiri-beach", position: "top-[40%] left-[18%]" },
        { name: "Le Oroissant", href: "/hotels/le-oroissant", position: "top-[70%] left-[55%]" },
        { name: "Kara O Mula", href: "/hotels/kara-o-mula", position: "top-[25%] left-[35%]" },
        { name: "Waters Edge", href: "/hotels/waters-edge", position: "top-[3%] left-[28%]" },
        { name: "Lotus Hotel", href: "/hotels/lotus-hotel", position: "top-[48%] left-[30%]" },
        { name: "Bamboo Boutique", href: "/hotels/bamboo-boutique", position: "top-[80%] left-[50%]" },
        { name: "Zaburi Lake Resort ", href: "/hotels/zaburi-lake-resort", position: "top-[60%] left-[30%]" },


    ]
  return (
    <div>
      <div className="flex absolute inset-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-90">
        
          
              {hotels.map((hotel,index)=>{
                const hotelName = hotel.name
                return(
                <Link key={index} href={hotel.href}>
                <div className={`flex flex-row absolute right-0 gap-1 ${hotel.position}`}>
                  <MapPin color="red" />
                  <h5 className="hover:text-orange-600 transition duration-300 text-[14px]">{hotelName}</h5>

                  </div>
                 
                  </Link>
                )
              })}
           
        
      </div>
    </div>
  );
}
