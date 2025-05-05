import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlueWatersOffer() {
  const allOffers = [
    {
      url: "/hotels/blue-waters/offers/weekend-gateway",
      title: "Weekend Gateway at Blue Waters",
      image: "/hotels/heritage/offers/offer1.jpg",
      description:
        "Escape the city for a relaxing weekend and enjoy exclusive savings on your stay. Perfect for a quick recharge!",
    },
    {
      url: "/hotels/blue-waters/offers/luxury-spa",
      title: "Luxury Spa Retreat at Blue Waters",
      image: "/hotels/heritage/offers/offer2.jpg",
      description:
        "Indulge in a serene spa experience with our luxury retreat offer. Book in advance and pamper yourself for less.",
    },
    {
      url: "/hotels/blue-waters/offers/early-bird",
      title: "Early Bird Offer at Blue Waters",
      image: "/hotels/heritage/offers/offer3.jpg",
      description:
        "Plan ahead and save up to 20%! Secure your dream getaway by booking 90 days in advance.",
    },
    {
      url: "/hotels/blue-waters/offers/extend-stay",
      title: "Extended Stay Discount at Blue Waters",
      image: "/hotels/heritage/offers/offer4.jpg",
      description:
        "Make the most of your trip with our extended stay rates. Stay longer and enjoy more value with every extra night.",
    },
    {
      url: "/hotels/blue-waters/offers/business",
      title: "Business Traveler Special at Blue Waters",
      image: "/hotels/heritage/offers/offer5.jpg",
      description:
        "Tailored for busy professionals — enjoy comfort, convenience, and savings when you book your business trip early.",
    },
    {
      url: "/hotels/blue-waters/offers/family-vacation",
      title: "Family Vacation Package at Blue Waters",
      image: "/hotels/heritage/offers/offer6.jpg",
      description:
        "Create unforgettable family memories with our special package. Great rates, spacious rooms, and fun for all ages!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Image with title */}
      <div className="w-full h-auto relative">
        <Image
          src="/hotels/blue-waters/offers/offer-home.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          All Bamboo Boutique Offers
        </h1>
      </div>

      {/* Intro Text */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-6 sm:px-12 md:px-20 text-center">
        <h1 className="text-xl sm:text-2xl">
          Unbeatable Hotel Offers Just for You!
        </h1>
        <p className="font-extralight text-sm sm:text-base">
          Enjoy a luxurious stay at unbeatable prices with our exclusive hotel
          offers! Whether you're planning a romantic getaway, a family vacation,
          or a quick business trip, we have special deals tailored for every
          traveler.
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {allOffers.map((offer, index) => (
          <div key={index} className="relative overflow-hidden shadow-md group bg-white">
            {/* Image */}
            <Image
              src={offer.image}
              alt={offer.title}
              width={1000}
              height={100}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* MOBILE VIEW (info always visible below image) */}
            <div className="md:hidden p-4">
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm font-light my-2">{offer.description}</p>
              <Link
                href={offer.url}
                className="text-[#FF741E] text-sm font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>

            {/* DESKTOP VIEW (hover slide-in detail) */}
            <div className="hidden md:flex absolute inset-0 flex-col p-4 bg-white/60 backdrop-blur-sm translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm font-light my-2">{offer.description}</p>
              <Link
                href={offer.url}
                className="text-gray-500 font-semibold hover:text-[#FF741E] duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
