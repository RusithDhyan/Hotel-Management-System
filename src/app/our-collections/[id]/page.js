// pages/hotels/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Accommodation from "@/app/(components)/(hotels)/Accommodation";
import OfferSlider from "@/app/(components)/(hotels)/OfferSlider";
import Experience from "@/app/(components)/(hotels)/Experience";
import Gallery from "@/app/(components)/(hotels)/Gallery";
import InquiryForm from "@/app/(components)/(experience)/InquiryForm";

export default function HotelInnerPage() {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await fetch(`/api/hotels/${id}`);
      const data = await res.json();
      setHotel(data);
    };
    if (id) fetchHotel();
  },[]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src={hotel.image}
          alt="Hotel banner"
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          {hotel.title}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center p-5 md:p-10 gap-6">
              <Image
                src={hotel.image}
                alt="blue-waters-img1"
                width={1500}
                height={100}
                className="w-full sm:w-1/3 h-80 object-cover"
              />
      
              <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left md:w-1/2">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Where Lake Dreams Begin Serenity by the Shoreline of Salima
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Nestled along the serene shores of Lake Malawi, Blue Waters Lake
                  Resort offers a tranquil escape with rustic luxury. Guests can enjoy
                  lakeview accommodations, a tranquil waterside pool, and exceptional
                  event spaces accommodating up to 300 guests. The resort's "Pier
                  Deck" and "Rain Tree" restaurants are renowned for their culinary
                  delights, enhancing every occasion.
                </p>
              </div>
            </div>

      <Accommodation hotelId={hotel._id} />
      
      <h1 className="text-2xl sm:text-3xl text-center mt-10">
        Experience in {hotel.title}
      </h1>

      <Experience hotelId={hotel._id}/>
      <Gallery />
      {/* <OfferSlider nav={`/hotels/${id}/offers`} /> */}
      <OfferSlider hotelId={hotel._id}/>
      <InquiryForm />
    </div>
  );
}
