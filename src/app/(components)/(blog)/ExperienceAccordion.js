"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2 py-10">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border-t">
              <div className="flex flex-row items-center gap-2 justify-center">
                <Image
                  src={`${item.url}`}
                  alt="accordion-img"
                  width={1000}
                  height={100}
                  className="w-50 h-50 object-cover"
                />
                <div className="flex flex-col items-start">
                  {item.content}
                  <Link href={`${item.nav}`} className=" text-sm pt-1">
                    <button className="relative group text-gray-500 py-1">
                      View more
                      <span className="absolute left-0 bottom-0 w-10 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceAccordion;
