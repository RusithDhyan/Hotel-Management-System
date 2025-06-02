// pages/hotels/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Accommodation from "@/app/(components)/(hotels)/Accommodation";
import OfferSlider from "@/app/(components)/(hotels)/OfferSlider";
import Experience from "@/app/(components)/(hotels)/Experience";
import Gallery from "@/app/(components)/(hotels)/Gallery";
import InquiryForm from "@/app/(components)/(hotels)/InquiryForm";

const items = [
  { url: "/icons/hotels/bed-single.png", title: "Modern & Spacious Rooms" },
  { url: "/icons/hotels/leaf.png", title: "Wellness & Spa Services" },
  { url: "/icons/hotels/coffee.png", title: "Evening Tea & Coffee" },
  { url: "/icons/hotels/wine.png", title: "Mini Bar" },
];

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
  }, []);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src={hotel.thumbnail}
          alt="Hotel banner"
          width={1500}
          height={100}
          className="object-cover h-100 sm:max-h-screen w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl text-white pb-4 font-bold px-4">
          {hotel.hotel_name}
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
            {hotel.title}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            {hotel.description}
          </p>
        </div>
      </div>

      <Accommodation hotelId={hotel._id} />

      <h1 className="text-2xl sm:text-3xl text-center mt-10">
        Experience in {hotel.hotel_name}
      </h1>

      <Experience hotelId={hotel._id} />
      <div className="flex flex-col items-center gap-5 mt-20 px-4">
        <h1 className="text-xl md:text-3xl text-gray-500">
          Services & Facilities
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5 w-full max-w-6xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-10 w-36 md:w-auto text-center border-r-2 last:border-0"
            >
              <Image
                src={item.url}
                alt="images"
                width={50}
                height={50}
                className="w-10 md:w-12"
              />
              <h2 className="text-xs md:text-sm mt-3">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Gallery hotelId={hotel._id} />
      {/* <OfferSlider nav={`/hotels/${id}/offers`} /> */}
      <OfferSlider hotelId={hotel._id} />
      <InquiryForm />
    </div>
  );
}
