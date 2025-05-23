// src/app/context/DataContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [foods, setFoods] = useState([]);

  // Fetch hotels only once
  useEffect(() => {
     if (hotels.length === 0) {
       fetch('/api/hotels')
         .then(res => res.json())
         .then(data => {
           console.log('Fetched hotels:', data);
           setHotels(data.data); // ✅ Extract the actual array
         });
     }
   }, []);

  // Fetch experiences
  useEffect(() => {
    fetch("/api/experience")
      .then(res => res.json())
      .then(data => setExperiences(data.data));
  }, []);

  //Blog
  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data.data));
  }, []);

  // Fetch galleries
  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => setGalleries(data.data));
  }, []);

  // Fetch food
  useEffect(() => {
    fetch("/api/food")
      .then(res => res.json())
      .then(data => setFoods(data.data));
  }, []);

  return (
    <DataContext.Provider value={{
      hotels,
      experiences,
      blogs,
      galleries,
      foods
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
