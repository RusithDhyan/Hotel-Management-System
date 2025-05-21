// pages/hotels/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import Accommodation from "@/app/(components)/(hotels)/(heritage)/Accommodation";
import Experience from "@/app/(components)/(hotels)/(heritage)/Experience";
import Gallery from "@/app/(components)/(hotels)/(heritage)/Gallery";
import InquiryForm from "@/app/(components)/(hotels)/(heritage)/InquiryForm";
import OfferSlider from "@/app/(components)/(hotels)/(heritage)/OfferSlider";
import Image from "next/image";
import { useParams } from "next/navigation";

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
  }, [id]);

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

      <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-10 gap-5">
       
        <div className="flex flex-col items-center justify-center gap-4 md:w-200 px-2">
          <p className="text-sm sm:text-base">
            {hotel.description}
          </p>
        </div>
      </div>

      <Accommodation hotelId={hotel._id} />

      <Experience />
      <Gallery />
      <OfferSlider nav={`/hotels/${id}/offers`} />
      <InquiryForm />
    </div>
  );
}
