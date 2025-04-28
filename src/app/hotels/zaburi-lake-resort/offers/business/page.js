"use client";
import { Disc, Goal, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Business() {
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
          src="/hotels/heritage/offers/business/bg.jpg"
          alt="business-img"
          width={1500}
          height={100}
          className="h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4">
          Business Offer
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10">
        <h1 className="text-2xl text-center sm:text-left">Business Offer at Zaburi Lake Resort</h1>
        <p className="font-extralight text-center sm:text-left">
          Stay productive on the go with our exclusive Business Offer – enjoy
          comfortable stays, high-speed Wi-Fi, meeting facilities, and flexible
          check-ins. Designed to keep you focused and refreshed during every
          trip!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 px-4 sm:px-10">
        <Image
          src="/hotels/heritage/offers/business/bg-img.jpg"
          alt="business-img"
          width={1000}
          height={100}
          className="w-full sm:w-130 h-auto object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-1 mt-6 sm:mt-0">
          <h1 className="text-2xl py-2">Offer Inclusions</h1>
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-2">
              <Goal size={15} />
              <h3 className="text-sm font-light">{offer.name}</h3>
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
      <div className="flex flex-col px-4 sm:px-10 mt-10 space-y-2">
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
                <div className="flex flex-col items-start gap-2 justify-center">
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
