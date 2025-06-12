// "use client";
// import { useEffect, useState } from "react";

// export default function ExperienceForm() {
//   const [experiences, setExperience] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     main_title: "",
//     main_description: "",
//     body_title: "",
//     body_description: "",
//     image: "",
//     image_slider: [],
//   });
//   const [editingExperienceId, setEditingExperienceId] = useState(null);

//   const fetchExperience = async () => {
//     const res = await fetch("/api/experience");
//     const data = await res.json();
//     if (data.success) setExperience(data.data);
//   };

//   useEffect(() => {
//     fetchExperience();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingExperienceId) {
//       alert("Editing not fully supported yet for image update.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("description", form.description);
//     formData.append("main_title", form.main_title);
//     formData.append("main_description", form.main_description);
//     formData.append("body_title", form.body_title);
//     formData.append("body_description", form.body_description);
//     if (form.image) formData.append("image", form.image);
//     if (form.image_slider && form.image_slider.length > 0) {
//       form.image_slider.forEach((img) => {
//         formData.append("image_slider", img); // NOTE: "images" matches API handler
//       });
//     }

//     const res = await fetch("/api/experience", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await res.json();
//     if (result.success) {
//       setForm({
//         title: "",
//         description: "",
//         main_title: "",
//         main_description: "",
//         body_title: "",
//         body_description: "",
//         image: "",
//         image_slider: [],
//       });
//       fetchExperience();
//     } else {
//       alert("Error: " + result.error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this experience?")) return;

//     const res = await fetch(`/api/experience/${id}`, { method: "DELETE" });
//     const result = await res.json();
//     if (result.success || result.message === "exp deleted") {
//       fetchExperience();
//     } else {
//       alert("Delete failed.");
//     }
//   };

//   const handleEdit = (experience) => {
//     setForm({
//       title: experience.title,
//       description: experience.description,
//       main_title: experience.main_title,
//       main_description: experience.main_description,
//       body_title: experience.body_title,
//       body_description: experience.body_description,
//       image: experience.image,
//       image_slider: [],
//     });
//     setEditingExperienceId(offer._id);
//   };

//   return (
//     <main className="p-6 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Experience Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="main_title"
//           placeholder="Main Title"
//           value={form.main_title}
//           onChange={(e) => setForm({ ...form, main_title: e.target.value })}
//           className="w-full p-2 border rounded"

//         />
//         <input
//           type="text"
//           name="main_description"
//           placeholder="Main Description"
//           value={form.main_description}
//           onChange={(e) =>
//             setForm({ ...form, main_description: e.target.value })
//           }
//           className="w-full p-2 border rounded"

//         />
//         <input
//           type="text"
//           name="body_title"
//           placeholder="Body Title"
//           value={form.body_title}
//           onChange={(e) => setForm({ ...form, body_title: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="body_description"
//           placeholder="Body Description"
//           value={form.body_description}
//           onChange={(e) =>
//             setForm({ ...form, body_description: e.target.value })
//           }
//           className="w-full p-2 border rounded"
//           required
//         />
//         {!editingExperienceId && (
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//             className="w-full"
//           />
//         )}
//         <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={(e) =>
//               setForm({ ...form, image_slider: Array.from(e.target.files) })
//             }
//           />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           {editingExperienceId ? "Update" : "Submit"}
//         </button>
//         {editingExperienceId && (
//           <button
//             type="button"
//             onClick={() => {
//               setForm({
//                 title: "",
//                 description: "",
//                 main_title: "",
//                 main_description: "",
//                 body_title: "",
//                 body_description: "",
//                 image: "",
//                 image_slider: [],
//               });
//               setEditingExperienceId(null);
//             }}
//             className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h2 className="text-xl font-semibold mt-6">Submitted Experience</h2>
//       <div className="mt-4 space-y-4">
//         {experiences.map((experience) => (
//           <div
//             key={experience._id}
//             className="border-b pb-4 flex items-center gap-4"
//           >
//             {experience.image && (
//               <img
//                 src={experience.image}
//                 alt={experience.title}
//                 className="w-16 h-16 object-cover"
//               />
//             )}
//             <div className="flex-1">
//               <p>
//                 {experience.main_title} ({experience.title})
//               </p>
//               <p className="text-sm text-gray-600">{experience.description}</p>
//               <div className="space-x-2 mt-2">
//                 <button
//                   onClick={() => handleEdit(experience)}
//                   className="bg-green-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(experience._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExperienceForm() {
  const [experiences, setExperience] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    main_title: "",
    main_description: "",
    body_title: "",
    body_description: "",
    image: "",
    image_slider: [],
  });
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
    console.log("form:",form);

    if (editingExpId) {
       alert("Editing not fully supported yet for image update.");
      return;
    }
     
      // Create new user with image
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("main_title", form.main_title);
      formData.append("main_description", form.main_description);
      formData.append("body_title", form.body_title);
      formData.append("body_description", form.body_description);
      if (form.image) formData.append("image", form.image);
      if (form.image_slider && form.image_slider.length > 0) {
        form.image_slider.forEach((img) => {
          formData.append("image_slider", img); // NOTE: "images" matches API handler
        });
      }

      const res = await fetch("/api/experience", {
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
          image: "",
          image_slider: [],
        });
        fetchExperience();
      } else {
        alert("Error: " + result.error);
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
    setForm({
      title: experience.title,
      description: experience.description,
      main_title: experience.main_title,
      main_description: experience.main_description,
      body_title: experience.body_title,
      body_description: experience.body_description,
      image: experience.image,
      image_slider: [],
    }); // image not edited here
    // setEditingExpId(experience._id);
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
        {/* {!editingExpId && ( */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            className="w-full"
          />
        {/* )} */}
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
          {editingExpId ? "Update" : "Submit"}
        </button>
        {editingExpId && (
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
                image_slider: [],
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
        {experiences.map((exp) => (
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
            {Array.isArray(exp.image_slider) &&
              exp.image_slider.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="room"
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
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
