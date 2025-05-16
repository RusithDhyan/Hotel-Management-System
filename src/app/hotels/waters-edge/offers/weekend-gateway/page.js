import InquiryForm from "@/app/(components)/(offer)/InquiryForm";
import {Goal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WeekendGateway() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/heritage/offers/weekend-gateway/bg.jpg"
          alt="weekend-gateway-img"
          width={1500}
          height={100}
          className="h-[300px] sm:h-[400px] object-cover"
        />

        <h1 className="absolute inset-0 flex items-end justify-center text-3xl sm:text-5xl text-white pb-4 px-4">
          Weekend Gateway Offer
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-5 px-5 sm:px-10">
        <h1 className="text-xl sm:text-2xl text-center">Weekend Gateway Offer at Waters Edge</h1>
        <p className="font-extralight text-sm sm:text-base text-center sm:text-left px-3">
          Escape the routine and unwind in style! Enjoy a perfect weekend
          retreat with luxurious stays, delicious meals, and serene
          surroundings. Book now for a refreshing escape you deserve!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 px-5 sm:px-10">
        <div className="w-full sm:w-1/2">
          <Image
            src="/hotels/heritage/offers/weekend-gateway/bg-img.jpg"
            alt="weekend-gateway-img"
            width={1000}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 sm:w-1/2">
          <h1 className="text-xl sm:text-2xl py-2">Offer Inclusions</h1>
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-2">
              <Goal size={15} />
              <h3 className="text-sm sm:text-base font-light">{offer.name}</h3>
            </div>
          ))}
          <Link href="/">
            <button className="relative group text-black py-1 px-2 border-transparent mt-4">
              Book
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
      <InquiryForm/>
    </div>
  );
}
