"use client";
import { useEffect, useState } from "react";

export default function OfferForm() {
   const [hotels, setHotel] = useState([]);
  const [form, setForm] = useState({
    hotel_name: "",
    title: "",
    location: "",
    description: "",
    thumbnail: "",
    image: "",
    cover_image: ""
  });
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
      alert("Editing not fully supported yet for image update.");
      return;
    }
const formData = new FormData();
      formData.append("hotel_name", form.hotel_name);
      formData.append("title", form.title);
      formData.append("location", form.location);
      formData.append("description", form.description);
      if (form.thumbnail) formData.append("thumbnail", form.thumbnail);
      if (form.image) formData.append("image", form.image);
            if (form.cover_image) formData.append("cover_image", form.cover_image);

    const res = await fetch("/api/hotels", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
setForm({
              hotel_name: "",
          title: "",
          location: "",
          description: "",
          thumbnail: "",
          image: "",
          cover_image: ""
        });      fetchHotel();
    } else {
      alert("Error: " + result.error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this Hotel?")) return;

    const res = await fetch(`/api/hotels/${id}`, { method: "DELETE" });
    const result = await res.json();
    if (result.success || result.message === "Hotel deleted") {
      fetchHotel();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (hotel) => {
    setForm({
      hotel_name: hotel.hotel_name,
      title: hotel.title,
      location: hotel.location,
      description: hotel.description,
      thumbnail: hotel.thumbnail,
      image: hotel.image,
      cover_image: hotel.cover_image
    });
    setEditingHotelId(offer._id);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Offer Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="hotel_name"
          placeholder="Hotel Name"
          value={form.hotel_name}
          onChange={(e) => setForm({ ...form, hotel_name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
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
            name="thumbnail"
            accept="image/*"
            onChange={(e) => setForm({ ...form, thumbnail: e.target.files[0] })}
            className="w-full"
          />
        )}
        {!editingHotelId && (
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            className="w-full"
          />
        )}
         {!editingHotelId && (
          <input
            type="file"
            name="cover_image"
            accept="image/*"
            onChange={(e) => setForm({ ...form, cover_image: e.target.files[0] })}
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
              setForm({
                hotel_name: "",
                title: "",
                location: "",
                description: "",
                thumbnail: "",
                image: "",
                cover_image: ""
              });
              setEditingHotelId(null);
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mt-6">Submitted Offers</h2>
      <div className="mt-4 space-y-4">
        {hotels.map((hotel) => (
          <div key={hotel._id} className="border-b pb-4 flex items-center gap-4">
            {hotel.image && (
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-16 h-16 object-cover"
              />
            )}
            <div className="flex-1">
              <p>
                {hotel.hotel_type} ({hotel.title})
              </p>
              <p className="text-sm text-gray-600">{hotel.description}</p>
              <div className="space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(hotel)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(hotel._id)}
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


// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HotelForm() {
//   const [hotel, setHotel] = useState([]);
//   const [form, setForm] = useState({
//     hotel_name: "",
//     title: "",
//     location: "",
//     description: "",
//     thumbnail: "",
//     image: "",
//     cover_image: ""
//   });
//   const [editingHotelId, setEditingHotelId] = useState(null);

//   const fetchHotel = async () => {
//     const res = await fetch("/api/hotels");
//     const data = await res.json();
//     if (data.success) setHotel(data.data);
//   };

//   useEffect(() => {
//     fetchHotel();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingHotelId) {
//       // Update logic (optional image update can be added separately)
//       const res = await fetch(`/api/hotels/${editingHotelId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           hotel_name: form.hotel_name,
//           title: form.title,
//           location: form.location,
//           description: form.description,
//           thumbnail: form.thumbnail,
//           image: form.image,
//           cover_image: form.cover_image
//         }),
//       });

//       const result = await res.json();
//       if (result.message === "Hotel not found") {
//         alert("Hotel not found.");
//       } else {
//         setEditingHotelId(null);
//         setForm({
//           hotel_name: "",
//           title: "",
//           location: "",
//           description: "",
//           thumbnail: "",
//           image: "",
//           cover_image: ""
//         });
//         fetchHotel();
//       }
//     } else {
//       // Create new user with image
//       const formData = new FormData();
//       formData.append("hotel_name", form.hotel_name);
//       formData.append("title", form.title);
//       formData.append("location", form.location);
//       formData.append("description", form.description);
//       if (form.thumbnail) formData.append("thumbnail", form.thumbnail);
//       if (form.image) formData.append("image", form.image);
//             if (form.cover_image) formData.append("cover_image", form.cover_image);


//       const res = await fetch("/api/hotels", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await res.json();
//       if (result.success) {
//         setForm({
//               hotel_name: "",
//           title: "",
//           location: "",
//           description: "",
//           thumbnail: "",
//           image: "",
//           cover_image: ""
//         });
//         fetchHotel();
//       } else {
//         alert("Error: " + result.error);
//       }
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this hotel?")) return;

//     const res = await fetch(`/api/hotels/${id}`, {
//       method: "DELETE",
//     });

//     const result = await res.json();
//     if (result.message === "Hotel deleted") {
//       fetchHotel();
//     } else {
//       alert("Delete failed.");
//     }
//   };

//   const handleEdit = (hotel) => {
//     setForm({
//       hotel_name: hotel.hotel_name,
//       title: hotel.title,
//       location: hotel.location,
//       description: hotel.description,
//       thumbnail: hotel.thumbnail,
//       image: hotel.image,
//       cover_image: hotel.cover_image
//     }); // image not edited here
//     setEditingHotelId(hotel._id);
//   };

//   return (
//     <main className="p-6 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">User Form</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="hotel_name"
//           placeholder="Hotel Name"
//           value={form.hotel_name}
//           onChange={(e) => setForm({ ...form, hotel_name: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
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
//           name="location"
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => setForm({ ...form, location: e.target.value })}
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
//         {!editingHotelId && (
//           <input
//             type="file"
//             name="thumbnail"
//             accept="image/*"
//             onChange={(e) => setForm({ ...form, thumbnail: e.target.files[0] })}
//             className="w-full"
//           />
//         )}
//         {!editingHotelId && (
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//             className="w-full"
//           />
//         )}
//          {!editingHotelId && (
//           <input
//             type="file"
//             name="cover_image"
//             accept="image/*"
//             onChange={(e) => setForm({ ...form, cover_image: e.target.files[0] })}
//             className="w-full"
//           />
//         )}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           {editingHotelId ? "Update" : "Submit"}
//         </button>
//         {editingHotelId && (
//           <button
//             type="button"
//             onClick={() => {
//               setForm({
//                 hotel_name: "",
//                 title: "",
//                 location: "",
//                 description: "",
//                 thumbnail: "",
//                 image: "",
//                 cover_image: ""
//               });
//               setEditingHotelId(null);
//             }}
//             className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h2 className="text-xl font-semibold mt-6">Submitted Hotels</h2>
//       <div className="mt-4 space-y-4">
//         {hotel.map((h) => (
//           <div key={h._id} className="border-b pb-4 flex items-center gap-4">
//             {h.thumbnail && (
//               <Image
//                 width={1000}
//                 height={100}
//                 src={h.thumbnail}
//                 alt="hello"
//                 className="w-16 h-16 object-cover rounded"
//               />
//             )}
//             <div className="flex-1">
//               <p>
//                 {h.hotel_name} ({h.title})
//               </p>
//               <div className="space-x-2 mt-2">
//                 <button
//                   onClick={() => handleEdit(h)}
//                   className="bg-green-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(h._id)}
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
