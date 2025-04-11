import React from "react";
import Image from "next/image";

function About() {
  const hotels = [
    {url:"/logo/blue.png",name:"Blue Waters Lake Resort"},
    {url:"/logo/Heritage.png",name:"Heritage Hotel"},
    {url:"/logo/Kambiri.png",name:"Kambri Beach"},
    {url:"/logo/Serendib-travels.png",name:"Serendib Tours"},
    {url:"/logo/Kara-o-Mula.png",name:"Kara O Mula"},
    {url:"/logo/Lotus.png",name:"Lotus Hotel"},
    {url:"/logo/Zaburi.png",name:"Zaburi Lake Resort"},
    {url:"/logo/Waters-Edge.png",name:"Waters Edge"},
    {url:"/logo/Bamboo.png",name:"Bamboo Boutique"},

  ]
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/about.jpg"
          alt=""
          width={1500}
          height={10}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          About
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">
          Welcome to Serendib Hotels – A Haven of Luxury and Comfort
        </h1>
        <p className="font-extralight">
          Nestled in the heart of breathtaking landscapes, Serendib Hotels
          offers a perfect blend of elegance, tranquility, and world-class
          hospitality. Whether you seek a peaceful retreat by the ocean, a
          rejuvenating spa experience, or an adventure-filled getaway, our
          hotels provide an unforgettable stay. From stunning beachfront resorts
          to cozy hillside retreats, every Serendib Hotel is designed to immerse
          you in luxury while embracing the rich culture and natural beauty of
          its surroundings. Indulge in our signature spa treatments, savor
          exquisite cuisine, and experience warm Sri Lankan hospitality that
          makes you feel at home. Come, unwind, and create timeless memories at
          Serendib Hotels – where every stay is a journey to serenity.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-30">
        <h1 className="text-2xl">Serendib Hotels</h1>
        <p className="font-extralight">
          ​Serendib Hotels & Resorts is a prominent hospitality brand in Malawi,
          offering a diverse collection of hotels and resorts that blend luxury
          with authentic African hospitality. Established in 2014, the group has
          expanded to become a leading name in Malawi's tourism sector
        </p>
        <div className="flex flex-row items-center justify-between px-10 gap-3 my-10"> 
        {hotels.map((hotel,index)=>(
           <div key={index} className="flex flex-col items-center justify-between px-2 gap-4 bg-gray-200">
                   <Image src={hotel.url} alt="about-img" width={1500} height={500} className="object-cover p-2 w-18 h-18"/>
            
           {/* <h3 className="text-center text-md">{hotel.name}</h3> */}
         </div>
        ))}
         
        </div>
      </div>
    </div>
  );
}

export default About;
