import Image from "next/image";
import Link from "next/link";

const OfferGrid = ({ offers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {offers.map((offer, index) => (
        <div key={index} className="relative overflow-hidden shadow-md group">
          {/* Offer Image */}
        <Link href={`${offer.url}`}>
        <Image
            src={`${offer.image}`}
            alt={offer.title}
            width={1000}
            height={100}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          </Link>
        
          {/* Offer Title */}
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-3 text-lg">
            {offer.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferGrid;
