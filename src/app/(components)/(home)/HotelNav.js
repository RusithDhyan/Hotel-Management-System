import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HotelNav() {
    const hotels = [
        { name: "Heritage Hotel", href: "/our-collections/", position: "top-[35%] left-[30%]" },
        { name: "Blue Waters Lake Resort", href: "", position: "top-[15%] left-[40%]" },
        { name: "Kambri Beach", href: "", position: "top-[50%] left-[18%]" },
        { name: "Le Oroissant", href: "", position: "top-[70%] left-[55%]" },
        { name: "Kara O Mula", href: "", position: "top-[25%] left-[35%]" },
        { name: "Waters Edge", href: "", position: "top-[5%] left-[35%]" },
        { name: "Lotus Hotel", href: "", position: "top-[55%] left-[50%]" },
        { name: "Bamboo Boutique", href: "", position: "top-[80%] left-[48%]" },
        { name: "Zaburi Lake Resort ", href: "", position: "top-[60%] left-[50%]" },


    ]
  return (
    <div>
      <div className="flex absolute inset-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-90">
        
          
              {hotels.map((hotel,index)=>{
                return(
                <Link key={index} href={hotel.href}>
                <div className={`flex flex-row absolute gap-1 transition duration-500 ${hotel.position}`}>
                  <MapPin color="red" />
                  <h4 className="">{hotel.name}</h4>

                  </div>
                  </Link>
                )
              })}
           
        
      </div>
    </div>
  );
}
