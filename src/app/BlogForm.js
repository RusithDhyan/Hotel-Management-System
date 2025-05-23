"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogForm() {
  const [blogs, setBlog] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    main_title: "",
    main_description: "",
    body_title: "",
    body_description: "",
    image: null,
  });
  const [editingBlogId, setEditingBlogId] = useState(null);

  const fetchBlog = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    if (data.success) setBlog(data.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingBlogId) {
      // Update logic (optional image update can be added separately)
      const res = await fetch(`/api/blogs/${editingBlogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          main_title: form.main_title,
          main_description: form.main_description,
          body_title: form.body_title,
          body_description: form.body_description,
          image: form.image,
        }),
      });

      const result = await res.json();
      if (result.message === "Blogs not found") {
        alert("Blogs not found.");
      } else {
        setEditingBlogId(null);
        setForm({
          title: "",
          description: "",
          main_title: "",
          main_description: "",
          body_title: "",
          body_description: "",
          image: null,
          image_slider: [],
        });
        fetchBlog();
      }
    } else {
      // Create new user with image
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("main_title", form.main_title);
      formData.append("main_description", form.main_description);
      formData.append("body_title", form.body_title);
      formData.append("body_description", form.body_description);
      if (form.image) formData.append("image", form.image);


      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setForm({
          title: "",
          description: "",
          main_title: "",
          main_description: "",
          body_title: "",
          body_description: "",
          image: null,
        });
        fetchBlog();
      } else {
        alert("Error: " + result.error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.message === "Blog deleted") {
      fetchBlog();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      description: blog.description,
      main_title: blog.main_title,
      main_description: blog.main_description,
      body_title: blog.body_title,
      body_description: blog.body_description,
      image: blog.image,
    }); // image not edited here
    setEditingBlogId(blog._id);
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
        <input
          type="text"
          name="main_title"
          placeholder="Main Title"
          value={form.main_title}
          onChange={(e) => setForm({ ...form, main_title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="main_description"
          placeholder="Main Description"
          value={form.main_description}
          onChange={(e) =>
            setForm({ ...form, main_description: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="body_title"
          placeholder="Body Title"
          value={form.body_title}
          onChange={(e) => setForm({ ...form, body_title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="body_description"
          placeholder="Body Description"
          value={form.body_description}
          onChange={(e) =>
            setForm({ ...form, body_description: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />
        {!editingBlogId && (
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
          {editingBlogId ? "Update" : "Submit"}
        </button>
        {editingBlogId && (
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
                image: null,
              });
             setEditingBlogId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Blog</h2>
      <div className="mt-4 space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-b pb-4 flex items-center gap-4">
            {blog.image && (
              <Image
                width={1000}
                height={100}
                src={blog.image}
                alt="hello"
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p>
                {blog.title} ({blog.description})
              </p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
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
