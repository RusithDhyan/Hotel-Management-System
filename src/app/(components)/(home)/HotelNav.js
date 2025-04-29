import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
    const hotels = [
        { name: "Heritage Hotel", href: "/hotels/heritage-hotel", position: "top-[30%] left-[38%]" },
        { name: "Blue Waters Lake Resort", href: "/hotels/blue-waters", position: "top-[20%] left-[36%]" },
        { name: "Kambri Beach", href: "/hotels/kambiri-beach", position: "top-[45%] left-[32%]" },
        { name: "Le Croissant", href: "/hotels/le-croissant", position: "top-[70%] left-[60%]" },
        { name: "Kara O Mula", href: "/hotels/kara-o-mula", position: "top-[25%] left-[45%]" },
        { name: "Waters Edge", href: "/hotels/waters-edge", position: "top-[35%] left-[42%]" },
        { name: "Lotus Hotel", href: "/hotels/lotus-hotel", position: "top-[60%] left-[65%]" },
        { name: "Bamboo Boutique", href: "/hotels/bamboo-boutique", position: "top-[75%] left-[60%]" },
        { name: "Zaburi Lake Resort ", href: "/hotels/zaburi-lake-resort", position: "top-[54%] left-[47%]" },


    ]
  return (
    <div>
      <div className="flex absolute inset-0">
        
          
              {hotels.map((hotel,index)=>{
                const hotelName = hotel.name
                return(
                <Link key={index} href={hotel.href}>
                <div className={`flex flex-row absolute right-0 gap-1 ${hotel.position}`}>
                  <MapPin color="red" size={20}/>
                  <h4 className="hover:text-orange-600 transition duration-300 text-[12px]">{hotelName}</h4>

                  </div>
                 
                  </Link>
                )
              })}
           
        
      </div>
    </div>
  );
}
