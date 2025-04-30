"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { image: "/hotels/heritage/foods/food-img1.jpg" },
  { image: "/hotels/heritage/foods/food-img2.jpeg" },
  { image: "/hotels/heritage/foods/food-img3.jpg" },
  { image: "/hotels/heritage/foods/food-img1.jpg" },
  { image: "/hotels/heritage/foods/food-img2.jpeg" },
  { image: "/hotels/heritage/foods/food-img3.jpg" },
  { image: "/hotels/heritage/foods/food-img1.jpg" },
  { image: "/hotels/heritage/foods/food-img2.jpeg" },
  { image: "/hotels/heritage/foods/food-img3.jpg" },
  { image: "/hotels/heritage/foods/food-img1.jpg" },
  { image: "/hotels/heritage/foods/food-img2.jpeg" },
  { image: "/hotels/heritage/foods/food-img3.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].image);
  const scrollRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manual scroll handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center">Delicious Foods Gallery</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Explore our mouth-watering meals served with love and elegance in a
        luxury dining setting.
      </p>

      {/* Main Image */}
      <div className="w-full aspect-video relative overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt="Selected Food"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Arrows */}
      <div className="flex justify-between items-center">
        <button onClick={scrollLeft} className="p-2 bg-white shadow hover:bg-gray-100">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={scrollRight} className="p-2 bg-white shadow hover:bg-gray-100">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`min-w-[150px] h-24 cursor-pointer overflow-hidden border-4 ${
              selectedImage === img.image ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img.image)}
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
