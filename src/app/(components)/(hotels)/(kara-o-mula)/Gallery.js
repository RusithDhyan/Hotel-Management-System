"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const images = [
  { image: "/hotels/kara-o-mula/gallery/gallery-img1.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img2.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img3.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img4.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img5.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img6.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img7.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img8.jpeg" },
  { image: "/hotels/kara-o-mula/gallery/gallery-img9.jpeg" },

];

const Gallery = () => {
  const [isActive, setIsActive] = useState(false);
  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const [selectedImage, setSelectedImage] = useState(images[0].image);
  const scrollRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    const firstThumb = thumbnailRefs.current[0];
    if (container && firstThumb) {
      container.scrollTo({
        left: firstThumb.offsetLeft - 16,
        behavior: "auto",
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    const scrollNext = () => {
      if (!container || thumbnailRefs.current.length === 0) return;

      indexRef.current = (indexRef.current + 1) % thumbnailRefs.current.length;
      const nextThumb = thumbnailRefs.current[indexRef.current];

      if (nextThumb) {
        container.scrollTo({
          left: nextThumb.offsetLeft - 16,
          behavior: "smooth",
        });
        setSelectedImage(images[indexRef.current].image);
      }
    };

    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;

    indexRef.current = (indexRef.current - 1 + images.length) % images.length;
    const prevThumb = thumbnailRefs.current[indexRef.current];

    if (prevThumb) {
      container.scrollTo({
        left: prevThumb.offsetLeft - 16,
        behavior: "smooth",
      });
      setSelectedImage(images[indexRef.current].image);
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;

    indexRef.current = (indexRef.current + 1) % images.length;
    const nextThumb = thumbnailRefs.current[indexRef.current];

    if (nextThumb) {
      container.scrollTo({
        left: nextThumb.offsetLeft - 16,
        behavior: "smooth",
      });
      setSelectedImage(images[indexRef.current].image);
    }
  };

  return (
    <div className="space-y-2 max-w-full md:max-w-5xl mx-auto px-4 py-6 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Delicious Foods Gallery
      </h2>
      <p className="text-sm sm:text-base text-center text-gray-600 max-w-xl mx-auto">
        Explore our mouth-watering meals served with love and elegance in a
        luxury dining setting.
      </p>
      <Link
        href="/gallery"
        className="text-sm lg:text-lg md:text-md flex justify-center"
      >
        <button
          className="relative text-black py-1 border-b-2 border-transparent"
          onMouseEnter={activateHover}
          onMouseLeave={deactivateHover}
          onTouchStart={activateHover}
          onTouchEnd={deactivateHover}
        >
          Explore
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
              isActive ? "w-full" : "w-8"
            }`}
          ></span>
        </button>
      </Link>

      {/* Main Image */}
      <div className="w-full aspect-[21/9] relative overflow-hidden shadow-lg mt-5">
        <Image
          src={selectedImage}
          alt="Selected Food"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Arrow Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={scrollLeft}
          className="bg-white shadow hover:bg-gray-300"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white shadow hover:bg-gray-300"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide scroll-smooth"
      >
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className={`min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-20 sm:h-24 cursor-pointer overflow-hidden border-2 ${
              selectedImage === img.image
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => {
              indexRef.current = index;
              setSelectedImage(img.image);
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
