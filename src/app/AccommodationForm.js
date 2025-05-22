"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AccommodationForm({hotelId}) {
  const [accommodations, setAccommodations] = useState([]);
  const [form, setForm] = useState({
    room_type: "",
    price: "",
    size: "",
    description: "",
    image: null,
  });
  const [editingAccommodationId, setEditingAccommodationId] = useState(null);

  const fetchAccommodation = async () => {
    const res = await fetch(`/api/accommodation?hotelId=${hotelId}`);
    const data = await res.json();
    if (data.success) setAccommodations(data.data);
  };

  useEffect(() => {
    fetchAccommodation();
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
          image: null,
        });
        fetchAccommodation();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("hotelId",hotelId);
      formData.append("room_type", form.room_type);
      formData.append("price", form.price);
      formData.append("size", form.size);
      formData.append("description", form.description);

      if (form.image) formData.append("image", form.image);

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
          image: null,
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
      image: null,
    }); // image not edited here
    setEditingAccommodationId(accommodation._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
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
        </select>
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
                image: null,
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
      <h1>{hotelId}</h1>
      <div className="mt-4 space-y-4">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation._id}
            className="border-b pb-4 flex items-center gap-4"
          >
            {accommodation.image && (
              <Image
                width={1000}
                height={100}
                src={accommodation.image}
                alt={accommodation.room_type}
                className="w-16 h-16 object-cover rounded"
              />
            )}
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
