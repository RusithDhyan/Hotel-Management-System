"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryForm({hotelId}) {
  const [galleries, setGallery] = useState([]);
  const [form, setForm] = useState({
    image_slider: []
  });
  const [editingGalleryId, setEditingGalleryId] = useState(null);

  const fetchGallery = async () => {
    const res = await fetch(`/api/gallery?hotelId=${hotelId}`);
    const data = await res.json();
    console.log("fetched galleries..",data);
    if (data.success) setGallery(data.data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("my form",form);
    if (editingGalleryId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/gallery/${editingGalleryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         
          image_slider: form.image_slider
        }),
      });

      const result = await res.json();
      if (result.message === "Gallerys not found") {
        alert("Gallerys not found.");
      } else {
        setEditingGalleryId(null);
        setForm({
          image_slider: [],
        });
        fetchGallery();
      }
    } else {
      // Create new user with image
      const formData = new FormData(); 
      formData.append("hotelId", hotelId);   
      if (form.image_slider && form.image_slider.length > 0) {
        form.image_slider.forEach((img) => {
          formData.append("image_slider", img); // NOTE: "images" matches API handler
        });
      }


      const res = await fetch("/api/gallery", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({
          image_slider: []
        });
        fetchGallery();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this gallery?")) return;

    const res = await fetch(`/api/gallery/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Gallery deleted") {
      fetchGallery();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (gallery) => {
    setForm({
      image_slider: gallery.image_slider
    }); // image not edited here
    setEditingGalleryId(gallery._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gallery Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) =>
              setForm({ ...form, image_slider: Array.from(e.target.files) })
            }
          />
    

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingGalleryId ? "Update" : "Submit"}
        </button>
        {editingGalleryId && (
          <button
            type="button"
            onClick={() => {
              setForm({
                title: "",
                description: "",
                main_title: "",
                main_description: "",
                body_title: "",
                body_description: "",
                image: "",
                image_slider: []
              });
             setEditingGalleryId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Gallery</h2>
      <div className="mt-4 space-y-4">
        {galleries.map((gallery) => (
          <div key={gallery._id} className="border-b pb-4 flex items-center gap-4">
            {gallery.image && (
              <Image
                width={1000}
                height={100}
                src={gallery.image}
                alt="hello"
                className="w-16 h-16 object-cover rounded"
              />
            )}
             {Array.isArray(gallery.image_slider) &&
              gallery.image_slider.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="room"
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
            <div className="flex-1">
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(gallery)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(gallery._id)}
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
