import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const fvOffers = [
    {
      url: "/hotels/blue-waters/offers/family-vacation",
      title: "Family Vacation Offer at Blue Waters Lake Resort",
      image: "/offers/family-vacation/fv1.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
   
    {
      url: "/hotels/heritage-hotel/offers/family-vacation",
      title: "Family Vacation Offer at Heritage Hotel",
      image: "/offers/family-vacation/fv3.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kambiri-beach/offers/family-vacation",
      title: "Family Vacation Offer at Kambiri Beach",
      image: "/offers/family-vacation/fv4.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/kara-o-mula/offers/family-vacation",
      title: "Family Vacation Offer at Kara O Mula",
      image: "/offers/family-vacation/fv5.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/lotus-hotel/offers/family-vacation",
      title: "Family Vacation Offer at Lotus Hotel",
      image: "/offers/family-vacation/fv6.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    
    {
      url: "/hotels/waters-edge/offers/family-vacation",
      title: "Family Vacation Offer at Waters Edge",
      image: "/offers/family-vacation/fv8.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
    {
      url: "/hotels/bamboo-boutique/offers/family-vacation",
      title: "Family Vacation Offer at Bamboo Boutique",
      image: "/offers/family-vacation/fv9.jpeg",
      description:
        "Save up to 20% when you book 90 days (or more) prior to the date of arrival",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/offers/family-vacation/fv-img.jpg"
          alt="early-bird-img"
          width={1500}
          height={100}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Family Vacation Offer
        </h1>
      </div>

      {/* Description Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          Plan ahead and enjoy more for less
        </h1>
        <p className="font-extralight text-center text-sm sm:text-base">
          Create unforgettable memories with your loved ones through our Family
          Vacation Offer. Enjoy special family-friendly rates, complimentary
          meals for kids, and fun activities for all ages. Book your stay in
          advance and make the most of quality time together across all Serendib
          Collection properties. Offer valid until 30th April 2026.
        </p>
      </div>

      {/* Offer Cards Section */}
      <div className="mt-10 w-full px-4">
        {/* Mobile Vertical Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
          {fvOffers.map((fv, index) => (
            <div
              key={index}
              className="w-full relative shadow-md group transition-transform duration-300"
            >
              <Image
                src={fv.image}
                alt={fv.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-2 bg-white bg-opacity-80 backdrop-blur-md rounded-b-md">
                <h2 className="font-semibold text-md mb-1">{fv.title}</h2>
                <p className="text-sm font-light">{fv.description}</p>
                <Link
                  href={fv.url}
                  className="text-gray-400 hover:text-[#FF741E] duration-300 font-semibold text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
