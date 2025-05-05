import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCollection() {
  const hotels = [
    {
      id: 1,
      nav: "blue-waters",
      image: "/hotels/h1.jpeg",
      title: "Blue Waters Lake Resort",
      location: "Senga Bay,Salima",
      description:
        "Enjoy breathtaking sunsets over Lake Malawi in ultimate luxury.",
    },
    {
      id: 2,
      nav: "le-croissant",
      image: "/hotels/h14.jpg",
      title: "Le Croissant",
      location: "Limbe,Blantyre",
      description:
        "A tranquil escape nestled in the highlands, perfect for relaxation.",
    },
    {
      id: 3,
      nav: "heritage-hotel",
      image: "/hotels/h3.jpeg",
      title: "Heritage Hotel",
      location: "Milward Road, Limbe, Blantyre, Malawi",
      description:
        "Experience the charm of historic tea plantations in a cozy setting.",
    },
    {
      id: 4,
      nav: "kambiri-beach",
      image: "/hotels/h4.jpeg",
      title: "Kambiri Beach",
      location: "Senga Bay,Salima",
      description:
        "Step onto pristine sands and embrace the soothing waves of the lake.",
    },
    {
      id: 5,
      nav: "kara-o-mula",
      image: "/hotels/h12.jpg",
      title: "Kara O Mula",
      location: "Boma Path – Bush, Mulanje, Malawi",
      description:
        "Get up close with wildlife while staying in a luxurious safari retreat.",
    },
    {
      id: 6,
      nav: "lotus-hotel",
      image: "/hotels/h11.jpg",
      title: "Lotus Hotel",
      location: "Glyn Jones Road, Namiwawa Avenue, Blantyre, Malawi",
      description:
        "A modern hotel in the heart of Malawi’s vibrant capital city.",
    },
    {
      id: 7,
      nav: "zaburi-lake-resort",
      image: "/hotels/h15.jpg",
      title: "Zaburi Lake Resort",
      location: "Bolera Village, Mangochi, Malawi",
      description: "Discover secluded island beauty with crystal-clear waters.",
    },
    {
      id: 8,
      nav: "waters-edge",
      image: "/hotels/h8.jpg",
      title: "Waters Edge",
      location: "Liwonde, Malawi",
      description: "Immerse yourself in lush greenery and exotic wildlife.",
    },
    {
      id: 9,
      nav: "bamboo-boutique",
      image: "/hotels/h9.jpg",
      title: "Bamboo Boutique",
      location: "Mdoka Street, Area 12, Lilongwe, Malawi",
      description: "Stay in a beautifully restored colonial-era residence.",
    },
    {
      id: 10,
      nav: "serendib-travels",
      image: "/hotels/h10.jpg",
      title: "Serendib Travels",
      location: "Off Chilomoni Ring Road, Namiwawa, Blantyre, Malawi",
      description:
        "Nestled in the tranquil Namiwawa neighborhood of Blantyre, Serendib Suites & Conference Center offers a harmonious blend of comfort and convenience.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-auto">
        <Image
          src="/images/our-collection.jpg"
          alt=""
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          Our Collection
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-5 text-center">
        <h1 className="text-xl md:text-2xl">
          Discover Our Exclusive Hotel Collection
        </h1>
        <p className="font-extralight">
          Experience a seamless blend of luxury, nature, and Malawian
          hospitality in our carefully curated boutique hotels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5 mt-10 px-5">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white shadow-md overflow-hidden">
            <Link href={`/hotels/${hotel.nav}`}>
              <Image
                src={hotel.image}
                alt={hotel.title}
                width={600}
                height={400}
                className="w-full h-50 sm:h-70 object-cover"
              />
            </Link>
            <div className="p-1">
              <h2 className="text-lg font-semibold">{hotel.title}</h2>
              <h3 className="text-gray-600 text-sm">{hotel.location}</h3>
              <p className="text-sm mt-2">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
