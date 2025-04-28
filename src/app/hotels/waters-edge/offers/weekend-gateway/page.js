"use client";
import { Disc, Goal, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function WeekendGateway() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordion = [
    {
      title: "Terms & Conditions",
      content: [
        "This offer is valid for stays until 30th April 2026",
        "This offer is not valid from 20th December 2025 – 10th January 2026",
        "Valid on USD rates only, for single or double-sharing basis",
        "Additional guest charges will apply",
        "Offer cannot be combined with any other offers",
      ],
    },
    {
      title: "Cancellation Policy",
      content: [
        "No cancellation charge for reservations (less than 3 rooms) cancelled more than 30 days prior to the check-in date. Payments collected prior to this date will be refunded less bank charges",
        "1 night’s cancellation charge per room for reservations (less than 3 rooms) cancelled 29-14 days prior to the check-in date. Refundable payments (if applicable) collected prior to this date will be refunded less bank charges",
        "Full cancellation charge for reservations (less than 3 rooms) cancelled less than 13 days prior to the check-in date",
      ],
    },
  ];
  const offers = [
    { name: "20% off for stays between 1st May to 19th June 2025" },
    { name: "10% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "50% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
    { name: "20% off for stays between 1st May to 19th December 2025" },
  ];

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
      <div className="flex flex-col px-5 sm:px-10 mt-10 space-y-3">
        {accordion.map((acc, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-lg font-semibold">{acc.title}</span>
              <LayoutList
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t">
                <div className="flex flex-col items-start gap-2">
                  {acc.content.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Disc size={15} />
                      <h3 className="text-sm font-light">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
