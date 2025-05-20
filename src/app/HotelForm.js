"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HotelForm() {
  const [hotel, setHotel] = useState([]);
  const [form, setForm] = useState({ title: "", location: "", description: "", image: null });
  const [editingHotelId, setEditingHotelId] = useState(null);

  const fetchHotel = async () => {
    const res = await fetch("/api/hotels");
    const data = await res.json();
    if (data.success) setHotel(data.data);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingHotelId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/hotels/${editingHotelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: form.title,location: form.location, description: form.description,image: form.image }),
      });

      const result = await res.json();
      if (result.message === "Hotel not found") {
        alert("Hotel not found.");
      } else {
        setEditingHotelId(null);
        setForm({ title: "",location: "", description: "", image: null });
        fetchHotel();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("description", form.description);
      if (form.image) formData.append("image", form.image);

      const res = await fetch("/api/hotels", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({ title: "",location: "", description: "", image: null });
        fetchHotel();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this hotel?")) return;

    const res = await fetch(`/api/hotels/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Hotel deleted") {
      fetchHotel();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (hotel) => {
    setForm({ title: hotel.title, location: hotel.location, description: hotel.description, image: null }); // image not edited here
    setEditingHotelId(hotel._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
         <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
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
        {!editingHotelId && (
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
          {editingHotelId ? "Update" : "Submit"}
        </button>
        {editingHotelId && (
          <button
            type="button"
            onClick={() => {
              setForm({ title: "",location: "", description: "", image: null });
              setEditingHotelId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Hotels</h2>
      <div className="mt-4 space-y-4">
        {hotel.map((h) => (
          <div key={h._id} className="border-b pb-4 flex items-center gap-4">
            {h.image && (
              <Image
                width={1000}
                height={100}
                src={h.image}
                alt="hello"
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p>
                {h.title} ({h.description}) 
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(h)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(h._id)}
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
