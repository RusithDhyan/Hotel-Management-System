import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurCollection() {
  const hotels = [
    {
      id: 1,
      nav:"blue-waters",
      image: "/hotels/h1.jpeg",
      title: "Blue Waters Lake Resort",
      location:"Senga Bay,Salima",
      description: "Enjoy breathtaking sunsets over Lake Malawi in ultimate luxury.",
    },
    {
      id: 2,
      nav:"le-croissant",
      image: "/hotels/h14.jpg",
      title: "Le Croissant",
      location:"Limbe,Blantyre",
      description: "A tranquil escape nestled in the highlands, perfect for relaxation.",
    },
    {
      id: 3,
      nav:"heritage-hotel",
      image: "/hotels/h3.jpeg",
      title: "Heritage Hotel",
      location:"Milward Road, Limbe, Blantyre, Malawi",
      description: "Experience the charm of historic tea plantations in a cozy setting.",
    },
    {
      id: 4,
      nav:"kambiri-beach",
      image: "/hotels/h4.jpeg",
      title: "Kambiri Beach",
      location:"Senga Bay,Salima",
      description: "Step onto pristine sands and embrace the soothing waves of the lake.",
    },
    {
      id: 5,
      nav:"kara-o-mula",
      image: "/hotels/h12.jpg",
      title: "Kara O Mula",
      location:"Boma Path – Bush, Mulanje, Malawi",
      description: "Get up close with wildlife while staying in a luxurious safari retreat.",
    },
    {
      id: 6,
      nav:"lotus-hotel",
      image: "/hotels/h11.jpg",
      title: "Lotus Hotel",
      location:"Glyn Jones Road, Namiwawa Avenue, Blantyre, Malawi",
      description: "A modern hotel in the heart of Malawi’s vibrant capital city.",
    },
    {
      id: 7,
      nav:"zaburi-lake-resort",
      image: "/hotels/h10.jpg",
      title: "Zaburi Lake Resort",
      location:"Bolera Village, Mangochi, Malawi",
      description: "Discover secluded island beauty with crystal-clear waters.",
    },
    {
      id: 8,
      nav:"waters-edge",
      image: "/hotels/h8.jpg",
      title: "Waters Edge",
      location:"Liwonde, Malawi",
      description: "Immerse yourself in lush greenery and exotic wildlife.",
    },
    {
      id: 9,
      nav:"bamboo-boutique",
      image: "/hotels/h9.jpg",
      title: "Bamboo Boutique",
      location:"Mdoka Street, Area 12, Lilongwe, Malawi",
      description: "Stay in a beautifully restored colonial-era residence.",
    }
   
  ];

  const items = [
    { url: "/icons/item1.png", title: "Deals You'll Love" },
    { url: "/icons/item2.png", title: "24/7 Call Suport" },
    { url: "/icons/item3.png", title: "Top Hotel Selection" },
    { url: "/icons/item4.png", title: "Easy & Secure" },
    { url: "/icons/item5.png", title: "Travel Sentiments" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
       <Image
          src="/images/our-collection.jpg"
          alt=""
          width={1500}
          height={10}
          className="h-100 w-full object-cover"
        />
       
        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Our Collection
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">Discover Our Exclusive Hotel Collection</h1>
        <p className="font-extralight">
          Experience a seamless blend of luxury, nature, and Malawian
          hospitality in our carefully curated boutique hotels.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-xl">Your Ideal Choice for Comfort & Luxury</h1>
        <div className="border-y flex flex-row items-center justify-center gap-5 p-2 w-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full w-20 h-20 flex flex-row items-center justify-center">
                
                <Image
                  src={item.url}
                  alt="images"
                  width={1500}
                  height={100}
                  className="w-10"
                />
              </div>
              <h2 className="text-sm">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-lg overflow-hidden"
          >
            <Link href={`/hotels/${hotel.nav}`}>
            <Image
              src={hotel.image}
              alt={hotel.title}
              width={600}
              height={400}
              className="w-full h-70 object-cover"
            />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.title}</h2>
              <h3 className="text-gray-600">{hotel.location}</h3>
              <p className=" mt-2">{hotel.description}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
