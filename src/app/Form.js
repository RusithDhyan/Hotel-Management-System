"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Form() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", image: null });
  const [editingUserId, setEditingUserId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch("/api/submit");
    const data = await res.json();
    if (data.success) setUsers(data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingUserId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/submit/${editingUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: form.name, email: form.email,image: form.image }),
      });

      const result = await res.json();
      if (result.message === "User not found") {
        alert("User not found.");
      } else {
        setEditingUserId(null);
        setForm({ name: "", email: "", image: null });
        fetchUsers();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      if (form.image) formData.append("image", form.image);

      const res = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({ name: "", email: "", image: null });
        fetchUsers();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    const res = await fetch(`/api/submit/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "User deleted") {
      fetchUsers();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, image: null }); // image not edited here
    setEditingUserId(user._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        {!editingUserId && (
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
          {editingUserId ? "Update" : "Submit"}
        </button>
        {editingUserId && (
          <button
            type="button"
            onClick={() => {
              setForm({ name: "", email: "", image: null });
              setEditingUserId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Users</h2>
      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <div key={user._id} className="border-b pb-4 flex items-center gap-4">
            {user.image && (
              <Image
                width={1000}
                height={100}
                src={user.image}
                alt={user.name}
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p>
                {user.name} ({user.email}) 
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
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
