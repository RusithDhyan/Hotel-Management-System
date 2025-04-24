"use client";
import { Disc, Goal, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ExtendedStay() {
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
      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/hotels/heritage/offers/extend-stay/bg.jpg"
          alt="extended-stay-img"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl sm:text-4xl md:text-5xl text-white pb-6 text-center px-2">
          Extended Stay Offer
        </h1>
      </div>

      {/* Introduction */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-10 text-center">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Extended Stay Offer at Heritage Hotel
        </h1>
        <p className="text-sm sm:text-base font-light max-w-2xl">
          Settle in and save more with our Extended Stay Offer! Enjoy discounted
          rates, spacious accommodations, and home-like comforts for longer
          visits. Perfect for work, relocation, or a relaxing escape.
        </p>
      </div>

      {/* Offer Inclusions */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 px-4 sm:px-8 md:px-10">
        <Image
          src="/hotels/heritage/offers/extend-stay/bg-img.jpg"
          alt="extended-stay-img"
          width={600}
          height={400}
          className="w-full max-w-md h-auto object-cover"
        />
        <div className="flex flex-col items-start gap-2 w-full max-w-xl">
          <h1 className="text-xl sm:text-2xl font-semibold py-2">
            Offer Inclusions
          </h1>
          {offers.map((offer, index) => (
            <div key={index} className="flex items-start gap-2">
              <Goal size={18} />
              <h3 className="text-sm sm:text-base font-light">{offer.name}</h3>
            </div>
          ))}
          <Link href="/">
            <button className="relative group text-black py-2 px-3 mt-3 border-b-2 border-transparent hover:border-orange-600 transition">
              Book
              <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </Link>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="flex flex-col px-4 sm:px-8 md:px-10 mt-10 space-y-3">
        {accordion.map((acc, index) => (
          <div key={index} className="border overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-md sm:text-lg font-medium">{acc.title}</span>
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
                    <div key={index} className="flex items-start gap-2">
                      <Disc size={15} />
                      <p className="text-sm font-light">{item}</p>
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
