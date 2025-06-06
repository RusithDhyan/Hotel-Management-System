"use client";
import { useEffect, useState } from "react";

export default function OfferForm({ hotelId }) {
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({
    offer_type: "",
    title: "",
    description: "",
    image: "",
  });
  const [editingOfferId, setEditingOfferId] = useState(null);

  const fetchOffer = async () => {
    const res = await fetch(`/api/offer?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("Fetched Offers:", data.data); // <- add this

    if (data.success) setOffers(data.data);
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    if (editingOfferId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/offer/${editingOfferId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offer_type: form.room_type,
          title: form.title,
          description: form.description,
          image: form.image,
        }),
      });

      const result = await res.json();
      if (result.message === "Offers not found") {
        alert("Offers not found.");
      } else {
        setEditingOfferId(null);
        setForm({
          offer_type: "",
          title: "",
          description: "",
          image: "",
        });
        fetchOffer();
      }
    } else {
      // Create new offer with image
      const formData = new FormData();
      formData.append("hotelId", hotelId);
      formData.append("offer_type", form.offer_type);
      formData.append("title", form.title);
      formData.append("description", form.description);

      if (form.image) formData.append("image", form.image);

      const res = await fetch("/api/offer", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({
          offer_type: "",
          title: "",
          description: "",
          image: "",
        });
        fetchOffer();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this offer?")) return;

    const res = await fetch(`/api/offer/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Offer deleted") {
      fetchOffer();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (offer) => {
    setForm({
      offer_type: offer.room_type,
      title: offer.price,
      description: offer.description,
      image: offer.image,
    }); // image not edited here
    setEditingOfferId(offer._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Offer Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="offer_type"
          value={form.offer_type}
          onChange={(e) => setForm({ ...form, offer_type: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Type of Room</option>
          <option value="Early Bird">Early Bird Offer</option>
          <option value="Extend Escape">Extended Escape</option>
          <option value="Multi Hotel Offer">Multi-Hotel Stay Offer</option>
          <option value="Journey Combo">Journey Combo Offer</option>
        </select>
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
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        {/* {!editingOfferId && ( */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            className="w-full"
          />
        {/* )} */}
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingOfferId ? "Update" : "Submit"}
        </button>
        {editingOfferId && (
          <button
            type="button"
            onClick={() => {
                setForm({
                    offer_type: "",
                    title: "",
                    description: "",
                    image: "",
                  });
              setEditingOfferId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Offers</h2>
      <div className="mt-4 space-y-4">
        {offers.map((offer) => (
          <div
            key={offer._id}
            className="border-b pb-4 flex items-center gap-4"
          >
            {offer.image && (
              <img
                src={offer.image}
                alt={offer.room_type}
                className="w-16 h-16 object-cover"
              />
            )}
            

            <div className="flex-1">
              <p>
                {offer.room_type} ({offer.title})
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(offer)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(offer._id)}
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
