"use client";

import { useEffect, useState } from "react";

export default function Form() {
  const [experiences, setExperience] = useState([]);
  const [form, setForm] = useState({
    image_right: "",
    description_right: "",
    image_left: "",
    description_left: "",
  });
  const [editingExpId, setEditingExpId] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  useEffect(() => {
    // Fetch hotels initially
    fetch("/api/hotels") // You’ll need to create this endpoint
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
        if (data.data.length > 0) {
          const firstHotelId = data.data[0]._id;
          setSelectedHotelId(firstHotelId);
          fetchExperience(firstHotelId);
        }
      });
  }, []);

  const fetchExperience = async (hotelId) => {
    const res = await fetch(`/api/page-exp?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("Fetched experience:", data.data);
    console.log("hotelId", hotelId);

    if (data.success) setExperience(data.data);
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    console.log("log", id);
    setSelectedHotelId(id);
    fetchExperience(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    if (editingExpId) 
      {
      alert("Editing not fully supported yet for image update.");
      return;
    }
      // Create new user with image
      const formData = new FormData();
      formData.append("selectedHotelId", selectedHotelId);
      if (form.image_right) formData.append("image_right", form.image_right);
      formData.append("description_right", form.description_right);
      if (form.image_left) formData.append("image_left", form.image_left);
      formData.append("description_left", form.description_left);

        
      const res = await fetch("/api/page-exp", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({
          image_right: "",
          description_right: "",
          image_left: "",
          description_left: "",
        });
        fetchExperience();
      } else {
        alert("Error: " + result.error);
      }
    
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this exp?")) return;

    const res = await fetch(`/api/page-exp/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "experience deleted") {
      fetchExperience();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (expereince) => {
    setForm({
      image_right: expereince.image_right,
      description_right: expereince.description_right,
      image_left: expereince.image_left,
      description_left: expereince.description_left,
    }); // image not edited here
    // setEditingExpId(expereince._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Experience Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          onChange={handleSelectChange}
          value={selectedHotelId || ""}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          {hotels.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.hotel_name}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image_right: e.target.files[0] })}
          className="w-full"
        />

        <input
          type="text"
          name="description_right"
          placeholder="Description Right"
          value={form.description_right}
          onChange={(e) =>
            setForm({ ...form, description_right: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        {/* {!editingAccommodationId && ( */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image_left: e.target.files[0] })}
          className="w-full"
        />

        {/* )} */}
        <input
          type="text"
          name="description_left"
          placeholder="Description Left"
          value={form.description_left}
          onChange={(e) =>
            setForm({ ...form, description_left: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingExpId ? "Update" : "Submit"}
        </button>
        {editingExpId && (
          <button
            type="button"
            onClick={() => {
              setForm({
                image_right: "",
                description_right: "",
                image_left: "",
                description_left: "",
              });
              setEditingExpId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Experience</h2>
      <div className="mt-4 space-y-4">
        {experiences.map((experience) => (
          <div
            key={experience._id}
            className="border-b pb-4 flex items-center gap-4"
          >
            {experience.image_right && (
              <img
                src={experience.image_right}
                alt="image right"
                className="w-16 h-16 object-cover"
              />
            )}
            {experience.image_left && (
              <img
                src={experience.image_left}
                alt="image_left"
                className="w-16 h-16 object-cover"
              />
            )}

            <div className="flex-1">
              <p>
                {experience.description_right} ({experience.description_left})
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(experience)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(experience._id)}
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
