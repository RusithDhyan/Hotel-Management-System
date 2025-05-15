import Image from "next/image";

export default function Blog4() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/blogs/blog1/blog1.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Blog Text Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          A Taste of Elegance: Dining Delights at Heritage Hotel
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-extralight text-sm sm:text-base text-justify">
          Discover a world of flavor at Heritage Hotel’s signature
          restaurants...
        </p>
      </div>

      {/* First Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src="/blogs/blog1/blog3.jpg"
            alt="Chef Special"
            fill
            className="object-cover"
          />
        
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Chef’s Special Creations
          </h1>
          <p>
            Explore our chef’s signature dishes that blend tradition with
            innovation. These culinary masterpieces showcase the finest
            ingredients and are crafted to provide an unforgettable dining
            experience. Don’t miss out on these mouthwatering creations on your
            next visit!
          </p>
        </div>
      </div>
    </div>
  );
}
