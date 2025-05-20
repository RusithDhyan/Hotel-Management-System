"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExperienceForm() {
  const [experience, setExperience] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", image: null });
  const [editingExpId, setEditingExpId] = useState(null);

  const fetchExperience = async () => {
    const res = await fetch("/api/experience");
    const data = await res.json();
    if (data.success) setExperience(data.data);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingExpId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/experience/${editingExpId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: form.title, description: form.description,image: form.image }),
      });

      const result = await res.json();
      if (result.message === "Expereince not found") {
        alert("Experience not found.");
      } else {
        setEditingExpId(null);
        setForm({ title: "", description: "", image: null });
        fetchExperience();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      if (form.image) formData.append("image", form.image);

      const res = await fetch("/api/experience", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({ title: "", description: "", image: null });
        fetchExperience();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this exp?")) return;

    const res = await fetch(`/api/experience/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Experience deleted") {
      fetchExperience();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (experience) => {
    setForm({ title: experience.title, description: experience.description, image: null }); // image not edited here
    setEditingExpId(experience._id);
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
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        {!editingExpId && (
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
          {editingExpId ? "Update" : "Submit"}
        </button>
        {editingExpId && (
          <button
            type="button"
            onClick={() => {
              setForm({ title: "", description: "", image: null });
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
        {experience.map((exp) => (
          <div key={exp._id} className="border-b pb-4 flex items-center gap-4">
            {exp.image && (
              <Image
                width={1000}
                height={100}
                src={exp.image}
                alt="hello"
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p>
                {exp.title} ({exp.description}) 
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(exp)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
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
