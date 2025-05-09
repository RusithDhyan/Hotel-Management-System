"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/experience/exp2-into-wild/exp1.jpeg",
  "/experience/exp2-into-wild/exp2.jpeg",
  "/experience/exp2-into-wild/exp3.jpg",
  "/experience/exp2-into-wild/exp4.jpeg",
  "/experience/exp2-into-wild/exp5.jpeg",
  "/experience/exp2-into-wild/exp6.jpeg",
  "/experience/exp2-into-wild/exp7.jpeg",
];

export default function Experience2() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full h-auto relative">
        <Image
          src="/experience/exp2-into-wild/exp-bg1.jpg"
          alt="contact-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-xl sm:text-2xl text-center">
          Discovering Malawi: Africa’s Hidden Wild Paradise
        </h1>
        <p className="font-light text-sm sm:text-base text-justify">
          Embark on an exhilarating adventure into the heart of Malawi, where
          nature’s raw beauty flourishes. From the dense forests to the
          expansive savannah, Malawi offers a wilderness experience like no
          other. Visitors can explore national parks like Liwonde, renowned for
          its diverse wildlife, or hike through the dramatic landscapes of Nyika
          Plateau. Expect to encounter elephants, lions, and countless bird
          species, all while immersing yourself in the untamed rhythms of
          Africa. The experience is a perfect blend of adrenaline and
          tranquility, where the wilderness is both a challenge and a sanctuary.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src={images[current]}
            alt="Exp"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            A Journey Through Malawi's Untamed Wilderness
          </h1>
          <p>
            Malawi’s wild side is waiting to be discovered. Whether you’re
            kayaking on Lake Malawi or exploring the vast expanse of its
            national parks, the experience is a testament to Africa’s diverse
            ecosystems. This pristine land offers thrilling safaris, serene lake
            views, and a glimpse into the untouched beauty of nature. Traverse
            through the remote wilds of Majete Wildlife Reserve or take a guided
            walking tour to connect with the land and its inhabitants. For those
            seeking an immersive wilderness adventure, Malawi’s untouched
            landscapes provide the perfect backdrop.
          </p>
        </div>
      </div>
    </div>
  );
}
