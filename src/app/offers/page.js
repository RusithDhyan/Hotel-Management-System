import Image from "next/image";
import React from "react";
import OfferGrid from "../(components)/(offer)/OfferGrid";

export default function Offers() {
  const offers = [
    {
      image: "/offers/offer1.jpg",
      title: "Weekend Getaway Package",
      url: "/offers/weekend-getaway",
    },
    {
      image: "/offers/offer2.jpg",
      title: "Early Bird Offer",
      url: "/offers/early-bird",
    },
    {
      image: "/offers/offer3.jpeg",
      title: "Luxury Spa Retreat",
      url: "/offers/spa-retreat",
    },
    { image: "/offers/offer4.jpg", title: "Extended Stay Discount", url: "" },
    {
      image: "/offers/offer5.jpg",
      title: "Business Traveler Special",
      url: "",
    },
    { image: "/offers/offer6.jpeg", title: "Family Vacation Package", url: "" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/images/offer.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Offers
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10 md:px-20 lg:px-30">
        <h1 className="text-xl sm:text-2xl text-center">
          Exclusive Deals & Luxurious Offers
        </h1>
        <p className="font-extralight text-center text-sm sm:text-base">
          Discover unbeatable deals and exclusive packages tailored for a
          luxurious stay. Indulge in comfort and elegance at the best value.
        </p>
      </div>

      <OfferGrid offers={offers} />
    </div>
  );
}
