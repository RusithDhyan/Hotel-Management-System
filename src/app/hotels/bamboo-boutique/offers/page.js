import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlueWatersOffer() {
  const allOffers = [
    {
      url: "/hotels/bamboo-boutique/offers/weekend-gateway",
      title: "Weekend Gateway at Bamboo Boutique",
      image: "/hotels/heritage/offers/offer1.jpg",
      description:
        "Escape the city for a relaxing weekend and enjoy exclusive savings on your stay. Perfect for a quick recharge!",
    },
    {
      url: "/hotels/bamboo-boutique/offers/luxury-spa",
      title: "Luxury Spa Retreat at Bamboo Boutique",
      image: "/hotels/heritage/offers/offer2.jpg",
      description:
        "Indulge in a serene spa experience with our luxury retreat offer. Book in advance and pamper yourself for less.",
    },
    {
      url: "/hotels/bamboo-boutique/offers/early-bird",
      title: "Early Bird Offer at Bamboo Boutique",
      image: "/hotels/heritage/offers/offer3.jpg",
      description:
        "Plan ahead and save up to 20%! Secure your dream getaway by booking 90 days in advance.",
    },
    {
      url: "/hotels/bamboo-boutique/offers/extend-stay",
      title: "Extended Stay Discount at Bamboo Boutique",
      image: "/hotels/heritage/offers/offer4.jpg",
      description:
        "Make the most of your trip with our extended stay rates. Stay longer and enjoy more value with every extra night.",
    },
    {
      url: "/hotels/bamboo-boutique/offers/business",
      title: "Business Traveler Special at Bamboo Boutique",
      image: "/hotels/heritage/offers/offer5.jpg",
      description:
        "Tailored for busy professionals — enjoy comfort, convenience, and savings when you book your business trip early.",
    },
    {
      url: "/hotels/bamboo-boutique/offers/family-vacation",
      title: "Family Vacation Package at Bamboo Boutique",
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
          src="/hotels/offer-bg.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
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
          <div
            key={index}
            className="relative overflow-hidden shadow-md group bg-white"
          >
            {/* Image */}
            <Link href={offer.url}>
              <Image
                src={offer.image}
                alt={offer.title}
                width={1000}
                height={100}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* MOBILE VIEW (info always visible below image) */}
            <div className=" p-4">
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm font-light my-2">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
