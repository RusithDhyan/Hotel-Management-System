"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import GalleryForm from "@/app/GalleryForm";

const Gallery = ({ hotelId }) => {
  const [isActive, setIsActive] = useState(false);
  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);

  const [allImages, setAllImages] = useState([]); // flattened images array
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const indexRef = useRef(0);

  const fetchGallery = async () => {
    const res = await fetch(`/api/gallery?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("Fetched Gallery..:", data.data);

    if (data.success && data.data.length > 0) {
      // Flatten all image_slider arrays into one array of image URLs
      const images = data.data.flatMap((item) => item.image_slider || []);
      setAllImages(images);
      setSelectedImage(images[0] || null);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const firstThumb = thumbnailRefs.current[0];
    if (container && firstThumb) {
      container.scrollTo({
        left: firstThumb.offsetLeft - 16,
        behavior: "auto",
      });
    }
  }, [allImages]);

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
        setSelectedImage(allImages[indexRef.current]);
      }
    };

    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, [allImages]);

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;

    indexRef.current =
      (indexRef.current - 1 + allImages.length) % allImages.length;
    const prevThumb = thumbnailRefs.current[indexRef.current];

    if (prevThumb) {
      container.scrollTo({
        left: prevThumb.offsetLeft - 16,
        behavior: "smooth",
      });
      setSelectedImage(allImages[indexRef.current]);
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;

    indexRef.current = (indexRef.current + 1) % allImages.length;
    const nextThumb = thumbnailRefs.current[indexRef.current];

    if (nextThumb) {
      container.scrollTo({
        left: nextThumb.offsetLeft - 16,
        behavior: "smooth",
      });
      setSelectedImage(allImages[indexRef.current]);
    }
  };

  return (
    <div className="space-y-2 max-w-full md:max-w-5xl mx-auto px-4 py-6 sm:py-20">
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
      {selectedImage && (
        <div className="w-full h-70 sm:w-250 sm:h-100 relative overflow-hidden shadow-lg mt-5">
          <Image
            src={selectedImage}
            alt="Selected Food"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Arrow Buttons */}
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={scrollLeft}
          className="p-1 bg-white shadow hover:bg-gray-300"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="p-1 bg-white shadow hover:bg-gray-300"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide scroll-smooth"
      >
        {allImages.map((img, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className={`min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-20 sm:h-24 cursor-pointer overflow-hidden border-2 ${
              selectedImage === img ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => {
              indexRef.current = index;
              setSelectedImage(img);
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <GalleryForm hotelId={hotelId} />
    </div>
  );
};

export default Gallery;
