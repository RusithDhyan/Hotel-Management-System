"use client";
import {
  Bath,
  Bed,
  Beer,
  Box,
  Briefcase,
  Brush,
  Clock,
  CloudSun,
  Coffee,
  CupSoda,
  DoorOpen,
  Flame,
  ForkKnife,
  LampDesk,
  Lock,
  Monitor,
  Network,
  Phone,
  PillBottle,
  Refrigerator,
  Shield,
  ShowerHead,
  Snowflake,
  Sofa,
  Thermometer,
  Toilet,
  Tv,
  Tv2,
  Utensils,
  Wifi,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const optionsWithIcons = [
  { label: "Private Bathroom with Shower", icon: Bath },
  { label: "Kitchen Utensils", icon: Utensils },
  { label: "Flat-Screen TV", icon: Tv },
  { label: "Air Condition", icon: Snowflake },
  { label: "Hot Water", icon: Thermometer },
  { label: "Tea & Coffee", icon: Coffee },
  { label: "Mini Fridge", icon: Refrigerator },
  { label: "Complimentary Wi-Fi", icon: Wifi },
  { label: "Queen Bed", icon: Bed },
  { label: "King Size Bed", icon: Bed },
  {label: "Double Bed", icon: Bed},
  { label: "Ensuite Bathroom", icon: Bath },
    { label: "Toiletries", icon: Toilet },

    { label: "Bathrobe", icon: ShowerHead },
  { label: "In-room Safe", icon: Shield },
  { label: "Mini Bar", icon: Beer },
  { label: "Bottled Water", icon: PillBottle },
  { label: "Telephone", icon: Phone },
  { label: "24/7 Front Desk", icon: Clock },
  { label: "Tv with Stand", icon: Tv2 },
  { label: "Sitting area & Lounge chair", icon: Sofa },
  { label: "Dining Set", icon: ForkKnife },
  { label: "Microwave", icon: Monitor },
  { label: "Cooker or mini Cooker", icon: Flame },
  { label: "Tea Station", icon: CupSoda },
  { label: "Luggage Rack", icon: Briefcase },
  { label: "Wardrobe", icon: Box },
  { label: "Dressing table with chair", icon: Brush },
    { label: "Hair Dryer", icon: CloudSun },
  {label: "Office desk & chair", icon: LampDesk},
  { label: "Safe Box", icon: Lock },
  {label: "Ultimate High-Speed Internet Access", icon: Network},
    { label: "Private Balcony", icon: DoorOpen },


];

export default function AccommodationForm({ hotelId }) {
  const [accommodations, setAccommodations] = useState([]);
  const [form, setForm] = useState({
    room_type: "",
    price: "",
    size: "",
    description: "",
    image: "",
    images: [],
    spec_type: [],
  });
  const [editingAccommodationId, setEditingAccommodationId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleOption = (value) => {
    const newSelected = form.spec_type.includes(value)
      ? form.spec_type.filter((item) => item !== value)
      : [...form.spec_type, value];

    setForm({ ...form, spec_type: newSelected });
  };

  const fetchAccommodation = async () => {
    const res = await fetch(`/api/accommodation?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("Fetched accommodations:", data.data); // <- add this

    if (data.success) setAccommodations(data.data);
  };

  useEffect(() => {
    fetchAccommodation();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    if (editingAccommodationId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/accommodation/${editingAccommodationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room_type: form.room_type,
          price: form.price,
          size: form.size,
          description: form.description,
          image: form.image,
          // images: form.images,
          spec_type: form.spec_type,
        }),
      });

      const result = await res.json();
      if (result.message === "Accommodation not found") {
        alert("Accommodation not found.");
      } else {
        setEditingAccommodationId(null);
        setForm({
          room_type: "",
          price: "",
          size: "",
          description: "",
          image: "",
          // images: [],
          spec_type: [],
        });
        fetchAccommodation();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("hotelId", hotelId);
      formData.append("room_type", form.room_type);
      formData.append("price", form.price);
      formData.append("size", form.size);
      formData.append("description", form.description);

      if (form.image) formData.append("image", form.image);

      if (form.images && form.images.length > 0) {
        form.images.forEach((img) => {
          formData.append("images", img); // NOTE: "images" matches API handler
        });
      }
      if (form.spec_type && form.spec_type.length > 0) {
        form.spec_type.forEach((spec) => {
          formData.append("spec_type", spec); // NOTE: "images" matches API handler
        });
      }

      const res = await fetch("/api/accommodation", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({
          room_type: "",
          price: "",
          size: "",
          description: "",
          image: "",
          images: [],
          spec_type: [],
        });
        fetchAccommodation();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this room?")) return;

    const res = await fetch(`/api/accommodation/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Accommodation deleted") {
      fetchAccommodation();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (accommodation) => {
    setForm({
      room_type: accommodation.room_type,
      price: accommodation.price,
      size: accommodation.size,
      description: accommodation.description,
      image: accommodation.image,
      spec_type: [],
    }); // image not edited here
    setEditingAccommodationId(accommodation._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Accommodation Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <select
          name="room_type"
          value={form.room_type}
          onChange={(e) => setForm({ ...form, room_type: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Type of Room</option>
          <option value="Executive">Executive</option>
          <option value="Family">Family</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Premier">Premier</option>
        </select> */}
        <input
          type="text"
          name="room_type"
          placeholder="Room Type"
          value={form.room_type}
          onChange={(e) => setForm({ ...form, room_type: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="size"
          placeholder="Size"
          value={form.size}
          onChange={(e) => setForm({ ...form, size: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        {!editingAccommodationId && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            className="w-full"
          />
        )}
        {!editingAccommodationId && (

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) =>
              setForm({ ...form, images: Array.from(e.target.files) })
            }
          />
        )}
        <div className="relative w-full" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="border p-2 rounded cursor-pointer bg-white"
          >
            {form.spec_type.length > 0
              ? form.spec_type.join(", ")
              : "Select specifications"}
          </div>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-md max-h-60 overflow-y-auto">
              {optionsWithIcons.map(({ label, icon: Icon }) => (
                <label
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={form.spec_type.includes(label)}
                    onChange={() => toggleOption(label)}
                    className="mr-2"
                  />
                  <Icon className="w-4 h-4 text-red-300" />
                  {label}
                </label>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingAccommodationId ? "Update" : "Submit"}
        </button>
        {editingAccommodationId && (
          <button
            type="button"
            onClick={() => {
              setForm({
                room_type: "",
                price: "",
                size: "",
                description: "",
                image: "",
                images: [],
                spec_type: [],
              });
              setEditingAccommodationId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Accommodations</h2>
      <div className="mt-4 space-y-4">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation._id}
            className="border-b pb-4 flex items-center gap-4"
          >
            {accommodation.image && (
              <img
                src={accommodation.image}
                alt={accommodation.room_type}
                className="w-16 h-16 object-cover"
              />
            )}
            {Array.isArray(accommodation.images) &&
              accommodation.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="room"
                  className="w-16 h-16 object-cover rounded"
                />
              ))}

            <div className="flex-1">
              <p>
                {accommodation.room_type} ({accommodation.size})
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(accommodation)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(accommodation._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
