import React from "react";
import Image from "next/image";

function About() {
  const data=[
    {name:"Email",value:"contact@serendib.com"},
    {name:"Phone",value:"+265 123 456 789"},
    {name:"Location",value: "Blantyre, Malawi"},
    {name:"Open Hours",value:"8.00am to 22.00pm"},

  ]
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-full h-auto relative">
        <Image
          src="/images/contact.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="w-full h-100 object-cover"
        />
        <h1 className="absolute inset-0 flex items-end justify-center text-5xl text-white pb-4">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-50">
        <h1 className="text-2xl">
          Contact Serendib Hotels – We're Here to Assist You!
        </h1>
        <p className="font-extralight">
          Have questions or need assistance with bookings? Get in touch with
          Serendib Hotels for reservations, inquiries, or special requests. Our
          team is ready to make your stay unforgettable.
        </p>
      </div>

      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/images/contact1.jpg"
          alt="contact-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-10 flex items-end">
          <div className="relative w-80 h-60 overflow-hidden group">
            {/* Front Card (Visible by Default) */}
            <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-2xl transition-all duration-500 group-hover:opacity-0">
              Reservations
            </div>

            {/* Hidden Details (Slide In from Left on Hover) */}
            <div className="absolute inset-0 flex flex-col p-3 bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              {data.map((data,index)=>(
                <div key={index} className="flex flex-row items-center gap-2">
                <h1>{data.name} :</h1>
                <h2>{data.value}</h2>
              </div>
              ))}

              <h1 className="text-center text-xl font-semibold mt-5 border-t">Our Address</h1>
              <h2>Magasa Avenue,<br/> Off Chilomoni Ring Road,<br/> Namiwawa,Blantyre,Malawi</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default About;
