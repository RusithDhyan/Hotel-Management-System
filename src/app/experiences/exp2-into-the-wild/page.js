import Image from "next/image";
import React from "react";

export default function Experience3() {
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
        <h3 className="text-sm">15/08/2024</h3>
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

      {/* Slide Card Section */}
      <div className="flex justify-center items-center relative mt-10 pb-10">
        <Image
          src="/experience/exp2-into-wild/exp-bg2.jpg"
          alt="exp-img"
          width={1500}
          height={100}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 px-4 sm:px-10 flex items-end justify-end">
          <div className="relative w-full sm:w-100 h-50 overflow-hidden group">
            {/* Desktop View (Hover Effect) */}
            <div className="hidden sm:flex">
              {/* Front Card */}
              <div className="absolute inset-0 flex justify-center items-center bg-gray-300 text-black text-xl transition-all duration-500 group-hover:opacity-0">
              A Hidden Gem of Malawi
              </div>

              {/* Slide-In Card */}
              <div className="absolute inset-0 flex flex-col p-2 items-center justify-start bg-white opacity-0 transition-all duration-500 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
                <p className="text-sm">
                  Majete Wildlife Reserve offers an intimate safari experience
                  with the chance to see the "Big Five" in a peaceful setting.
                  Once restored, the reserve now boasts rich wildlife and
                  stunning landscapes, perfect for game drives and walking
                  safaris.
                </p>
              </div>
            </div>

            {/* Mobile View (Static Stacked View) */}
            <div className="flex flex-col sm:hidden bg-white bg-opacity-90 p-4 text-sm">
              <div className="text-black font-semibold mb-2">
                A Hidden Gem of Malawi
              </div>
              <p>
                Majete Wildlife Reserve offers an intimate safari experience
                with the chance to see the "Big Five" in a peaceful setting.
                Once restored, the reserve now boasts rich wildlife and stunning
                landscapes, perfect for game drives and walking safaris.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card Section */}
      <div className="flex flex-col md:flex-row items-center mt-10 px-4 sm:px-10 gap-5">
        <Image
          src="/experience/exp2-into-wild/exp.jpeg"
          alt="card-image2"
          width={1500}
          height={100}
          className="w-full md:w-1/2 h-auto"
        />
        <div className="flex flex-col items-start gap-2 text-sm md:text-base">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
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
