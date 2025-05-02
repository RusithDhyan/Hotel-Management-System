"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { image: "/hotels/heritage/gallery/gallery-img1.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img2.jpeg" },
  { image: "/hotels/heritage/gallery/gallery-img3.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img4.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img5.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img6.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img7.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img8.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img9.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img10.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img11.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img12.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img13.jpg" },
  { image: "/hotels/heritage/gallery/gallery-img14.jpg" },

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].image);
  const scrollRef = useRef(null);
  const thumbnailRefs = useRef([]);

  // Infinite auto-scroll with looping
  useEffect(() => {
    const container = scrollRef.current;
    let index = 0;
  
    const scrollNext = () => {
      if (!container || thumbnailRefs.current.length === 0) return;
  
      index = (index + 1) % thumbnailRefs.current.length;
      const nextThumb = thumbnailRefs.current[index];
  
      if (nextThumb) {
        container.scrollTo({ left: nextThumb.offsetLeft - 16, behavior: "smooth" }); // 16 = padding gap adjustment
        setSelectedImage(images[index].image);
      }
    };
  
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);
  

  // Manual scroll buttons
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Dynamically update selected image based on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    thumbnailRefs.current.forEach((ref, i) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const thumbCenter = rect.left + rect.width / 2;
        const containerRect = container.getBoundingClientRect();
        const distance = Math.abs(thumbCenter - (containerRect.left + container.offsetWidth / 2));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
    });

    setSelectedImage(images[closestIndex].image);
  };

  // Attach scroll event
  useEffect(() => {
    const container = scrollRef.current;
    const firstThumb = thumbnailRefs.current[0];
  
    if (container && firstThumb) {
      container.scrollTo({ left: firstThumb.offsetLeft - 16, behavior: "auto" });
    }
  }, []);
  

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center">Delicious Foods Gallery</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Explore our mouth-watering meals served with love and elegance in a luxury dining setting.
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
        className="flex gap-4 overflow-x-auto py-2 scrollbar-hide scroll-smooth"
      >
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className={`min-w-[100px] md:min-w-[150px] h-24 cursor-pointer overflow-hidden border-4 ${
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
