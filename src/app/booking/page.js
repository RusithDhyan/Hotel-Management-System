import Image from "next/image";

export default function BookingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Confirm Your Booking
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Booking Form */}
        <div className="bg-white shadow-xl p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
              <input
                type="date"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <textarea
              placeholder="Special Requests (optional)"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              rows="3"
            ></textarea>
          </form>
        </div>

        {/* Right Column - Room Summary + Price */}
        <div className="bg-gray-100 shadow-xl p-6 space-y-6 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Selection</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-full sm:w-40">
                <Image
                  src="/hotels/heritage/accommodations/deluxe.jpg"
                  alt="Room Image"
                  width={1000}
                  height={100}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="font-medium">Deluxe Sea View Room</p>
                <p className="text-sm text-gray-500">2 Adults · 1 Queen Bed</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Price Details</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>3 nights</span>
                <span>$300</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>$45</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$345</span>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
